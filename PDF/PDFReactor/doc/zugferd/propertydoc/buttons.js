var lastProfile = "comfort";

function show(element, target) {
	// show sub table 
    element.className = "";
    target.innerHTML = "&#9660;"
    
    
    var cell = element.parentNode;
    // show type
    var type = cell.getElementsByTagName("button")[0].nextSibling;
    type.className = "";
    
    // hide other cells and set colspan 
    cell.setAttribute("colspan", 5);
    cell = cell.nextSibling;
    while (cell != null) {
        cell.className = "hide";
        cell = cell.nextSibling;
    }
}

function hide(element, target) {
    // hide sub table 
    element.className = "hide";
    target.innerHTML = "&#9654;"

    var cell = element.parentNode;
    // hide type
    var type = cell.getElementsByTagName("button")[0].nextSibling;
    type.className = "hide";

    // show other cells and remove colspan 
    cell.removeAttribute("colspan");
    cell = cell.nextSibling;
    while (cell != null) {
        cell.className = "";
        cell = cell.nextSibling;
    }
}

function toggle(target) {
    var id = target.getAttribute("data-id");
    var element = document.getElementById(id);

    if (element.className == "hide") {
        show(element, target);
    } else {
        hide(element, target);
    }
}

function expandAll() {
    var elements = document.querySelectorAll(".toggleButton");

    elements.forEach(function(element) {
        var id = element.getAttribute("data-id");
        var e = document.getElementById(id);

        show(e, element);
    });
}

function collapseAll() {
    var elements = document.querySelectorAll(".toggleButton");

    elements.forEach(function(element) {
        var id = element.getAttribute("data-id");
        var e = document.getElementById(id);

        hide(e, element);
    });
}

function resolveProfile(profile) {
    if (profile != lastProfile) {
        var elements;
        var hideElements;
        
        if (profile == "basic") {
            hideElements = document.querySelectorAll(".comfort");
        }
        else {
            elements = document.querySelectorAll(".comfort");
        }
        
        if (elements != null) {
            for (var i = 0; i < elements.length; i++) {
                elements[i].className = elements[i].className.replace(" hide", "");
            }
        }
        if (hideElements != null) {
            for (var i = 0; i < hideElements.length; i++) {
                hideElements[i].className += " hide";
            }
        }
        lastProfile = profile;
    }
}
