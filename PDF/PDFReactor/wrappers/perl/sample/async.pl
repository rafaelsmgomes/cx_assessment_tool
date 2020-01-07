#!/usr/bin/perl -w
use Time::Piece;
my $time = Time::Piece->new()->strftime('%m/%d/%Y %H:%M:%S');

use Cwd qw(abs_path);
use File::Basename;
my $directory = dirname(dirname(abs_path($0)))."/lib/";
require $directory."PDFreactor.pm";

# The content to render
open(CONTENT, dirname(dirname($directory))."/resources/contentPerl.html");
@arrcontent = <CONTENT>;
close CONTENT;
$content = join "", @arrcontent;

# Create new PDFreactor instance
# my $pdfReactor = PDFreactor->new("http://yourServer:9423/service/rest");
my $pdfReactor = PDFreactor->new();

# Get the current URL path
my $path = $ENV{'REQUEST_URI'};

# If the first environment variable does not exist
if ($path eq "") {
    # try another variable.
    $path = $ENV{'PATH_INFO'};
}

$config = {
    # Specify the input document
    'document' => $content,
    # Set a base URL for images, style sheets, links
    'baseURL' => "http://".$ENV{'HTTP_HOST'}.$path,
    # Set an appropriate log level
    'logLevel' => PDFreactor::LogLevel->WARN,
    # Set the title of the created PDF
    'title' => 'Demonstration of the PDFreactor Perl API',
    # Set the author of the created PDF
    'author' => 'Myself',
    # Enable links in the PDF document
    'addLinks' => ('true'),
    # Enable bookmarks in the PDF document
    'addBookmarks' => ('true'),
    # Set some viewer preferences
    'viewerPreferences' => [
        PDFreactor::ViewerPreferences->FIT_WINDOW,
        PDFreactor::ViewerPreferences->PAGE_MODE_USE_THUMBS
    ],
    # Add user style sheets
    'userStyleSheets' => [
        {
            'content' => '@page {'.
                             '@top-center {'.
                                    'content: "PDFreactor Perl API demonstration";'.
                             '}'.
                             '@bottom-center {'.
                                 'content: "Created on '.$time.'";'.
                             '}'.
                         '}'
        },
        { 'uri' => "../../resources/common.css" }
    ]
};

eval {
    # Convert document
    $documentId = $pdfReactor->convertAsync($config);
    $progress;

    do {
        sleep(0.5);
        $progress = $pdfReactor->getProgress($documentId);
    } while ($progress->{finished} == 0);

    binmode(STDOUT);

    # Streaming is more efficient for larger documents
    print "Content-type: application/pdf\n\n";
    $pdfReactor->getDocumentAsBinary($documentId, STDOUT);
} || do {
    my $e = $@;

    # Not successful, print error and log
    print "Content-type: text/html\n\n";
    print "<h1>Error During Rendering</h1>";
    print "<h2>".$e."</h2>";
};
