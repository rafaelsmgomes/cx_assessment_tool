
function createTOC() {
    var toc = document.createElement("div");
    var table = document.createElement("table");
    var title = document.createElement("h1");
    toc.className = "toc";
    toc.setAttribute("role", "directory");
    title.innerHTML = "Table of Contents";
    toc.appendChild(title);
    toc.appendChild(table);
    
    var appendix = false;
    var count0 = 0, count1 = 0, count2 = 0;
    var appCount = ["A","B","C","D","E","F"];
    var appI = 0;
    document.querySelectorAll("h1").forEach(function(title) {
        if (title.parentNode && title.id) {
            var allowedParents = ["appendix", "sect0", "sect1", "sect2"];
            var parentClass = title.parentNode.className;
            
            if (!parentClass) {
                var parent = title.parentNode;
                
                if (parent.matches("body > section")) {
                    parentClass = "sect0";
                } else if (parent.matches("body > section > section")) {
                    parentClass = "sect1";
                } else if (parent.matches("body > section > section > section")) {
                    parentClass = "sect2";
                }
            }
            
            if (allowedParents.indexOf(parentClass) > -1) {
                var row = document.createElement("tr");
                var col = document.createElement("td");
                var link = document.createElement("a");
                var role = "toc_";
                if (parentClass =="appendix" 
                    || title.parentNode.parentNode.className =="appendix" 
                    || title.parentNode.parentNode.parentNode.className =="appendix") {
                        appendix = true;
                } else {
                    appendix = false;
                }
                if (parentClass =="appendix") {
                    count0 = appCount[appI++];
                    count1 = 0;
                    count2 = 0;
                    role = role + "appendix";
                    row.setAttribute("class","head");
                    link.setAttribute("counter", count0.toString() + ". ");
                }
                if (parentClass =="sect0") {
                    count0++;
                    count1 = 0;
                    count2 = 0;
                    role = role + "chapter";
                    row.setAttribute("class","head");
                    link.setAttribute("counter", count0.toString() + ". ");
                }
                if (parentClass =="sect1") {
                    count1++;
                    count2 = 0;
                    role = role + "sect1";
                    if (appendix) role = role + "_appendix";
                    link.setAttribute("counter", count0.toString() + "." + count1.toString() + ". " );
                }
                if (parentClass =="sect2") {
                    count2++;
                    role = role + "sect2";
                    if (appendix) role = role + "_appendix";
                    link.setAttribute("counter", count0.toString() + "." + count1.toString() + "." + count2.toString() + ". ");
                }
                //link.setAttribute("data-condition", "internal");
                link.setAttribute("href", "#" + title.id);
                link.innerHTML =  title.innerHTML;
                col.setAttribute("role", role);
                col.appendChild(link);
                row.setAttribute("chapter", "chapter_"+count0);
                row.appendChild(col);
                table.appendChild(row);
            }
        }
    })
    document.body.insertBefore(toc, document.body.children[1] );
}

function colorKeywords() {
    var table = document.querySelector("table[role=colorKeywordsTable]");
    try {
        table.children[2].children.forEach(function(element) {
            element.children[1].bgColor = element.children[2].innerHTML;
        })
    } catch (e) {
        Array.from(table.children[2].children).forEach(function(element) {
            element.children[1].bgColor = element.children[2].innerHTML;
        })
    }
}

function listStyleTypes() {
    var head = document.querySelector("table[role=listStyleTypesTable]").children[1].children[0];
    try {
        document.querySelector("table[role=listStyleTypesTable]").children[2].children.forEach(function(element) {
            for (var i = 1; i <= 4; i++) {
                element.children[i].children[0].setAttribute("start", head.children[i].innerHTML);
                element.children[i].children[0].children[0].style["list-style-type"] = element.children[0].innerHTML;
            }
        })
    } catch (e) {
        Array.from(document.querySelector("table[role=listStyleTypesTable]").children[2].children).forEach(function(element) {
            for (var i = 1; i <= 4; i++) {
                element.children[i].children[0].setAttribute("start", head.children[i].innerHTML);
                element.children[i].children[0].children[0].style["list-style-type"] = element.children[0].innerHTML;
            }
        })
    }
}

function setInternalLinks() {
    document.querySelectorAll("[href^='#']").forEach(function(el) {
        if (!el.innerHTML.trim()) {
            var links = "a[href='"+el.getAttribute("href")+"']";
            var target = document.querySelector(el.getAttribute("href"));
            
            if (target) {
                el.textContent = target.textContent;
            }
        }
    });
    document.querySelectorAll("a[data-condition='css-property']").forEach(function(el) {
        if (el.innerHTML == "") {
            var links = el.getAttribute("href");
            document.querySelectorAll(links).forEach(function (link) {
                if (link.innerHTML != "") {
                    el.innerHTML = link.innerHTML.trim();
                }
            })
        }
    });
    document.querySelectorAll("[data-xreflabel]").forEach(function(el) {
        el.setAttribute("href","#" + el.getAttribute("data-xreflabel"));
        el.innerHTML = el.getAttribute("data-xreflabel");
        el.outerHTML = el.outerHTML.replace(/<span/,"<a").replace(/<\/span/,"</a");
    })
}

function correctWidths() {
    document.querySelectorAll("[data-width]").forEach(function(el) {
        el.style.width = el.getAttribute("data-width");
    })
}

function initAccessibility() {
    var levelHeadings = [];
    
    levelHeadings.push(document.querySelectorAll("body > section:not(.simple) > h1"));
    levelHeadings.push(document.querySelectorAll("body > section:not(.simple) > section:not(.simple) > h1"));
    levelHeadings.push(document.querySelectorAll("body > section:not(.simple) > section:not(.simple) > section:not(.simple) > h1"));
    levelHeadings.push(document.querySelectorAll("body > section:not(.simple) > section:not(.simple) > section:not(.simple) > section:not(.simple) > h1"));
    levelHeadings.push(document.querySelectorAll("body > section:not(.simple) > section:not(.simple) > section:not(.simple) > section:not(.simple) > section:not(.simple) > h1"));
    
    var simpleHeadings = document.querySelectorAll("section.simple > h1");
    
    levelHeadings.forEach(function(headings, level) {
        headings.forEach(function(heading) {
            heading.setAttribute("aria-level", level + 1);
        });
    });
    
    simpleHeadings.forEach(function(heading) {
        heading.setAttribute("aria-level", "");
    });
    
    var informationBoxes = document.querySelectorAll(".note, .see, .important, .example");
    
    informationBoxes.forEach(function(box) {
        box.setAttribute("role", "note");
    });
}

function addLinkIcons() {
    document.querySelectorAll("h1, .title, table > caption").forEach(function(heading) {
        var id = heading.getAttribute("id");
        
        if (!id) {
            id = heading.textContent.replace(/ /g, '-').toLowerCase();
            
            heading.setAttribute("id", id);
            heading.style.position = "relative";
        }
        
        var url = new URL("#" + id, window.location.href);
        var target = heading;
        var linkElement = document.createElement("a");
        
        linkElement.setAttribute("href", url.href);
        linkElement.textContent = "§";
        linkElement.className = "linkIcon";
        
        if (target.nodeName !== "H1" && target.firstElementChild) {
            target = target.firstElementChild;
        }
        
        target.appendChild(linkElement);
    });
}

window.onload = function() {
    createTOC();
    
    // only in non-PDFreactor context
    if (!window.ro) {
        colorKeywords();
        listStyleTypes();
        setInternalLinks();
        correctWidths();
        initAccessibility();
        addLinkIcons();
    }
}
