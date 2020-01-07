#!/bin/bash

# Unload the com.realobjects.pdfReactorWebService LaunchDaemon
launchctl unload -F /Library/LaunchDaemons/com.realobjects.pdfReactorWebService.plist 
rm -rf /Library/LaunchDaemons/com.realobjects.pdfReactorWebService.plist

# Prepare the service directory in /usr/local
mkdir -p /usr/local/pdfreactor/work 
mkdir /usr/local/pdfreactor/logs
mkdir /usr/local/pdfreactor/doctemp
mkdir /usr/local/pdfreactor/fontcache

rm -rf jetty/work
ln -s /usr/local/pdfreactor/work jetty/work

rm -rf jetty/logs
ln -s /usr/local/pdfreactor/logs jetty/logs

# Check if the _pdfreactor group needs to be created
groupExists=$(dscl . list /Groups PrimaryGroupID | grep _pdfreactor | awk '{ print $2 }')

if [ -z "$groupExists" ]; then 
    # Find a free group ID between 150 and 300 and create the _pdfreactor group
    echo "Group _pdfreactor not found, creating group..."
    for i in {150..300}
    do
        if [ `dscl . list /Groups PrimaryGroupID | awk '{print $2}' | grep -w $i` ]; then
            echo "Group with ID $i exists"
        else
            echo "No group with ID $i exists" 
            groupId=$i
            dscl . -create /Groups/_pdfreactor gid $i
            dscl . -create /Groups/_pdfreactor RealName "PDFreactor Web Service Group"
            dscl . -create /Groups/_pdfreactor passwd "*"
            break
        fi
    done
else 
    echo "Group _pdfreactor exists" 
fi

# Check if the _pdfreactor user needs to be created
if [ ! `id -u _pdfreactor 2>/dev/null || echo -1` -ge 0 ]; then 
    # Find a free user ID between 150 and 300 and create the _pdfreactor user
    echo "User _pdfreactor not found, creating user..."
    for j in {150..300} 
    do
        if [ `id -u $j 2>/dev/null || echo -1` -ge 0 ]; then 
            echo "User $j exists"
        else 
            echo "User $j does not exist"
            echo "Creating _pdfreactor user"
            echo "_pdfreactor group ID: $groupId"
            dscl . -create /Users/_pdfreactor
            dscl . -create /Users/_pdfreactor uid $j
            dscl . -create /Users/_pdfreactor gid 300
            dscl . -create /Users/_pdfreactor NFSHomeDirectory /var/empty
            dscl . -create /Users/_pdfreactor UserShell /usr/bin/false
            dscl . -create /Users/_pdfreactor RealName "PDFreactor Web Service User"
            dscl . -create /Users/_pdfreactor passwd "*"
            break
        fi
    done
fi

# Assign the service directory to the _pdfreactor user
chown -R _pdfreactor:_pdfreactor /usr/local/pdfreactor