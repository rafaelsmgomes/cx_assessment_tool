
RealObjects PDFreactor®

Version 10.1.10722.9, 2019-12-16
--------------------------------


Changes in this Version
-----------------------

For a complete version history please see the change log.


Important
---------

This software and support material is copyrighted, it may only be used with a legally acquired and fully paid license and in accordance with the PDFreactor Software License Agreement. By installing and using this software, you accept the terms and conditions of the RealObjects PDFreactor Software License Agreement notices and the additional license agreements for third-party software and/or open source software. For details, see the license.txt file. 
If you have not purchased a license, you are only allowed to test and evaluate this software to find out how it fits your requirements during an evaluation period of 30 days. When running in evaluation mode, PDFreactor will insert watermarks on every page and an evaluation notice on the second page of the PDF documents it creates.

For more information or to purchase a PDFreactor license, please visit our website at www.pdfreactor.com.

Note: If you are upgrading from a previous major version, you need a new license key. Please contact support@realobjects.com to upgrade your license key to the new version if you have a valid maintenance and upgrade subscription or to purchase an upgrade.


Folder Contents
---------------

/doc

Contains the PDFreactor Manual (PDF and HTML format).

/doc/apidocs

Contains the PDFreactor Java API documentation.

/doc/webservice

Contains the documentation for the web service client APIs.

/doc/zugferd

Contains the documentation for the optional ZUGFeRD add-on.

/license

Contains the PDFreactor Software License Agreement and additional notices and license agreements for third-party software and/or open source software. 
By installing and using this software, you accept the terms and conditions of the RealObjects PDFreactor Software License Agreement notices and the additional license agreements for third-party software and/or open source software.

/bin

Executables to launch the PDFreactor Preview and the command line version of PDFreactor. 
The PDFreactor Preview allows you to easily browse various sample documents, check out their source codes, get an instant paged mode preview and create PDFs.

/lib

Contains the self-contained library pdfreactor.jar.

/lib/modular

Contains the non-self-contained version pdfreactorcore.jar, as well as the required and optional 3rd party libraries. Please see the README.txt in the lib folder for details.

/samples

Various sample documents in several formats demonstrating the capabilities of PDFreactor.

/wrappers/dotnet

.NET wrapper API for PDFreactor (DLL, ASP.NET sample). To use the .NET API, copy the assembly PDFreactor.dll from the /wrappers/dotnet/bin to the /bin directory of your IIS application.

/wrappers/java

Java wrapper API for PDFreactor (JAR, Java sample). To use the Java API, include the pdfreactor-wrapper.jar from the /wrappers/java/lib in your class path.

/wrappers/javascript

JavaScript wrapper API for PDFreactor (JS, JavaScript sample). To use the JavaScript API, include the PDFreactor.js from the /wrappers/javascript/lib.

/wrappers/nodejs

Node.js wrapper API for PDFreactor (JS, Node.js sample). To use the Node.js API, include the PDFreactor.js from the /wrappers/nodejs/lib.

/wrappers/php

PHP wrapper API for PDFreactor (PHP include, PHP sample). To use the PHP API, include the PDFreactor.class.php file from /wrappers/php/lib.

/wrappers/perl

Perl wrapper API for PDFreactor (Perl module, Perl sample). To use the Perl API, include the PDFreactor.pl file from /wrappers/perl/lib

/wrappers/python

Python wrapper API for PDFreactor (Python module, Python sample). To use the Python API, include the PDFreactor.py file from /wrappers/python/lib.

/wrappers/ruby

Ruby wrapper API for PDFreactor (Ruby module, Ruby sample). To use the Ruby API, include the PDFreactor.rb file from /wrappers/ruby/lib.

/jetty

Java Application server required to run the PDFreactor web service which is used by the .NET, JavaScript, PHP, Perl, Python and Ruby wrapper APIs.


Upgrading from PDFreactor 7 or earlier
--------------------------------------

If you are upgrading from a PDFreactor integration prior to version 8, you will need to update your integration. The API of PDFreactor 8 and later is not compatible with the API from previous versions. For details about how to migrate from a previous version of PDFreactor, please see our migration guide.

If you are updating an existing copy, be careful if you have customized any files. Be sure to make a backup copy of your previous installation folder. In general you should overwrite all old files with the newer version and then manually reintroduce any changes afterwards.

Important: Since PDFreactor 8 the Web Service requires Java 8 to run. Older Java versions are not supported for the Web Service. The PDFreactor Java Library can still be used with previous Java versions.

The legacy PDFreactor command line binaries are no longer included since PDFreactor 8 and were replaced with a new python based command line interface that uses and requires the PDFreactor Web Service. The legacy PDFreactor command line interface can still be used as before by calling java -jar pdfreactor.jar on the command line. The legacy PDFreactor command line is no longer maintained and some newer features might not be available using it.


Operating Systems Supported
---------------------------

* Windows 7/8/10
* Windows 2008/2012 Server
* Linux
* OS X

The latest updates and service packs should be installed.

We have customers successfully using the product in HP/UX, Solaris, AIX and FreeBSD, but we don't officially test on those platforms.


Java Support
------------

Officially Recommended Java VM for the PDFreactor Library:

* OpenJDK 12

Other Java VMs Supported by the PDFreactor Library:

* OpenJDK 11
* Oracle JRE 8
* Oracle JRE 7

The latest updates and service packs should be installed.

We have customers successfully using the product in Oracle or IBM JVMs, but we don't officially test on those platforms.

Required Java VM for the PDFreactor Web Service:

* Oracle JRE 8


Minimum Hardware Requirements
-----------------------------

* One CPU with two or more cores (2 GHz)
* 4 GB RAM

The hardware requirements depend on the complexity and size of the processed documents.


Support
-------

For information about technical support please visit www.pdfreactor.com/support or contact support@realobjects.com.


Registered Trademark
--------------------

PDFreactor is a registered trademark of RealObjects GmbH, Saarbruecken.


Additional Important Notices and Copyrights
-------------------------------------------

Please see the NOTICE.txt file in the /license subdirectory.

Copyright (c) 2000-2019, RealObjects GmbH. 
All rights reserved.

info@realobjects.com
www.pdfreactor.com
