import java.io.File;
import java.io.FileOutputStream;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.realobjects.pdfreactor.Configuration;
import com.realobjects.pdfreactor.PDFreactor;
import com.realobjects.pdfreactor.Result;
import com.realobjects.pdfreactor.events.DefaultHandler;

/**
 * PDFreactor Simple Sample.
 * 
 * This is the most simple code using the PDFreactor Java-API.
 * 
 * It renders an HTML file to PDF on the command line.
 */
public class SimpleSample {
    
    /**
     * All work is done here.
     * 
     * @param inFile The path of the input HTML-file.
     * @param outFile The path of the pdf-file to be created.
     */
    public SimpleSample(String inFile, String outFile) {
        try {
            
            // get file URL from input file path
            String inURL = new File(inFile).toURI().toURL().toString();
            
            // Create PDFreactor.
            PDFreactor pdfReactor = new PDFreactor();
            
            // Create the configuartion. 
            Configuration configuration = new Configuration();
            
            // Set the required document.
            configuration.setDocument(inURL);
            
            // Create and set a logger. 
            Logger logger = Logger.getAnonymousLogger();
            logger.setUseParentHandlers(false);
            logger.setLevel(Level.INFO);
            logger.addHandler(new DefaultHandler());
            configuration.setLogger(logger);
            
            // The PDF file to be created.
            FileOutputStream fileOutputStream = new FileOutputStream(outFile);
            
            // Render the HTML file to PDF.
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
     * Main just checks the parameters.
     * 
     * @param args The program arguments.
     */
    public static void main(String[] args) {
        
        // Some simple parameter handling.
        if (args.length > 1) {
            new SimpleSample(args[0], args[1]);
        }
        
        else if (args.length == 1) {
            new SimpleSample(args[0], args[0] + ".pdf");
        }
        
        else {
            System.out.println("usage: Sample1 <input html file> [output pdf file]");
        }
    }
}
