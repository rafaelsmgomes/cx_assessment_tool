Two different integration paths are available for PDFreactor. You can either 
integrate it as a library including all third party libraries in a 
self-contained JAR file, or integrate the modular PDFreactor Core library
and its associated third party libraries as individual JAR files.


============================================
1. Self-contained Integration (RECOMMENDED)
============================================

The "pdfreactor.jar" is the self-contained JAR file including all third party 
libraries. No other libraries or JAR files are required.

This JAR file should always be used except when you are experiencing 
compatibility issues or class path conflicts. Should this be the case, 
you should use the modular integration.


============================================
2. Modular Integration
============================================

The "pdfreactorcore.jar" is the PDFreactor Core file. You can exclude all 
optional libraries and may also exclude required libraries should they 
already be in your class path.

This approach is only recommended if certain functionality is not required 
or because of compatibility reasons and to prevent conflicts if you 
already have different versions of these libraries in your class path. 

The pdfreactorcore.jar is located in the "lib/modular" directory.

All third party libraries used by PDFreactor are located in the following 
directories:

* required libraries: "lib/modular/required"
* optional libraries: "lib/modular/optional"


IMPORTANT:
+-----------------------------------------------------------------------+
| Please make sure to only include either "pdfreactor.jar" or           |
| "pdfreactorcore.jar" and its associated libraries in your class path, |
| but not both.                                                         |
+-----------------------------------------------------------------------+


See the list below for details about all third-party libraries.

------------------
Required Libraries
------------------

cpdetector.jar:             Version 1.0.10
                            Always include this JAR.
                            
antlr.jar:                  Version 2.7.4
                            Dependency of cpdetector_1.0.10.jar.
                            Always include this JAR.
                            
resolver.jar:               Version 1.2
                            Always include this JAR.
                            
commons-lang3.jar           Version 3.7
                            Dependency of various Apache libraries.
                            Always include this JAR.
                            Other versions successfully tested: 3.1. and 3.4
                            
commons-io.jar:             Version 2.5
                            Always include this JAR.
                            Other versions successfully tested: 2.3.
                            
icu4j.jar:                  Version: 63.1 (patch applied to ArabicShaping class to support Persian and Urdu shaping)
                            Other versions successfully tested: 58.1 and newer
                            
w3c.jar                     Version: 2.0
                            Always include this JAR.
                            
(commons-codec.jar):        Version 1.10
                            Only required when using the PDFreactor Web Service.
                            Optional otherwise (see below "Optional Libraries")


------------------
Optional Libraries
------------------
                            
barcode4j.jar:              Version 2.1
                            This library is optional if support for 
                            barcodes is not required.
                            
avalon-framework-4.2.0.jar: Version 4.1.5
                            Dependency of barcode4j.jar.
                            This library is optional if support for 
                            barcodes is not required.
                            
bcmail-jdk16-1.46.jar:      Version 1.46.0
                            This library is optional if support for 
                            PDF encryption is not required.
                            Other versions successfully tested: 1.38.0.
                            
bcprov-jdk16-1.46.jar:      Version 1.46.0
                            This library is optional if support for 
                            PDF encryption is not required.
                            Other versions successfully tested: 1.38.0.
                            
httpclient.jar:             Version 4.5.2
                            This library is optional if support for 
                            HTTP Authentication is not required.
                            Other versions successfully tested: 4.1.1, 4.1.3.
                            
httpcore.jar:               Version 4.4.5
                            Dependency of httpclient.jar.
                            This library is optional if support for 
                            HTTP Authentication is not required.
                            Other versions successfully tested: 4.1.1, 4.2.
                            
commons-codec.jar:          Version 1.10
                            Dependency of httpclient.jar.
                            This library is optional if support for 
                            HTTP Authentication is not required.
                            IMPORTANT: This library is required when 
                            using the PDFreactor Web Service
                            
commons-logging.jar:        Version 1.2
                            Required for Apache libraries.
                            Other versions successfully tested: 1.1.1.
                            
jtidy.jar:                  Version 9.3.8
                            Optional if JTidy is not used as clean-up tool.
                            
tagsoup.jar:                Version 1.2.1
                            Optional if Tagsoup is not used as clean-up tool.
                            
xml-apis-ext.jar:           Version 1.401
                            Required for Batik (SVG support).
                            
xmlgraphics-commons.jar:    Version 1.4
                            Required for Batik (SVG support).
                            
batik-ext.jar               Version 1.4
                            Required for Batik (SVG support).
                            
zxing-core.jar:             Version 2.0
                            This library is optional if support 
                            for QR codes is not required.
                            
fop-hyph-engine.jar:        Version 0.95
                            Part of Apache FOP Project.
                            Optional if hyphenation is not required.
                            
fop-hyph.jar:               Version 0.95
                            Contains resources required by "fop-hyph-engine.jar".
                            Optional if hyphenation is not required.
                            
corefonts.jar:              Version 1.0
                            Contains default fonts for 
                            serif, sans-serif and monospace.
                            
mustang.jar                 Version 1.4.0
                            Required for ZUGFeRD.
                            
twelvemonkeys.jar:          Repackaged with minor modifications.
                            This library is optional if advanced support for
                            image loading and conversion is not required.
                              
pdfreactor-servlet-autocleaner.jar:
                            Registers a ServletContextListener that 
                            cleans static resources when the servlet 
                            context is destroyed. Omit this if you 
                            experience issues with servlet classes.
                            See API documentation of "CleanupUtil" class for
                            additional details.
                            
pdfbox.jar                  Version 2.0.9
                            Required for PDF merging.
                            
fontbox.jar                 Version 2.0.9
                            Required for PDFBox.
                            
xmpbox.jar                  Version 2.0.9
                            Required for PDFBox.

verapdf                     Version 1.12.1
                            Contains veraPDF libraries and their dependencies.
                            Required for automatic validation of generated 
                            documents with PDF/A conformance.
