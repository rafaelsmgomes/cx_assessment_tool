window.onload = function() {
    // Datumsformat für das Eingabedokument festlegen
    ro.zugferd.defaults = { 
        inputFormat: { dateFormat: "yyyy-MM-dd" }
    };
    
    // Mappings für ZUGFeRD Codes die nicht als solche im Dokument vorkommen
    ro.zugferd.addMapping("Rechnung", "380");
    ro.zugferd.addMapping("stk.", "C62");
    ro.zugferd.addMapping("Kästen", "BC");
    
    // Festlegen des verwendeten Profils
    ro.zugferd.set("zugferd-profile", "comfort");
    
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
    
    ro.zugferd.setFromSelectorAll("tax.percent", "tr.tax td:nth-child(5)", { endDelimiter: "%" });
    ro.zugferd.setFromSelectorAll("tax.basis", [ ".tax", "td:nth-child(6)" ]);
    ro.zugferd.setFromSelectorAll("tax.calculated", [ ".tax", "td:nth-child(7)" ]);
    ro.zugferd.get("tax").forEach(x => x.set("type", "VAT"));
    
    // Positionsbezogene Properties
    ro.zugferd.setFromSelectorAll("item.seller-id", [".item", "td:nth-child(2)"]);
    ro.zugferd.setFromSelectorAll("item.name", [ ".item", "td:nth-child(3)" ], { splitDelimiter: " ", splitIndex: 0 });
    ro.zugferd.setFromSelectorAll("item.description", [".item", "td:nth-child(3)"], { startDelimiter:" " });
    ro.zugferd.setFromSelectorAll("item.billed-quantity", [ ".item", "td:nth-child(4)" ]);
    ro.zugferd.setFromSelectorAll("item.billed-quantity-unit", [ ".item", "td:nth-child(5)" ]);
    ro.zugferd.setFromSelectorAll("item.gross-price-amount", [ ".item", "td:nth-child(6)" ]);
    ro.zugferd.setFromSelectorAll("item.line-total", [ ".item", "td:nth-child(7)" ]);
    ro.zugferd.setFromSelectorAll("item.tax.percent", [ ".item", "td:nth-child(8)" ], { endDelimiter: "%"});
};