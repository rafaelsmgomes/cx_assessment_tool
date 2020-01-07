import java.io.FileOutputStream;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.realobjects.pdfreactor.Configuration;
import com.realobjects.pdfreactor.Configuration.Resource;
import com.realobjects.pdfreactor.PDFreactor;
import com.realobjects.pdfreactor.Result;
import com.realobjects.pdfreactor.events.DefaultHandler;

/**
 * PDFreactor Advanced Sample
 * 
 * Demonstrates some more advanced features of PDFreactor.
 * 
 * Renders a unicode chart to PDF.
 */
public class AdvancedSample {
    
    /**
     * Constructs an AdvancedSample.
     * 
     * @param pdfname For the resulting PDF file.
     * @param start First char to render.
     * @param end Last char to render.
     */
    public AdvancedSample(String pdfname, int start, int end) {
        renderToPDF(makeChart(start,end),pdfname);
    }
    
    /**
     * Renders the generated data to PDF and writes it to a file.
     * 
     * @param htmldata The data to be rendered.
     * @param pdfname The target PDF file.
     */
    private void renderToPDF(String htmldata, String pdfname) {
        try {
            // Create PDFreactor.
            PDFreactor pdfReactor = new PDFreactor();
            
            // Create the configuartion. 
            Configuration configuration = new Configuration();
            
            // Set the required document.
            configuration.setDocument(htmldata);
            
            // Set author and title for the PDF meta data.
            configuration.setAuthor("Peter Sampler");
            configuration.setTitle("Unicode Chart");
            
            // Adding some CSS.
            // We use Arial which has unicode support, but is not very complete
            // you can use a better unicode font, like Arial Unicode MS
            // or any installed unicode font of your choice.
            configuration.setUserStyleSheets(new Resource("* { font-family:Arial, sans-rerif; font-size:0.95em }", null));
            
            // Create and set a logger.
            Logger logger = Logger.getAnonymousLogger();
            logger.setUseParentHandlers(false);
            logger.setLevel(Level.INFO);
            logger.addHandler(new DefaultHandler());
            configuration.setLogger(logger);
            
            // The PDF file to be created.
            FileOutputStream fileOutputStream = new FileOutputStream(pdfname);
            
            // Render the HTML data to PDF.
            Result result = pdfReactor.convert(configuration);
            byte[] pdf = result.getDocument();
            
            // Write the PDF data to the file
            fileOutputStream.write(pdf);
            
            // Close the file.
            fileOutputStream.close();
        }
        
        catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    /**
     * Creates an HTML unicode chart.
     * 
     * @param start First char to render.
     * @param end Last char to render.
     * @return The HTML data of the unicode chart as a string.
     */
    private String makeChart(int start, int end) {
        
        // The ASCII control codes.
        final String[] control = new String[] { "NUL", "SOH", "STX", "ETX",
                "EOT", "ENQ", "ACK", "BEL", "BS", "HT", "LF", "VT", "FF", "CR",
                "SO", "SI", "DLE", "DC1", "DC2", "DC3", "DC4", "NAK", "SYN",
                "ETB", "CAN", "EM", "SUB", "ESC", "FS", "GS", "RS", "US", "SP" };
        
        // Generate the header of the file.
        String htmldata = new String();
        htmldata += "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
        htmldata += "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\"\n";
        htmldata += "                      \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n";
        htmldata += "<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\">\n";
        htmldata += "<head><title>Unicode Chart</title></head>\n";
        htmldata += "<body><table border=\"1\">\n";
        
        // Generate the chart.
        for (int i = start; i < end; i++) {
            if (i % 16 == 0) {
                htmldata += "<tr>\n";
            }
            
            if (i < 33) {
                htmldata += "<td><i>" + i + "</i>:<br/>" + control[i] + "</td>\n";
            }
            
            else if (i > 65533 || (i > 55295 && i < 57344)) {
                htmldata += "<td><i>" + i + "</i>:<br/>!!!</td>\n";
            }
            
            else {
                htmldata += "<td><i>" + i + "</i>:<br/>&#" + i + ";</td>\n";
            }
            
            if (i % 16 == 15) {
                htmldata += "</tr>";
            }
        }
        
        // Generate the footer of the file.
        htmldata += "</table></body></html>\n";
        
        return htmldata;
    }
    
    /**
     * Main just handles the parameters.
     * 
     * @param args The program arguments.
     */
    public static void main(String[] args) {
        
        String pdfname = "unicode.pdf";
        int start = 1;
        int end = 510;
        
        if (args.length == 0) {
            System.out.println();
            System.out.println("parameter 1: file to save the chart in");
            System.out.println("parameter 2 & 3:  range of the unicode table to show (optional)");
            System.out.println();
        }
        
        else {
            pdfname = args[0];
            
            if (args.length > 1) {
                start = Integer.parseInt(args[1]);
            }
            
            if (args.length > 2) {
                end = Integer.parseInt(args[2]);
            }
            
            if (start < 0) {
                start = 0;
            }
            
            if (end < 0) {
                end = start - end;
            }
            
            if (end < start) {
                int temp = end;
                end = start;
                start = temp;
            }
            
            if (start > 65530) {
                start = 65530;
            }
            
            if (end > 65530) {
                end = 65530;
            }
            
            start -= start % 16;
            
            end -= end % 16;
            
            end += 16;
            
            new AdvancedSample(pdfname, start, end);
        }
    }
}
