var datasets = [];

// draw a pie graph
function drawPie(container) {
    var piedata = []
    
    for (var i = 0; i < datasets.length/2; i++) {
        piedata.push({ data : [[0, sum(datasets[i])]], label : datasets[i].label });
    }
    
    var graph = Flotr.draw(container, piedata, {
            HtmlText : true,
            title: "<dfn>Total precipitation [mm] comparison</dfn>",
            grid : {
                    verticalLines : false,
                    horizontalLines : false
                },
            xaxis : { showLabels : false },
            yaxis : { showLabels : false },
            pie : {
                    show : true, 
                    explode : 6
                },
            legend : {
                    position : 'se',
                    backgroundColor : 'none'
                }
        });
}

// draw a bar graph
function drawBars(container) {
  Flotr.draw( container, [{ data: datasets[0].data }], {
            HtmlText : true,
            title: "<dfn>Precipitation [mm] in " + datasets[0].label + "</dfn>",
            bars : {
                    show : true,
                    horizontal : false,
                    shadowSize : 5,
                    barWidth : 0.5
                },
            grid: {
                    verticalLines: false
                },
            yaxis : {
                    min : 0,
                    autoscaleMargin : 1,
                    noTicks: 6
                },
            xaxis: {
                    noTicks : 12,
                    tickFormatter : ticksFn
                },
        });
}

// draw a line graph
function drawLines(container) {
    var graph = Flotr.draw(container, datasets, {
            xaxis: {
                noTicks : 12,
                tickFormatter : ticksFn
            },
            grid: {
                minorVerticalLines: true
            },
            HtmlText : true,
            title: "<dfn>Precipitation [mm] per year</dfn>",
            legend : {
                    position : 'sw',
                    backgroundColor : 'none'
                }
        });
}

// transform the table
function transformTable(container) {
    Awesomizr.rotateTableHeader(container, {
            angle: 45,
            width: "21pt",
            firstCol: true
        });
}

// get data from the document
function getData(table) {
    var rows = table.children[1].children;
    var row;
    
    for (var i = 0; i < rows.length; i++) {
        row = rows[i]
        
        var city = { label: row.children[0].innerHTML, data: [] };
        
        for (var j = 1; j < row.children.length-1; j++) {
            var value = [j-1, parseFloat(row.children[j].innerHTML)];
            
            city.data.push(value);
        }
        
        datasets.push(city);
    }
}

// calculate the total
function calculateTotal(table) {
    var rows = table.children[1].children;
    var row;
    
    for (var i = 0; i < rows.length; i++) {
        row = rows[i]
        
        var total = sum(datasets[i]);
            
        row.lastElementChild.innerHTML += total;
    }
}

function sum(dataset) {
    var total = 0;
    
    for (var i = 0; i < dataset.data.length; i++) {
        total += parseFloat(dataset.data[i][1]);
    }
    
    return Math.round(total*100)/100;
}

function ticksFn(n) {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[parseInt(n) % 12];
}
function insertPdfAsImages(pdfUrl) {
    var insertImage = function(elem, url, page) {
        // insert an image generated from the PDF
        var img = document.createElement("img");
        img.src = url;
        // select the page from the PDF that should be displayed as image
        img.setAttribute("style", "-ro-source-page: " + page);
        elem.appendChild(img);
        
        // add line break every 2 pages
        if (page % 2 == 0) {
            var br = document.createElement("br");
            elem.appendChild(br);
        }
        return img;
    }
    
    // the element where the images will be inserted
    var container = document.getElementById("pdfAsImagesContainer");
    
    // insert first page, then read the page count and insert the other pages
    var img = insertImage(container, pdfUrl, 1);
    // roPageCount is a proprietary property that returns the number of pages for PDF images
    var pageCount = img.roPageCount;
    for (var i = 2; i <= pageCount; i++) {
        insertImage(container, pdfUrl, i);
    }
}
