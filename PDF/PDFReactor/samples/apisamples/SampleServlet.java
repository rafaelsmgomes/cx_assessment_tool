import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.realobjects.pdfreactor.Configuration;
import com.realobjects.pdfreactor.PDFreactor;
import com.realobjects.pdfreactor.Result;


public class SampleServlet extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException {

        try {
            //create new instance of PDFreactor
            PDFreactor pdfReactor = new PDFreactor();  

            // Create the configuartion. 
            Configuration configuration = new Configuration();
            
            
            
            //set the license key
            //pdfReactor.setLicenseKey("<license>...</license>");

            //additional settings
            configuration.setAddBookmarks(true);
            configuration.setAddLinks(true);
            
            //get the "url" parameter of the get request
            String url = request.getParameter("url");
            
            // Set the required document.
            configuration.setDocument(url);
            
            //render the given URL to PDF
            Result result = pdfReactor.convert(configuration);
            byte[] pdf = result.getDocument();
            
            //set the MIME type of the response to PDF;
            response.setContentType("application/pdf");
            
            //send the PDF as response
            ServletOutputStream servletOutputStream = response.getOutputStream();
            servletOutputStream.write(pdf);
            servletOutputStream.close();

          //catch errors, e.g. a bad URL
        } catch (Throwable e) {
            //log error to console 
            e.printStackTrace();
            //forward error to application server
            throw new ServletException(e);
        }
    }
}
