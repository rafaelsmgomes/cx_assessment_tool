window.onload = function() {
    // Datumsformat für das Eingabedokument festlegen
    ro.zugferd.defaults = { 
        inputFormat: { dateFormat: "yyyy-MM-dd" }
    };
    
    // Mapping des ZUGFeRD Codes für Rechnung, da der Code an sich nicht im Dokument vorkommt
    ro.zugferd.addMapping("Rechnung", "380");
    
    // Festlegen des verwendeten Profils
    ro.zugferd.set("zugferd-profile", "basic");
    
    /*
     * Im Beispieldokument werden die folgende Werte alle aus Elementen ausgelesen, die
     * in dem Container mit der ID "invoiceData" vorkommen.
     */
    var invoiceData = document.querySelector("#invoiceData table").tBodies[0].children;
    ro.zugferd.set("document-name", invoiceData[0].querySelector("th").textContent, {
        ignoreMapping: true 
    });
    ro.zugferd.set("document-type", invoiceData[0].querySelector("th").textContent);
    ro.zugferd.set("document-id", invoiceData[1].querySelector("td:nth-child(2)").textContent);
    ro.zugferd.set("document-issue-date", 
        invoiceData[2].querySelector("td:nth-child(2)").textContent);
    
    // Name des Käufers und Verkäufers
    ro.zugferd.set("buyer-name", document.querySelector("#buyerName").textContent);
    ro.zugferd.set("seller-name", document.querySelector("#sellerName").textContent);
    
    // Währung
    ro.zugferd.set("currency", document.querySelector("#waehrung").textContent);
    
    // Beträge und Steuern
    ro.zugferd.setFromSelector("tax-basis-total", "#taxBasis");
    ro.zugferd.setFromSelector("tax-total", "#taxTotal");
    ro.zugferd.setFromSelector("line-total", "#taxBasis");
    ro.zugferd.setFromSelector("grand-total", "#grandTotal");
};