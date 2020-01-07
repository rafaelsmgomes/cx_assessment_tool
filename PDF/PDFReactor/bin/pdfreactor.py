#!/usr/bin/env python

import datetime
import sys
if sys.version_info[0] == 2:
    from urllib2 import HTTPError
    from urllib2 import URLError
else:
    from urllib.error import HTTPError
    from urllib.error import URLError
from argparse import ArgumentParser
from argparse import RawTextHelpFormatter


# helper methods

def isUrl(u):
    try:
        from urlparse import urlparse
        result = urlparse(u)
        if result.scheme:
            return True
    except:
        return False
    return False
def isFile(f):
    try:
        import os.path
        return os.path.isfile(f)
    except:
        return False
    return False
def writeOutputFiles(doc, docNumber, pageNumber, extension):
    document = binascii.a2b_base64(doc)
    outputName = ""
    if outputFile == None:
        if (absPath != ""):
            outputName = absPath + getPageSuffix(pageNumber) + "." + extension
        else:
            outputName = "out" + getPageSuffix(pageNumber) + "." + extension
            import os.path
            i = 1
            while (os.path.isfile(outputName)):
                outputName = "out" + str(i) + getPageSuffix(pageNumber) + "." + extension
                i = i+1
    else:
        outputName = outputFile
        if (docNumber > 0 or pageNumber > 0):
            lastDot = outputFile.rfind(".")
            if (lastDot != -1):
                tmpSplit = outputFile.rsplit(".")
                outputName = tmpSplit[0]
                if (docNumber > 0):
                    outputName += str(docNumber)
                outputName += getPageSuffix(pageNumber) + "." + tmpSplit[1]
            else:
                outputName = outputFile + getPageSuffix(pageNumber) + "." + extension
    f = open(outputName, 'wb')
    f.write(document)
    f.close()
    return docNumber+1
def getFileExtesionForType(type):
    return type.split('_')[0].lower()
def getPageSuffix(pageNumber):
    if pageNumber <= 0:
        return '';
    return "-page" + str(pageNumber)

errrorStr = "An error has occured." 

try:
    parser = ArgumentParser()
    parser.formatter_class=RawTextHelpFormatter
    configuration = {}

    '''Member'''
    outputType = "pdf"
    '''Wrapper arguments'''
    parser.add_argument("-i", "--document", dest="url", nargs="+", help="The file to render as a PDF document (as an URL, path incl. wildcards or file URI). ")
    parser.add_argument("-o", "--outputFile", dest="outputFile", help="The output file to write the document to.\nOptional argument.\nIf no argument is passed, the output file name is based on the input file name.")
    parser.add_argument("-v", "--verbose", dest="verbose", action="count")
    parser.add_argument("-s", "--serverUrl", dest="serverUrl", help="The URL of the PDFreactor Web Service.")

    parser.add_argument("--version", dest="version", action="count", help="Prints the version of the PDFreactor Web Service and the CLI version.")
    parser.add_argument("-c", "--css", dest="css", nargs="+", help="Adds a user style sheet to the document. Shorthand method for '--userStyleSheets'. The style sheet can be CSS content, an absolute URL or a file path.")
    parser.add_argument("-j", "--javaScript", dest="javaScript", nargs="+", help="Adds a user script to the document. Shorthand method for '--userScripts'. The script can be JavaScript content, an absolute URL or a file path.")
    parser.add_argument("-l", "--appendLogs", dest="appendLogs", help="Specifies whether or not the log data should be added to the PDF document.", action="count")
    ''' Auto-generated arguments'''
    parser.add_argument("--addAttachments", dest="addAttachments", help="Enables or disables attachments specified in style sheets.\n\n", action="store_true")
    parser.add_argument("--addBookmarks", dest="addBookmarks", help="Enables or disables bookmarks in the PDF document.\n\n", action="store_true")
    parser.add_argument("--addComments", dest="addComments", help="Enables or disables comments in the PDF document.\n\n", action="store_true")
    parser.add_argument("--addLinks", dest="addLinks", help="Enables or disables links in the PDF document.\n\n", action="store_true")
    parser.add_argument("--addOverprint", dest="addOverprint", help="Enables or disables overprinting.\n\n", action="store_true")
    parser.add_argument("--addPreviewImages", dest="addPreviewImages", help="Enables or disables embedding of image previews per page in the PDF document.\n\n", action="store_true")
    parser.add_argument("--addTags", dest="addTags", help="Enables or disables tagging of the PDF document.\n\n", action="store_true")
    parser.add_argument("--allowAnnotations", dest="allowAnnotations", help="Enables or disables the 'annotations' restriction in the PDF document.\n\n", action="store_true")
    parser.add_argument("--allowAssembly", dest="allowAssembly", help="Enables or disables the 'assembly' restriction in the PDF document.\n\n", action="store_true")
    parser.add_argument("--allowCopy", dest="allowCopy", help="Enables or disables the 'copy' restriction in the PDF document.\n\n", action="store_true")
    parser.add_argument("--allowDegradedPrinting", dest="allowDegradedPrinting", help="Enables or disables the 'degraded printing' restriction in the PDF document.\n\n", action="store_true")
    parser.add_argument("--allowFillIn", dest="allowFillIn", help="Enables or disables the 'fill in' restriction in the PDF document.\n\n", action="store_true")
    parser.add_argument("--allowModifyContents", dest="allowModifyContents", help="Enables or disables the 'modify contents' restriction in the PDF document.\n\n", action="store_true")
    parser.add_argument("--allowPrinting", dest="allowPrinting", help="Enables or disables the 'printing' restriction in the PDF document.\n\n", action="store_true")
    parser.add_argument("--allowScreenReaders", dest="allowScreenReaders", help="Enables or disables the 'screen readers' restriction in the PDF document.\n\n", action="store_true")
    parser.add_argument("--appendLog", dest="appendLog", help="Specifies whether or not the log data should be added to the PDF document.\n\n", action="store_true")
    parser.add_argument("--attachments", dest="attachments", help="Adds a file attachment to PDF document.\n\n", action="append", nargs=4, metavar=("DATA", "DESCRIPTION", "NAME", "URL"))
    parser.add_argument("--authenticationCredentials", dest="authenticationCredentials", help="Enables access to resources that are secured via Basic or Digest authentication.\n\n", nargs=2, metavar=("KEY", "VALUE"))
    parser.add_argument("--author", dest="author", help="Sets the value of the author field of the PDF document.\n\n", metavar="AUTHOR")
    parser.add_argument("--baseURL", dest="baseURL", help="Sets the base URL of the document.\n\n", metavar="BASE_URL")
    parser.add_argument("--bookletMode", dest="bookletMode", help="Convenience method to set pages-per-sheet properties and page order \nin one step to create a booklet.\n\n", nargs=3, metavar=("RTL", "SHEET_MARGIN", "SHEET_SIZE"))
    parser.add_argument("--callbacks", dest="callbacks", help="Adds callbacks to the conversion which will be called at specific times.\n\n", action="append", nargs=5, metavar=("CONTENT_TYPE", "INTERVAL", "TIMEOUT", "TYPE", "URL"))
    parser.add_argument("--cleanupTool", dest="cleanupTool", help="Sets the cleanup tool to use for documents with unparsable content.\n\n", metavar="CLEANUP_TOOL", choices=["CYBERNEKO", "JTIDY", "NONE", "TAGSOUP"], type=str.upper)
    parser.add_argument("--colorSpaceSettings", dest="colorSpaceSettings", help="Specifies color space related settings.\n\n", nargs=3, metavar=("CMYK_ICC_PROFILE", "CONVERSION_ENABLED", "TARGET_COLOR_SPACE"))
    parser.add_argument("--conformance", dest="conformance", help="Sets the conformance of the PDF.\n\n", metavar="CONFORMANCE", choices=["PDF", "PDFA1A", "PDFA1A_PDFUA1", "PDFA1B", "PDFA2A", "PDFA2A_PDFUA1", "PDFA2B", "PDFA2U", "PDFA3A", "PDFA3A_PDFUA1", "PDFA3B", "PDFA3U", "PDFUA1", "PDFX1A_2001", "PDFX1A_2003", "PDFX3_2002", "PDFX3_2003", "PDFX4", "PDFX4P"], type=str.upper)
    parser.add_argument("--contentObserver", dest="contentObserver", help="Specifies parts of the document's content that should be observed and logged in \ngreater detail.\n\n", nargs=4, metavar=("CONNECTIONS", "EXCEEDING_CONTENT_AGAINST", "EXCEEDING_CONTENT_ANALYZE", "MISSING_RESOURCES"))
    parser.add_argument("--continuousOutput", dest="continuousOutput", help="Enables the conversion of the input document into one image.\n\n", nargs=2, metavar=("HEIGHT", "WIDTH"))
    parser.add_argument("--conversionName", dest="conversionName", help="Sets a name for the conversion.\n\n", metavar="CONVERSION_NAME")
    parser.add_argument("--cookies", dest="cookies", help="Adds a cookie to all outgoing HTTP connections.\n\n", action="append", nargs=2, metavar=("KEY", "VALUE"))
    parser.add_argument("--creator", dest="creator", help="Sets the value of creator field of the PDF document.\n\n", metavar="CREATOR")
    parser.add_argument("--cssSettings", dest="cssSettings", help="\nSpecifies the behavior of PDFreactor regarding the support and validation\nof CSS properties and their declaration.\n\n", nargs=2, metavar=("SUPPORT_QUERY_MODE", "VALIDATION_MODE"))
    parser.add_argument("--customDocumentProperties", dest="customDocumentProperties", help="Adds a custom property to the PDF document.\n\n", action="append", nargs=2, metavar=("KEY", "VALUE"))
    parser.add_argument("--debugSettings", dest="debugSettings", help="Enables and configures debug settings, which add additional information to the output.\n\n", nargs=6, metavar=("ALL", "APPEND_LOGS", "ATTACH_DOCUMENTS", "ATTACH_LOGS", "ATTACH_RESOURCES", "FORCE_RESULT"))
    parser.add_argument("--defaultColorSpace", dest="defaultColorSpace", help="Deprecated as of PDFreactor 10.\n\n", metavar="DEFAULT_COLOR_SPACE", choices=["CMYK", "RGB"], type=str.upper)
    parser.add_argument("--disableFontEmbedding", dest="disableFontEmbedding", help="Sets whether fonts will not be embedded into the resulting PDF.\n\n", action="store_true")
    parser.add_argument("--documentDefaultLanguage", dest="documentDefaultLanguage", help="Sets the language used for documents having no explicit language attribute set.\n\n", metavar="DOCUMENT_DEFAULT_LANGUAGE")
    parser.add_argument("--documentType", dest="documentType", help="Sets the document type.\n\n", metavar="DOCUMENT_TYPE", choices=["AUTODETECT", "HTML5", "XHTML", "XML"], type=str.upper)
    parser.add_argument("--enableDebugMode", dest="enableDebugMode", help="Deprecated as of PDFreactor 10.\n\n", action="store_true")
    parser.add_argument("--encoding", dest="encoding", help="Sets the encoding of the document.\n\n", metavar="ENCODING")
    parser.add_argument("--encryption", dest="encryption", help="Sets the encryption.\n\n", metavar="ENCRYPTION", choices=["NONE", "TYPE_128", "TYPE_40"], type=str.upper)
    parser.add_argument("--errorPolicies", dest="errorPolicies", help="Specifies error policies that will be used for the conversion.\n\n", nargs="+", metavar="ERROR_POLICIES", choices=["LICENSE", "MISSING_RESOURCE"], type=str.upper)
    parser.add_argument("--fontAliases", dest="fontAliases", help="Registers an alias font family for an existing font.\n\n", action="append", nargs=4, metavar=("BOLD", "FAMILY", "ITALIC", "SOURCE"))
    parser.add_argument("--fontFallback", dest="fontFallback", help="Sets a list of fallback font families used for character substitution.\n\n", nargs="+", metavar="FONT_FALLBACK")
    parser.add_argument("--fonts", dest="fonts", help="Loads a font from a URL which can be used via the CSS property font-family.\n\n", action="append", nargs=4, metavar=("BOLD", "FAMILY", "ITALIC", "SOURCE"))
    parser.add_argument("--forceGrayscaleImage", dest="forceGrayscaleImage", help="If the output format is an image format, this setting controls whether a\ngrayscale image should be returned.\n\n", action="store_true")
    parser.add_argument("--fullCompression", dest="fullCompression", help="Enables or disables full compression of the PDF document.\n\n", action="store_true")
    parser.add_argument("--httpsMode", dest="httpsMode", help="Sets the HTTPS mode.\n\n", metavar="HTTPS_MODE", choices=["LENIENT", "STRICT"], type=str.upper)
    parser.add_argument("--ignoreAlpha", dest="ignoreAlpha", help="Sets whether the alpha value of CSS RGBA colors is ignored.\n\n", action="store_true")
    parser.add_argument("--integrationStyleSheets", dest="integrationStyleSheets", help="Adds an integration style sheet to the document.\n\n", action="append", nargs=4, metavar=("BEFORE_DOCUMENT_SCRIPTS", "CONTENT", "DATA", "URI"))
    parser.add_argument("--javaScriptMode", dest="javaScriptMode", help="Deprecated as of PDFreactor 10.\n\n", metavar="JAVA_SCRIPT_MODE", choices=["DISABLED", "ENABLED", "ENABLED_NO_LAYOUT", "ENABLED_REAL_TIME", "ENABLED_TIME_LAPSE"], type=str.upper)
    parser.add_argument("--javaScriptSettings", dest="javaScriptSettings", help="Specifies JavaScript related settings.\n\n", nargs=11, metavar=("DEBUG_INDENTATION", "DEBUG_MODE", "ENABLED", "IGNORE_SCRIPT_ELEMENTS", "MAX_QUEUED_TASKS", "MAX_SCRIPT_ELEMENTS", "MAX_TASKS_WITHOUT_DOM_CHANGE", "MAX_VIRTUAL_TIME_OFFSET", "NO_LAYOUT", "NO_VIRTUAL_TIME", "TIME_LAPSE"))
    parser.add_argument("--keywords", dest="keywords", help="Sets the value of the keywords field of the PDF document.\n\n", metavar="KEYWORDS")
    parser.add_argument("--licenseKey", dest="licenseKey", help="Sets the license key using a string.\n\n", metavar="LICENSE_KEY")
    parser.add_argument("--logExceedingContent", dest="logExceedingContent", help="Deprecated as of PDFreactor 9.\n\n", nargs=2, metavar=("LOG_EXCEEDING_CONTENT_AGAINST", "LOG_EXCEEDING_CONTENT_ANALYZE"))
    parser.add_argument("--logLevel", dest="logLevel", help="Sets the log level.\n\n", metavar="LOG_LEVEL", choices=["DEBUG", "FATAL", "INFO", "NONE", "PERFORMANCE", "WARN"], type=str.upper)
    parser.add_argument("--mediaFeatureValues", dest="mediaFeatureValues", help="Defines the value of a Media Feature which is used to resolve CSS3 media queries.\n\n", action="append", nargs=2, metavar=("MEDIA_FEATURE", "VALUE"))
    parser.add_argument("--mediaTypes", dest="mediaTypes", help="Sets the media types that are used to resolve CSS3 media queries.\n\n", nargs="+", metavar="MEDIA_TYPES")
    parser.add_argument("--mergeByteArray", dest="mergeByteArray", help="Deprecated as of PDFreactor 9.\n\n")
    parser.add_argument("--mergeByteArrays", dest="mergeByteArrays", help="Deprecated as of PDFreactor 9.\n\n")
    parser.add_argument("--mergeDocuments", dest="mergeDocuments", help="This method sets external PDF documents which will be\nmerged with the PDF document generated by the HTML source.\n\n", action="append", nargs=4, metavar=("BEFORE_DOCUMENT_SCRIPTS", "CONTENT", "DATA", "URI"))
    parser.add_argument("--mergeMode", dest="mergeMode", help="Sets the merge mode.\n\n", metavar="MERGE_MODE", choices=["APPEND", "ARRANGE", "OVERLAY", "OVERLAY_BELOW", "PREPEND"], type=str.upper)
    parser.add_argument("--mergeURL", dest="mergeURL", help="Deprecated as of PDFreactor 9.\n\n", metavar="MERGE_URL")
    parser.add_argument("--mergeURLs", dest="mergeURLs", help="Deprecated as of PDFreactor 9.\n\n", nargs="+", metavar="MERGE_URLS")
    parser.add_argument("--outputFormat", dest="outputFormat", help="Sets the .\n\n", nargs=4, metavar=("HEIGHT", "MULTI_IMAGE", "TYPE", "WIDTH"))
    parser.add_argument("--outputIntent", dest="outputIntent", help="Sets the output intent including the identifier and the ICC profile to be embedded into the PDF.\n\n", nargs=3, metavar=("DATA", "IDENTIFIER", "URL"))
    parser.add_argument("--overlayRepeat", dest="overlayRepeat", help="If one of the documents of an overlay process is shorter than the other, this method \nallows repeating either its last page or all of its pages in order to overlay all pages of \nthe longer document.\n\n", metavar="OVERLAY_REPEAT", choices=["ALL_PAGES", "LAST_PAGE", "NONE", "TRIM"], type=str.upper)
    parser.add_argument("--ownerPassword", dest="ownerPassword", help="Sets the owner password of the PDF document.\n\n", metavar="OWNER_PASSWORD")
    parser.add_argument("--pageOrder", dest="pageOrder", help="Sets the page order of the direct result of the conversion.\n\n", metavar="PAGE_ORDER")
    parser.add_argument("--pagesPerSheetProperties", dest="pagesPerSheetProperties", help="Sets the properties of a sheet on which multiple pages are being arranged.\n\n", nargs=6, metavar=("COLS", "DIRECTION", "ROWS", "SHEET_MARGIN", "SHEET_SIZE", "SPACING"))
    parser.add_argument("--pdfScriptAction", dest="pdfScriptAction", help="Sets a pair of trigger event and PDF script.\n\n", action="append", nargs=2, metavar=("SCRIPT", "TRIGGER_EVENT"))
    parser.add_argument("--pixelsPerInch", dest="pixelsPerInch", help="Sets the pixels per inch.\n\n", metavar="PIXELS_PER_INCH")
    parser.add_argument("--pixelsPerInchShrinkToFit", dest="pixelsPerInchShrinkToFit", help="Whether the pixels per inch should be adapted automatically to avoid content exceeding pages.\n\n", action="store_true")
    parser.add_argument("--postTransformationDocumentType", dest="postTransformationDocumentType", help="Sets the document type after the XSL-Transformations have been applied.\n\n", metavar="POST_TRANSFORMATION_DOCUMENT_TYPE", choices=["AUTODETECT", "HTML5", "XHTML", "XML"], type=str.upper)
    parser.add_argument("--printDialogPrompt", dest="printDialogPrompt", help="Enables or disables a print dialog to be shown upon opening\nthe generated PDF document by a PDF viewer.\n\n", action="store_true")
    parser.add_argument("--processingPreferences", dest="processingPreferences", help="Preferences that influence the conversion process without changing \nthe output.\n\n", nargs="+", metavar="PROCESSING_PREFERENCES", choices=["SAVE_MEMORY_IMAGES"], type=str.upper)
    parser.add_argument("--quirksSettings", dest="quirksSettings", help="Allows to enable or disable behaviors\nthat are otherwise depend on the doctype of the input document.\n\n", nargs=2, metavar=("CASE_SENSITIVE_CLASS_SELECTORS", "MIN_LINE_HEIGHT_FROM_CONTAINER"))
    parser.add_argument("--rawCookies", dest="rawCookies", help="Adds a cookie to all outgoing HTTP connections.\n\n", action="append", nargs=2, metavar=("KEY", "VALUE"))
    parser.add_argument("--requestHeaders", dest="requestHeaders", help="Adds a request header to all outgoing HTTP connections.\n\n", action="append", nargs=2, metavar=("KEY", "VALUE"))
    parser.add_argument("--resourceConnectTimeout", dest="resourceConnectTimeout", help="Sets a timeout in milliseconds for connecting to resources, such as HTTP requests to \nstyle sheets, images etc.\n\n", metavar="RESOURCE_CONNECT_TIMEOUT")
    parser.add_argument("--resourceReadTimeout", dest="resourceReadTimeout", help="Sets a timeout in milliseconds for reading resources, such as HTTP requests to \nstyle sheets, images etc.\n\n", metavar="RESOURCE_READ_TIMEOUT")
    parser.add_argument("--resourceRequestTimeout", dest="resourceRequestTimeout", help="Deprecated as of PDFreactor 10.\n\n", metavar="RESOURCE_REQUEST_TIMEOUT")
    parser.add_argument("--segmentationSettings", dest="segmentationSettings", help="This property configures segmentation of the conversion,\nwhich helps with very large documents.\n\n", nargs=2, metavar=("ENABLED", "SEGMENT_SIZE"))
    parser.add_argument("--signPDF", dest="signPDF", help="Sets a digital certificate to sign the newly created PDF.\n\n", nargs=6, metavar=("KEY_ALIAS", "KEY_PASSWORD", "KEYSTORE_PASSWORD", "KEYSTORE_TYPE", "KEYSTORE_URL", "SIGNING_MODE"))
    parser.add_argument("--subject", dest="subject", help="Sets the value of the subject field of the PDF document.\n\n", metavar="SUBJECT")
    parser.add_argument("--throwLicenseExceptions", dest="throwLicenseExceptions", help="Deprecated as of PDFreactor 9.\n\n", action="store_true")
    parser.add_argument("--title", dest="title", help="Sets the value of the title field of the PDF document.\n\n", metavar="TITLE")
    parser.add_argument("--userPassword", dest="userPassword", help="Sets the user password of the PDF document.\n\n", metavar="USER_PASSWORD")
    parser.add_argument("--userScripts", dest="userScripts", help="Adds an user script to the document.\n\n", action="append", nargs=4, metavar=("BEFORE_DOCUMENT_SCRIPTS", "CONTENT", "DATA", "URI"))
    parser.add_argument("-u", "--userStyleSheets", dest="userStyleSheets", help="Adds a user style sheet to the document.\n\n", action="append", nargs=4, metavar=("BEFORE_DOCUMENT_SCRIPTS", "CONTENT", "DATA", "URI"))
    parser.add_argument("--validateConformance", dest="validateConformance", help="Enables PDFreactor to validate the generated PDF against the \nspecified via .\n\n", action="store_true")
    parser.add_argument("--viewerPreferences", dest="viewerPreferences", help="Sets the page layout and page mode preferences of the PDF.\n\n", nargs="+", metavar="VIEWER_PREFERENCES", choices=["CENTER_WINDOW", "DIRECTION_L2R", "DIRECTION_R2L", "DISPLAY_DOC_TITLE", "DUPLEX_FLIP_LONG_EDGE", "DUPLEX_FLIP_SHORT_EDGE", "DUPLEX_SIMPLEX", "FIT_WINDOW", "HIDE_MENUBAR", "HIDE_TOOLBAR", "HIDE_WINDOW_UI", "NON_FULLSCREEN_PAGE_MODE_USE_NONE", "NON_FULLSCREEN_PAGE_MODE_USE_OC", "NON_FULLSCREEN_PAGE_MODE_USE_OUTLINES", "NON_FULLSCREEN_PAGE_MODE_USE_THUMBS", "PAGE_LAYOUT_ONE_COLUMN", "PAGE_LAYOUT_SINGLE_PAGE", "PAGE_LAYOUT_TWO_COLUMN_LEFT", "PAGE_LAYOUT_TWO_COLUMN_RIGHT", "PAGE_LAYOUT_TWO_PAGE_LEFT", "PAGE_LAYOUT_TWO_PAGE_RIGHT", "PAGE_MODE_FULLSCREEN", "PAGE_MODE_USE_ATTACHMENTS", "PAGE_MODE_USE_NONE", "PAGE_MODE_USE_OC", "PAGE_MODE_USE_OUTLINES", "PAGE_MODE_USE_THUMBS", "PICKTRAYBYPDFSIZE_FALSE", "PICKTRAYBYPDFSIZE_TRUE", "PRINTSCALING_APPDEFAULT", "PRINTSCALING_NONE"], type=str.upper)
    parser.add_argument("--xmp", dest="xmp", help="Sets custom XMP to be embedded into the PDF document.\n\n", nargs=3, metavar=("CONTENT", "PRIORITY", "URI"))
    parser.add_argument("--xsltMode", dest="xsltMode", help="Enables or disables XSLT transformations.\n\n", action="store_true")
    parser.add_argument("--xsltStyleSheets", dest="xsltStyleSheets", help="Adds an XSLT style sheet to the document.\n\n", action="append", nargs=4, metavar=("BEFORE_DOCUMENT_SCRIPTS", "CONTENT", "DATA", "URI"))

    '''Parse arguments'''
    args = parser.parse_args()

    '''Read argument values'''
    if args.addAttachments != None:
        defaultVal = False
        if defaultVal != args.addAttachments:
            configuration["addAttachments"] = args.addAttachments
    if args.addBookmarks != None:
        defaultVal = False
        if defaultVal != args.addBookmarks:
            configuration["addBookmarks"] = args.addBookmarks
    if args.addComments != None:
        defaultVal = False
        if defaultVal != args.addComments:
            configuration["addComments"] = args.addComments
    if args.addLinks != None:
        defaultVal = False
        if defaultVal != args.addLinks:
            configuration["addLinks"] = args.addLinks
    if args.addOverprint != None:
        defaultVal = False
        if defaultVal != args.addOverprint:
            configuration["addOverprint"] = args.addOverprint
    if args.addPreviewImages != None:
        defaultVal = False
        if defaultVal != args.addPreviewImages:
            configuration["addPreviewImages"] = args.addPreviewImages
    if args.addTags != None:
        defaultVal = False
        if defaultVal != args.addTags:
            configuration["addTags"] = args.addTags
    if args.allowAnnotations != None:
        defaultVal = False
        if defaultVal != args.allowAnnotations:
            configuration["allowAnnotations"] = args.allowAnnotations
    if args.allowAssembly != None:
        defaultVal = False
        if defaultVal != args.allowAssembly:
            configuration["allowAssembly"] = args.allowAssembly
    if args.allowCopy != None:
        defaultVal = False
        if defaultVal != args.allowCopy:
            configuration["allowCopy"] = args.allowCopy
    if args.allowDegradedPrinting != None:
        defaultVal = False
        if defaultVal != args.allowDegradedPrinting:
            configuration["allowDegradedPrinting"] = args.allowDegradedPrinting
    if args.allowFillIn != None:
        defaultVal = False
        if defaultVal != args.allowFillIn:
            configuration["allowFillIn"] = args.allowFillIn
    if args.allowModifyContents != None:
        defaultVal = False
        if defaultVal != args.allowModifyContents:
            configuration["allowModifyContents"] = args.allowModifyContents
    if args.allowPrinting != None:
        defaultVal = False
        if defaultVal != args.allowPrinting:
            configuration["allowPrinting"] = args.allowPrinting
    if args.allowScreenReaders != None:
        defaultVal = False
        if defaultVal != args.allowScreenReaders:
            configuration["allowScreenReaders"] = args.allowScreenReaders
    if args.appendLog != None:
        defaultVal = False
        if defaultVal != args.appendLog:
            configuration["appendLog"] = args.appendLog
    if args.attachments != None:
        attachments = args.attachments
        configuration["attachments"] = []
        for y in range(0, len(attachments)):
            attachments_group = attachments.pop(0)
            i = len(attachments_group) / 4
            for x in range(0, i):
                values = {}
                values["data"] = attachments_group.pop(0)
                values["description"] = attachments_group.pop(0)
                values["name"] = attachments_group.pop(0)
                values["url"] = attachments_group.pop(0)
            configuration["attachments"].append(values)
    if args.authenticationCredentials != None:
        authenticationCredentials = args.authenticationCredentials
        values  = {}
        values["key"] = authenticationCredentials.pop(0)
        values["value"] = authenticationCredentials.pop(0)
        configuration["authenticationCredentials"] = values
    if args.author != None:
        configuration["author"] = args.author
    if args.baseURL != None:
        configuration["baseURL"] = args.baseURL
    if args.bookletMode != None:
        bookletMode = args.bookletMode
        values  = {}
        values["rtl"] = bookletMode.pop(0)
        values["sheetMargin"] = bookletMode.pop(0)
        values["sheetSize"] = bookletMode.pop(0)
        configuration["bookletMode"] = values
    if args.callbacks != None:
        callbacks = args.callbacks
        configuration["callbacks"] = []
        for y in range(0, len(callbacks)):
            callbacks_group = callbacks.pop(0)
            i = len(callbacks_group) / 5
            for x in range(0, i):
                values = {}
                values["contentType"] = callbacks_group.pop(0)
                values["interval"] = callbacks_group.pop(0)
                values["timeout"] = callbacks_group.pop(0)
                values["type"] = callbacks_group.pop(0)
                values["url"] = callbacks_group.pop(0)
            configuration["callbacks"].append(values)
    if args.cleanupTool != None:
        configuration["cleanupTool"] = args.cleanupTool
    if args.colorSpaceSettings != None:
        colorSpaceSettings = args.colorSpaceSettings
        values  = {}
        values["cmykIccProfile"] = colorSpaceSettings.pop(0)
        values["conversionEnabled"] = colorSpaceSettings.pop(0)
        values["targetColorSpace"] = colorSpaceSettings.pop(0)
        configuration["colorSpaceSettings"] = values
    if args.conformance != None:
        configuration["conformance"] = args.conformance
    if args.contentObserver != None:
        contentObserver = args.contentObserver
        values  = {}
        values["connections"] = contentObserver.pop(0)
        values["exceedingContentAgainst"] = contentObserver.pop(0)
        values["exceedingContentAnalyze"] = contentObserver.pop(0)
        values["missingResources"] = contentObserver.pop(0)
        configuration["contentObserver"] = values
    if args.continuousOutput != None:
        continuousOutput = args.continuousOutput
        values  = {}
        values["height"] = continuousOutput.pop(0)
        values["width"] = continuousOutput.pop(0)
        configuration["continuousOutput"] = values
    if args.conversionName != None:
        configuration["conversionName"] = args.conversionName
    if args.cookies != None:
        cookies = args.cookies
        configuration["cookies"] = []
        for y in range(0, len(cookies)):
            cookies_group = cookies.pop(0)
            i = len(cookies_group) / 2
            for x in range(0, i):
                values = {}
                values["key"] = cookies_group.pop(0)
                values["value"] = cookies_group.pop(0)
            configuration["cookies"].append(values)
    if args.creator != None:
        configuration["creator"] = args.creator
    if args.cssSettings != None:
        cssSettings = args.cssSettings
        values  = {}
        values["supportQueryMode"] = cssSettings.pop(0)
        values["validationMode"] = cssSettings.pop(0)
        configuration["cssSettings"] = values
    if args.customDocumentProperties != None:
        customDocumentProperties = args.customDocumentProperties
        configuration["customDocumentProperties"] = []
        for y in range(0, len(customDocumentProperties)):
            customDocumentProperties_group = customDocumentProperties.pop(0)
            i = len(customDocumentProperties_group) / 2
            for x in range(0, i):
                values = {}
                values["key"] = customDocumentProperties_group.pop(0)
                values["value"] = customDocumentProperties_group.pop(0)
            configuration["customDocumentProperties"].append(values)
    if args.debugSettings != None:
        debugSettings = args.debugSettings
        values  = {}
        values["all"] = debugSettings.pop(0)
        values["appendLogs"] = debugSettings.pop(0)
        values["attachDocuments"] = debugSettings.pop(0)
        values["attachLogs"] = debugSettings.pop(0)
        values["attachResources"] = debugSettings.pop(0)
        values["forceResult"] = debugSettings.pop(0)
        configuration["debugSettings"] = values
    if args.defaultColorSpace != None:
        configuration["defaultColorSpace"] = args.defaultColorSpace
    if args.disableFontEmbedding != None:
        defaultVal = False
        if defaultVal != args.disableFontEmbedding:
            configuration["disableFontEmbedding"] = args.disableFontEmbedding
    if args.documentDefaultLanguage != None:
        configuration["documentDefaultLanguage"] = args.documentDefaultLanguage
    if args.documentType != None:
        configuration["documentType"] = args.documentType
    if args.enableDebugMode != None:
        defaultVal = False
        if defaultVal != args.enableDebugMode:
            configuration["enableDebugMode"] = args.enableDebugMode
    if args.encoding != None:
        configuration["encoding"] = args.encoding
    if args.encryption != None:
        configuration["encryption"] = args.encryption
    if args.errorPolicies != None:
        configuration["errorPolicies"] = args.errorPolicies
    if args.fontAliases != None:
        fontAliases = args.fontAliases
        configuration["fontAliases"] = []
        for y in range(0, len(fontAliases)):
            fontAliases_group = fontAliases.pop(0)
            i = len(fontAliases_group) / 4
            for x in range(0, i):
                values = {}
                values["bold"] = fontAliases_group.pop(0)
                values["family"] = fontAliases_group.pop(0)
                values["italic"] = fontAliases_group.pop(0)
                values["source"] = fontAliases_group.pop(0)
            configuration["fontAliases"].append(values)
    if args.fontFallback != None:
        configuration["fontFallback"] = args.fontFallback
    if args.fonts != None:
        fonts = args.fonts
        configuration["fonts"] = []
        for y in range(0, len(fonts)):
            fonts_group = fonts.pop(0)
            i = len(fonts_group) / 4
            for x in range(0, i):
                values = {}
                values["bold"] = fonts_group.pop(0)
                values["family"] = fonts_group.pop(0)
                values["italic"] = fonts_group.pop(0)
                values["source"] = fonts_group.pop(0)
            configuration["fonts"].append(values)
    if args.forceGrayscaleImage != None:
        defaultVal = False
        if defaultVal != args.forceGrayscaleImage:
            configuration["forceGrayscaleImage"] = args.forceGrayscaleImage
    if args.fullCompression != None:
        defaultVal = False
        if defaultVal != args.fullCompression:
            configuration["fullCompression"] = args.fullCompression
    if args.httpsMode != None:
        configuration["httpsMode"] = args.httpsMode
    if args.ignoreAlpha != None:
        defaultVal = False
        if defaultVal != args.ignoreAlpha:
            configuration["ignoreAlpha"] = args.ignoreAlpha
    if args.integrationStyleSheets != None:
        integrationStyleSheets = args.integrationStyleSheets
        configuration["integrationStyleSheets"] = []
        for y in range(0, len(integrationStyleSheets)):
            integrationStyleSheets_group = integrationStyleSheets.pop(0)
            i = len(integrationStyleSheets_group) / 4
            for x in range(0, i):
                values = {}
                values["beforeDocumentScripts"] = integrationStyleSheets_group.pop(0)
                values["content"] = integrationStyleSheets_group.pop(0)
                values["data"] = integrationStyleSheets_group.pop(0)
                values["uri"] = integrationStyleSheets_group.pop(0)
            configuration["integrationStyleSheets"].append(values)
    if args.javaScriptMode != None:
        configuration["javaScriptMode"] = args.javaScriptMode
    if args.javaScriptSettings != None:
        javaScriptSettings = args.javaScriptSettings
        values  = {}
        values["debugIndentation"] = javaScriptSettings.pop(0)
        values["debugMode"] = javaScriptSettings.pop(0)
        values["enabled"] = javaScriptSettings.pop(0)
        values["ignoreScriptElements"] = javaScriptSettings.pop(0)
        values["maxQueuedTasks"] = javaScriptSettings.pop(0)
        values["maxScriptElements"] = javaScriptSettings.pop(0)
        values["maxTasksWithoutDomChange"] = javaScriptSettings.pop(0)
        values["maxVirtualTimeOffset"] = javaScriptSettings.pop(0)
        values["noLayout"] = javaScriptSettings.pop(0)
        values["noVirtualTime"] = javaScriptSettings.pop(0)
        values["timeLapse"] = javaScriptSettings.pop(0)
        configuration["javaScriptSettings"] = values
    if args.keywords != None:
        configuration["keywords"] = args.keywords
    if args.licenseKey != None:
        configuration["licenseKey"] = args.licenseKey
    if args.logExceedingContent != None:
        logExceedingContent = args.logExceedingContent
        values  = {}
        values["logExceedingContentAgainst"] = logExceedingContent.pop(0)
        values["logExceedingContentAnalyze"] = logExceedingContent.pop(0)
        configuration["logExceedingContent"] = values
    if args.logLevel != None:
        configuration["logLevel"] = args.logLevel
    if args.mediaFeatureValues != None:
        mediaFeatureValues = args.mediaFeatureValues
        configuration["mediaFeatureValues"] = []
        for y in range(0, len(mediaFeatureValues)):
            mediaFeatureValues_group = mediaFeatureValues.pop(0)
            i = len(mediaFeatureValues_group) / 2
            for x in range(0, i):
                values = {}
                values["mediaFeature"] = mediaFeatureValues_group.pop(0)
                values["value"] = mediaFeatureValues_group.pop(0)
            configuration["mediaFeatureValues"].append(values)
    if args.mediaTypes != None:
        configuration["mediaTypes"] = args.mediaTypes
    if args.mergeByteArray != None:
        configuration["mergeByteArray"] = args.mergeByteArray
    if args.mergeByteArrays != None:
        configuration["mergeByteArrays"] = args.mergeByteArrays
    if args.mergeDocuments != None:
        mergeDocuments = args.mergeDocuments
        configuration["mergeDocuments"] = []
        for y in range(0, len(mergeDocuments)):
            mergeDocuments_group = mergeDocuments.pop(0)
            i = len(mergeDocuments_group) / 4
            for x in range(0, i):
                values = {}
                values["beforeDocumentScripts"] = mergeDocuments_group.pop(0)
                values["content"] = mergeDocuments_group.pop(0)
                values["data"] = mergeDocuments_group.pop(0)
                values["uri"] = mergeDocuments_group.pop(0)
            configuration["mergeDocuments"].append(values)
    if args.mergeMode != None:
        configuration["mergeMode"] = args.mergeMode
    if args.mergeURL != None:
        configuration["mergeURL"] = args.mergeURL
    if args.mergeURLs != None:
        configuration["mergeURLs"] = args.mergeURLs
    if args.outputFormat != None:
        outputFormat = args.outputFormat
        values  = {}
        values["height"] = outputFormat.pop(0)
        values["multiImage"] = outputFormat.pop(0)
        values["type"] = outputFormat.pop(0)
        values["width"] = outputFormat.pop(0)
        configuration["outputFormat"] = values
        outputType = getFileExtesionForType(values["type"])
    if args.outputIntent != None:
        outputIntent = args.outputIntent
        values  = {}
        values["data"] = outputIntent.pop(0)
        values["identifier"] = outputIntent.pop(0)
        values["url"] = outputIntent.pop(0)
        configuration["outputIntent"] = values
    if args.overlayRepeat != None:
        configuration["overlayRepeat"] = args.overlayRepeat
    if args.ownerPassword != None:
        configuration["ownerPassword"] = args.ownerPassword
    if args.pageOrder != None:
        configuration["pageOrder"] = args.pageOrder
    if args.pagesPerSheetProperties != None:
        pagesPerSheetProperties = args.pagesPerSheetProperties
        values  = {}
        values["cols"] = pagesPerSheetProperties.pop(0)
        values["direction"] = pagesPerSheetProperties.pop(0)
        values["rows"] = pagesPerSheetProperties.pop(0)
        values["sheetMargin"] = pagesPerSheetProperties.pop(0)
        values["sheetSize"] = pagesPerSheetProperties.pop(0)
        values["spacing"] = pagesPerSheetProperties.pop(0)
        configuration["pagesPerSheetProperties"] = values
    if args.pdfScriptAction != None:
        pdfScriptAction = args.pdfScriptAction
        configuration["pdfScriptAction"] = []
        for y in range(0, len(pdfScriptAction)):
            pdfScriptAction_group = pdfScriptAction.pop(0)
            i = len(pdfScriptAction_group) / 2
            for x in range(0, i):
                values = {}
                values["script"] = pdfScriptAction_group.pop(0)
                values["triggerEvent"] = pdfScriptAction_group.pop(0)
            configuration["pdfScriptAction"].append(values)
    if args.pixelsPerInch != None:
        configuration["pixelsPerInch"] = args.pixelsPerInch
    if args.pixelsPerInchShrinkToFit != None:
        defaultVal = False
        if defaultVal != args.pixelsPerInchShrinkToFit:
            configuration["pixelsPerInchShrinkToFit"] = args.pixelsPerInchShrinkToFit
    if args.postTransformationDocumentType != None:
        configuration["postTransformationDocumentType"] = args.postTransformationDocumentType
    if args.printDialogPrompt != None:
        defaultVal = False
        if defaultVal != args.printDialogPrompt:
            configuration["printDialogPrompt"] = args.printDialogPrompt
    if args.processingPreferences != None:
        configuration["processingPreferences"] = args.processingPreferences
    if args.quirksSettings != None:
        quirksSettings = args.quirksSettings
        values  = {}
        values["caseSensitiveClassSelectors"] = quirksSettings.pop(0)
        values["minLineHeightFromContainer"] = quirksSettings.pop(0)
        configuration["quirksSettings"] = values
    if args.rawCookies != None:
        rawCookies = args.rawCookies
        configuration["rawCookies"] = []
        for y in range(0, len(rawCookies)):
            rawCookies_group = rawCookies.pop(0)
            i = len(rawCookies_group) / 2
            for x in range(0, i):
                values = {}
                values["key"] = rawCookies_group.pop(0)
                values["value"] = rawCookies_group.pop(0)
            configuration["rawCookies"].append(values)
    if args.requestHeaders != None:
        requestHeaders = args.requestHeaders
        configuration["requestHeaders"] = []
        for y in range(0, len(requestHeaders)):
            requestHeaders_group = requestHeaders.pop(0)
            i = len(requestHeaders_group) / 2
            for x in range(0, i):
                values = {}
                values["key"] = requestHeaders_group.pop(0)
                values["value"] = requestHeaders_group.pop(0)
            configuration["requestHeaders"].append(values)
    if args.resourceConnectTimeout != None:
        configuration["resourceConnectTimeout"] = args.resourceConnectTimeout
    if args.resourceReadTimeout != None:
        configuration["resourceReadTimeout"] = args.resourceReadTimeout
    if args.resourceRequestTimeout != None:
        configuration["resourceRequestTimeout"] = args.resourceRequestTimeout
    if args.segmentationSettings != None:
        segmentationSettings = args.segmentationSettings
        values  = {}
        values["enabled"] = segmentationSettings.pop(0)
        values["segmentSize"] = segmentationSettings.pop(0)
        configuration["segmentationSettings"] = values
    if args.signPDF != None:
        signPDF = args.signPDF
        values  = {}
        values["keyAlias"] = signPDF.pop(0)
        values["keyPassword"] = signPDF.pop(0)
        values["keystorePassword"] = signPDF.pop(0)
        values["keystoreType"] = signPDF.pop(0)
        values["keystoreURL"] = signPDF.pop(0)
        values["signingMode"] = signPDF.pop(0)
        configuration["signPDF"] = values
    if args.subject != None:
        configuration["subject"] = args.subject
    if args.throwLicenseExceptions != None:
        defaultVal = False
        if defaultVal != args.throwLicenseExceptions:
            configuration["throwLicenseExceptions"] = args.throwLicenseExceptions
    if args.title != None:
        configuration["title"] = args.title
    if args.userPassword != None:
        configuration["userPassword"] = args.userPassword
    if args.userScripts != None:
        userScripts = args.userScripts
        configuration["userScripts"] = []
        for y in range(0, len(userScripts)):
            userScripts_group = userScripts.pop(0)
            i = len(userScripts_group) / 4
            for x in range(0, i):
                values = {}
                values["beforeDocumentScripts"] = userScripts_group.pop(0)
                values["content"] = userScripts_group.pop(0)
                values["data"] = userScripts_group.pop(0)
                values["uri"] = userScripts_group.pop(0)
            configuration["userScripts"].append(values)
    if args.userStyleSheets != None:
        userStyleSheets = args.userStyleSheets
        configuration["userStyleSheets"] = []
        for y in range(0, len(userStyleSheets)):
            userStyleSheets_group = userStyleSheets.pop(0)
            i = len(userStyleSheets_group) / 4
            for x in range(0, i):
                values = {}
                values["beforeDocumentScripts"] = userStyleSheets_group.pop(0)
                values["content"] = userStyleSheets_group.pop(0)
                values["data"] = userStyleSheets_group.pop(0)
                values["uri"] = userStyleSheets_group.pop(0)
            configuration["userStyleSheets"].append(values)
    if args.validateConformance != None:
        defaultVal = False
        if defaultVal != args.validateConformance:
            configuration["validateConformance"] = args.validateConformance
    if args.viewerPreferences != None:
        configuration["viewerPreferences"] = args.viewerPreferences
    if args.xmp != None:
        xmp = args.xmp
        values  = {}
        values["content"] = xmp.pop(0)
        values["priority"] = xmp.pop(0)
        values["uri"] = xmp.pop(0)
        configuration["xmp"] = values
    if args.xsltMode != None:
        defaultVal = False
        if defaultVal != args.xsltMode:
            configuration["xsltMode"] = args.xsltMode
    if args.xsltStyleSheets != None:
        xsltStyleSheets = args.xsltStyleSheets
        configuration["xsltStyleSheets"] = []
        for y in range(0, len(xsltStyleSheets)):
            xsltStyleSheets_group = xsltStyleSheets.pop(0)
            i = len(xsltStyleSheets_group) / 4
            for x in range(0, i):
                values = {}
                values["beforeDocumentScripts"] = xsltStyleSheets_group.pop(0)
                values["content"] = xsltStyleSheets_group.pop(0)
                values["data"] = xsltStyleSheets_group.pop(0)
                values["uri"] = xsltStyleSheets_group.pop(0)
            configuration["xsltStyleSheets"].append(values)
    '''Read additional values'''
    if args.css != None:
        for css in args.css:
            if "userStyleSheets" not in configuration:
                configuration["userStyleSheets"] = []
            if isUrl(css):
                configuration["userStyleSheets"].append({ "uri": css })
            elif isFile(css):
                f = open(css, 'r')
                configuration["userStyleSheets"].append({ "content": f.read()})
                f.close()
            else:
                configuration["userStyleSheets"].append({ "content": css})
    if args.javaScript != None:
        for script in args.javaScript:
            if "userScripts" not in configuration:
                configuration["userScripts"] = []
            if isUrl(script):
                configuration["userScripts"].append({ "uri": script })
            elif isFile(script):
                f = open(script, 'r')
                configuration["userScripts"].append({ "content": f.read()})
                f.close()
            else:
                configuration["userScripts"].append({ "content": script})
    if args.appendLogs != None:
        if "debugSettings" not in configuration:
            configuration["debugSettings"] = {}
        configuration["debubSettings"]["appendLogs"] = True;

    '''Read wrapper argument values'''
    configuration["clientVersion"] = 7;
    configuration["clientName"] = "CLI";
    url = args.url
    outputFile = args.outputFile
    verbose = args.verbose
    serverUrl = args.serverUrl
    version = args.version

    if serverUrl == None:
        serverUrl = "http://localhost:9423/service/rest"

    if serverUrl.endswith("/"):
        serverUrl = serverUrl[0:-1]
    if sys.version_info[0] == 2:
        import urllib2
    else:
        import urllib.request
    clientVersion = "7"
    serverVersion = ""
    try:
        if sys.version_info[0] == 2:
            req = urllib2.Request(serverUrl + '/version.txt')
            response = urllib2.urlopen(req)
        else:
            req = urllib.request.Request(serverUrl + '/version.txt')
            response = urllib.request.urlopen(req)
        res = response.read()
        res = res.decode('utf8')
        serverVersion = res
    except HTTPError as e:
        sys.exit("Error connecting to PDFreactor Web Service at "+serverUrl+". Please make sure the PDFreactor Web Service is installed and running.")
    if version != None:
        print("Client Version: "+clientVersion)
        print("Server Version: "+serverVersion)
    else:
        if url == None:
            print("PDFreactor(R) "+serverVersion+" by RealObjects GmbH (Python CLI version: "+clientVersion+")\n\nUse the \"--help\" argument for more information.")
            #sys.exit('Error: Argument -i/--document is required.')
        if verbose != None and verbose > 0:
            print("Verbose Mode: "+str(verbose))
            if (url != None):
                print("Source URL: "+str(url))
            if (outputFile != None):
                print("Destination: "+outputFile)
            if (serverUrl != None):
                print("Server URL: "+serverUrl)
        if url != None:
            import json
            import binascii
            import sys
            majorVersion = sys.version_info[0]

            if (sys.platform.startswith("win")):
                import glob
                globUrl = glob.glob(url[0])
                if len(globUrl) > 0:
                    tmpUrl = []
                    for globbedUrl in globUrl:
                        tmpUrl.append(globbedUrl)
                    url = tmpUrl

            docNumber = 0

            for path in url:
                absPath = ""
                import os
                if not "://" in path:
                    inputFile = open(path, "r")
                    absPath = os.path.abspath(inputFile.name)
                    if majorVersion == 2:
                        import urlparse, urllib
                        path = urlparse.urljoin('file:', urllib.pathname2url(absPath))
                    else:
                        from urllib.parse import urljoin
                        from urllib.request import pathname2url
                        path = urljoin('file:', pathname2url(absPath))

                headers = { "Content-Type": "application/json" }

                headers['User-Agent'] = 'PDFreactor Python Command Line API v7'
                headers['X-RO-User-Agent'] = 'PDFreactor Python Command Line API v7'
                configuration["document"] =  path
                data = json.dumps(configuration)

                try:
                    if sys.version_info[0] == 2:
                        req = urllib2.Request(serverUrl + "/convert.json", data, headers)
                        response = urllib2.urlopen(req)
                    else:
                        req = urllib.request.Request(serverUrl + "/convert.json", data.encode(), headers)
                        response = urllib.request.urlopen(req)
                    res = response.read()
                    res = json.loads(res.decode('utf8'))
                    if (args.logLevel != None and args.logLevel != "NONE"):
                        if (res["log"] != None and len(res["log"]) > 0):
                            print("Logging at log level "+args.logLevel+":")
                            records = res["log"]["records"]
                            for record in records:
                                timestamp = record["timestamp"]
                                timestamp = datetime.datetime.fromtimestamp(float(timestamp)/1000).strftime("%H:%M:%S")
                                print("       "+timestamp+" "+record["message"])
                        else:
                            print("No log output at log level " + args.logLevel)
                    if ("error" in res):
                        print("Error while trying to create PDF (code RO103):")
                        print("[" + res["error"] + "]")
                    elif ("document" in res):
                        docNumber = writeOutputFiles(res["document"], docNumber, 0, outputType)
                    elif ("documentArray" in res):
                        pageNumber = 1
                        for document in res["documentArray"]:
                            writeOutputFiles(document, docNumber, pageNumber, outputType)
                            pageNumber += 1
                        docNumber += 1
                except HTTPError as e:
                    if (e.code == 422):
                        print(errrorStr + " " + json.loads(e.read().decode('utf8'))['error'])
                    elif (e.code == 400):
                        print("Invalid client data. " + json.loads(e.read().decode('utf8'))['error'])
                    elif (e.code == 401):
                        print("Unauthorized. " + json.loads(e.read().decode('utf8'))['error'])
                    elif (e.code == 413):
                        print("The configuration is too large to process.")
                    elif (e.code == 500):
                        print(errrorStr + " " + json.loads(e.read().decode('utf8'))['error'])
                    elif (e.code == 503):
                        print("PDFreactor Web Service is unavailable.")
                    else:
                        sys.exit(errrorStr + " Please make sure the PDFreactor Web Service is installed and running.\nError: "+str(e))
                except URLError as e:
                    sys.exit("Error connecting to PDFreactor Web Service at "+serverUrl+". Please make sure the PDFreactor Web Service is installed and running.\nError: "+str(e))
                except Exception as e:
                    sys.exit(errrorStr + " Please make sure the PDFreactor Web Service is installed and running.\nError: "+str(e))
except Exception as e2:
    sys.exit(errrorStr + " Please make sure the PDFreactor Web Service is installed and running.\nError: "+str(e2))
