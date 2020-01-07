#!/bin/bash

# Perform cleanup

# Delete the service directory
rm -rf /usr/local/pdfreactor

# Remove the _pdfreactor user and _group
dscl . delete /Users/_pdfreactor
dscl . delete /Groups/_pdfreactor