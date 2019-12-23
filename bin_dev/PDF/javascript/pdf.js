//DB vars

var TotalScore=100;
var BroadcastScore=100;
var ResponsiveScore=100;
var RelationshipScore=100;
var LifecycleScore=100;
var companyName="Kraken Heavy Equipment";

var broadcast_1=100;
var broadcast_2=100;
var broadcast_3=100;
var broadcast_4=100;
var broadcast_5=100;

var responsive_1=0;
var responsive_2=0;
var responsive_3=0;
var responsive_4=0;
var responsive_5=0;
var responsive_6=0;
var responsive_7=0;
var responsive_8=0;
var responsive_9=0;
var responsive_10=0;

var relationship_1=100;
var relationship_2=100;
var relationship_3=100;
var relationship_4=100;
var relationship_5=100;
var relationship_6=100;
var relationship_7=100;
var relationship_8=100;
var relationship_9=100;
var relationship_10=100;
var relationship_11=100;
var relationship_12=100;
var relationship_13=100;

var lifecycle_1=0;
var lifecycle_2=0;
var lifecycle_3=0;
var lifecycle_4=0;
var lifecycle_5=100;
var lifecycle_6=100;
var lifecycle_7=0;
var lifecycle_8=0;
var lifecycle_9=0;



//vars not from DB
var breakpoint=99;
var data;




var jqxhr = $.getJSON( "pdf.json", function(data) { });

jqxhr.fail(function(data) {
    console.log( "error" );
});


jqxhr.always(function(data) {
    data=data;
    getSummary(data);
    getBroadcast(data);
    getResponsive(data);
    getRelationship(data);
    getLifecycle(data);
    getConclusion(data);
    document.getElementById('company_name').innerHTML=companyName;

});

/*
const mysql = require('mysql');
const conn = mysql.createPool({
    connectionLimit: 100,
    host: "72.10.48.193",
    user: "root",
    password: "Fael_0243",
    database: "test_1",
    multipleStatements: true
});
*/

fetch('/pdfdata')
    .then(response => {
    console.log(response);
    return response.json()
})
    .then(el => {
    var pdfData = el;
    console.log(pdfData)
})
    .catch(err => {
    console.log(err)
});


function getSummary(data){
    data=data;
    var x=TotalScore;
    switch (true) {
        case (x < 25):
            document.getElementById('conclusion_text').innerHTML=data.conclusion.low;
            break;
        case (x < 50):
            document.getElementById('cta-title-dynamic').innerHTML="Do More with Lead Management";
            $('#cta-1').prop('href', 'https://www.oracle.com/a/ocom/resources/oracle-spark-series-lead-management.pdf');
            $('#cta-1').css('background-image','url(assets/thumbnails/tbnail-04.png)');
            document.getElementById('conclusion_text').innerHTML=data.conclusion.medlow;
            break;
        case (x < 74):
            document.getElementById('cta-title-dynamic').innerHTML="Go Further with Customer Experience Optimization";
            $('#cta-1').prop('href', 'https://www.oracle.com/a/ocom/resources/oracle-ignite-guide-customer-experience-optimization.pdf');
             $('#cta-1').css('background-image','url(assets/thumbnails/tbnail-05.png)');
            document.getElementById('conclusion_text').innerHTML=data.conclusion.medhigh;
            break;
        default:
            document.getElementById('cta-title-dynamic').innerHTML="How to Thrive in the Experience Economy";
             $('#cta-1').css('background-image','url(assets/thumbnails/tbnail-06.png)');
            $('#cta-1').prop('href', 'https://blogs.oracle.com/marketingcloud/how-to-thrive-in-the-experience-economy%e2%80%94and-how-oracle-cx-unity-is-more-than-a-cdp-v2');
            document.getElementById('conclusion_text').innerHTML=data.conclusion.high;
            break;
    } 
}
function getBroadcast(data){
    data=data;
    var ycount=0;
    var ncount=0;
    var x=BroadcastScore;
    switch (true) {
        case (x < 25):
            document.getElementById('broadcast_content').innerHTML=data.broadcast.broadcast_text.low;
            break;
        case (x < 50):
            document.getElementById('broadcast_content').innerHTML=data.broadcast.broadcast_text.medlow;
            break;
        case (x < 74):
            document.getElementById('broadcast_content').innerHTML=data.broadcast.broadcast_text.medhigh;
            break;
        default:
            document.getElementById('broadcast_content').innerHTML=data.broadcast.broadcast_text.high;
            break;
    } 
    for (i = 1; i <(data.broadcast.recommendations.length+1); i++) {
        var el="broadcast_r_"+i;
        var v="broadcast_"+i;
        var appendTo;
        if( window[v]<breakpoint){
            $('#broadcast-col-content').append('<div class="action-item"><span>'+data.broadcast.recommendations[i-1].title+'</span></div>');
            if(ncount < 3){
                appendTo='#broadcast-recs-1';
            }
            if((ncount >= 3) &&  (ncount < 6)){
                swapBackgrounds($('#broadcast-page-3'));
                appendTo='#broadcast-recs-2';
            }
            $(appendTo).append('<div class="reccomendation icon '+data.broadcast.recommendations[i-1].icon+'">'+
                                 '<div class="recommendation-text">'+
                                 '<div class="recommendation_title">'+data.broadcast.recommendations[i-1].title+'</div>'+
                                 '<p>'+data.broadcast.recommendations[i-1].no+'</p> </div></div>' );

            ncount++;
            console.log('ncount: ' + ncount + ' length: ' + data.broadcast.recommendations.length)
             if(ncount==data.broadcast.recommendations.length){
                 $('#broadcast-page-4').hide();
              }
            
        }
        else{
             if(ycount<3){
                appendTo='#broadcast-congrads-1';
            }
            else if((ycount >= 3) &&  (ycount < 6)){
                appendTo='#broadcast-congrads-2';
                swapBackgrounds($('#broadcast-page-4'));
            }
            $(appendTo).append('<div class="reccomendation congradulations icon '+data.broadcast.recommendations[i-1].icon+'">'+
                                 '<div class="recommendation-text">'+
                                 '<div class="recommendation_title">'+data.broadcast.recommendations[i-1].title+'</div>'+
                                 '<p>'+data.broadcast.recommendations[i-1].yes+'</p> </div></div>' );
            ycount++;
            if(ycount==data.broadcast.recommendations.length){
                 $('#broadcast-page-3').hide();
                 $(appendTo).append('<div class="reccomendation congradulations icon">'+
                                 '<div class="recommendation-text">'+
                                 '<p>'+data.broadcast.perfect+'</p> </div></div>' );
            }
        }

    } 
    var h= BroadcastScore * 161 /100;
    document.getElementById("broadcast-score-holder").style.height=h + 'px';
    document.getElementById("broadcast-cloud-bg").style.height=h + 'px';
    document.getElementById("broadcast-cloud-score").innerHTML=BroadcastScore;
}
function getResponsive(data){
    data=data;
    var ycount=0;
    var ncount=0;
    var x=ResponsiveScore;
    switch (true) {
        case (x < 25):
            document.getElementById('responsive_content').innerHTML=data.responsive.responsive_text.low;
            break;
        case (x < 50):
            document.getElementById('responsive_content').innerHTML=data.responsive.responsive_text.medlow;
            break;
        case (x < 74):
            document.getElementById('responsive_content').innerHTML=data.responsive.responsive_text.medhigh;
            break;
        default:
            document.getElementById('responsive_content').innerHTML=data.responsive.responsive_text.high;
            break;
    } 
    for (i = 1; i < (data.responsive.recommendations.length + 1); i++) {
        var el="responsive_r_"+i;
        var v="responsive_"+i;
        var appendTo;
        if( window[v]<breakpoint){
            $('#responsive-col-content').append('<div class="action-item"><span>'+data.responsive.recommendations[i-1].title+'</span></div>')
            if(ncount < 3){
                appendTo='#responsive-recs-1';
            }
            if((ncount >= 3) &&  (ncount < 6)){
                swapBackgrounds($('#responsive-page-2'));
                appendTo='#responsive-recs-2';
            }
            if((ncount >= 6) &&  (ncount < 10)){
                appendTo='#responsive-recs-3';
            }
             if((ncount >= 10) &&  (ncount < 13)){
                swapBackgrounds($('#responsive-page-3'));
                appendTo='#responsive-recs-4';
            }
            $(appendTo).append('<div class="reccomendation icon '+data.responsive.recommendations[i-1].icon+'">'+
                                 '<div class="recommendation-text">'+
                                 '<div class="recommendation_title">'+data.responsive.recommendations[i-1].title+'</div>'+
                                 '<p>'+data.responsive.recommendations[i-1].no+'</p> </div></div>' );
          
            ncount++;
            if(ncount==data.responsive.recommendations.length){
                 $('#responsive-page-4').hide();
            }  
        }
        else{
             if(ycount<3){
                appendTo='#responsive-congrads-1';
            }
            else if((ycount >= 3) &&  (ycount < 6)){
                appendTo='#responsive-congrads-2';
            }
            else if((ycount >= 6) &&  (ycount < 10)){
                appendTo='#responsive-congrads-3';
            }
            $(appendTo).append('<div class="reccomendation congradulations icon '+data.responsive.recommendations[i-1].icon+'">'+
                                 '<div class="recommendation-text">'+
                                 '<div class="recommendation_title">'+data.responsive.recommendations[i-1].title+'</div>'+
                                 '<p>'+data.responsive.recommendations[i-1].yes+'</p> </div></div>' );
          
            ycount++;
            if(ycount==data.responsive.recommendations.length){
                 $('#responsive-page-2').hide();
                 $(appendTo).append('<div class="reccomendation congradulations icon">'+
                                 '<div class="recommendation-text">'+
                                 '<p>'+data.responsive.perfect+'</p> </div></div>' );
            }
        }
            if(ncount <= 6){
               $('#responsive-page-5').hide();
        }
        if(ycount <= 6){
               $('#responsive-page-3').hide();
        }
    } 
    var h= ResponsiveScore * 161 /100;
    document.getElementById("responsive-score-holder").style.height=h + 'px';
    document.getElementById("responsive-cloud-bg").style.height=h + 'px';
    document.getElementById("responsive-cloud-score").innerHTML=ResponsiveScore;
}
function getRelationship(data){
    data=data;
    var ycount=0;
    var ncount=0;
    var x=RelationshipScore;
    switch (true) {
        case (x < 25):
            document.getElementById('lifecycle_content').innerHTML=data.relationship.relationship_text.low;
            break;
        case (x < 50):
            document.getElementById('relationship_content').innerHTML=data.relationship.relationship_text.medlow;
            break;
        case (x < 74):
            document.getElementById('relationship_content').innerHTML=data.relationship.relationship_text.medhigh;
            break;
        default:
            document.getElementById('relationship_content').innerHTML=data.relationship.relationship_text.high;
            break;
    } 
    for (i = 1; i < (data.relationship.recommendations.length + 1); i++) {
        var el="relationship_r_"+i;
        var v="relationship_"+i;
        var y=data.relationship.recommendations[i-1].yes;
        var n=data.relationship.recommendations[i-1].no;
        var appendTo;
        if( window[v]<breakpoint){
            $('#relationship-col-content').append('<div class="action-item"><span>'+data.relationship.recommendations[i-1].title+'</span></div>')
            if(ncount < 3){
                appendTo='#relationship-recs-1';
            }
            if((ncount >=3) &&  (ncount < 6)){
                 swapBackgrounds($('#relationship-page-2'));
                appendTo='#relationship-recs-2';
            }
            if((ncount >= 6) &&  (ncount < 10)){
                appendTo='#relationship-recs-3';
            }
            if((ncount >= 10) &&  (ncount < 14)){
                 swapBackgrounds($('#relationship-page-3'));
                appendTo='#relationship-recs-4';
            }
            $(appendTo).append('<div class="reccomendation icon '+data.relationship.recommendations[i-1].icon+'">'+
                                 '<div class="recommendation-text">'+
                                 '<div class="recommendation_title">'+data.relationship.recommendations[i-1].title+'</div>'+
                                 '<p>'+data.relationship.recommendations[i-1].no+'</p> </div></div>' );
            ncount++;
            if(ncount==data.relationship.recommendations.length){
                 $('#relationship-page-4').hide();
            } 
            
        }
        else{
             if(ycount<3){
                appendTo='#relationship-congrads-1';
            }
            else if((ycount >= 3) &&  (ycount < 6)){
                swapBackgrounds($('#relationship-page-4'));
                appendTo='#relationship-congrads-2';
            }
            else if((ycount >= 6) &&  (ycount < 10)){
                appendTo='#relationship-congrads-3';
            }
            else if((ycount >= 10) &&  (ycount < 14)){
                swapBackgrounds($('#relationship-page-5'));
                appendTo='#relationship-congrads-4';
            }
            $(appendTo).append('<div class="reccomendation congradulations icon '+data.relationship.recommendations[i-1].icon+'">'+
                                 '<div class="recommendation-text">'+
                                 '<div class="recommendation_title">'+data.relationship.recommendations[i-1].title+'</div>'+
                                 '<p>'+data.relationship.recommendations[i-1].yes+'</p> </div></div>' );
            ycount++;
           if(ycount==data.relationship.recommendations.length){
                 $('#relationship-page-2').hide();
                 $(appendTo).append('<div class="reccomendation congradulations icon">'+
                                 '<div class="recommendation-text">'+
                                 '<p>'+data.relationship.perfect+'</p> </div></div>' );
            }
        }
         if(ncount <= 6){
               $('#relationship-page-5').hide();
        }
        if(ycount <= 6){
               $('#relationship-page-3').hide();
        }
    } 
    var h= RelationshipScore * 161 /100;
    document.getElementById("relationship-score-holder").style.height=h + 'px';
    document.getElementById("relationship-cloud-bg").style.height=h + 'px';
    document.getElementById("relationship-cloud-score").innerHTML=RelationshipScore;
}
function getLifecycle(data){
    data=data;
    var ycount=0;
    var ncount=0;
    var x=LifecycleScore;
    switch (true) {
        case (x < 25):
            document.getElementById('lifecycle_content').innerHTML=data.lifecycle.lifecycle_text.low;
            break;
        case (x < 50):
            document.getElementById('lifecycle_content').innerHTML=data.lifecycle.lifecycle_text.medlow;
            break;
        case (x < 74):
            document.getElementById('lifecycle_content').innerHTML=data.lifecycle.lifecycle_text.medhigh;
            break;
        default:
            document.getElementById('lifecycle_content').innerHTML=data.lifecycle.lifecycle_text.high;
            break;
    } 
    for (i = 1; i < (data.lifecycle.recommendations.length + 1); i++) {
        var el="lifecycle_r_"+i;
        var v="lifecycle_"+i;
        var y=data.lifecycle.recommendations[i-1].yes;
        var n=data.lifecycle.recommendations[i-1].no;
        var appendTo;
        if( window[v]<breakpoint){
            $('#lifecycle-col-content').append('<div class="action-item"><span>'+data.lifecycle.recommendations[i-1].title+'</span></div>');
            if(ncount < 3){
                appendTo='#lifecycle-recs-1';
            }
            if((ncount >= 3) &&  (ncount < 6)){
                swapBackgrounds($('#lifecycle-page-3'));
                appendTo='#lifecycle-recs-2';
            }
            if((ncount >= 6) &&  (ncount < 10)){
             
                appendTo='#lifecycle-recs-3';
            }
            $(appendTo).append('<div class="reccomendation icon '+data.lifecycle.recommendations[i-1].icon+'">'+
                                 '<div class="recommendation-text">'+
                                 '<div class="recommendation_title">'+data.lifecycle.recommendations[i-1].title+'</div>'+
                                 '<p>'+data.lifecycle.recommendations[i-1].no+'</p> </div></div>' );
            ncount++;   
            if(ncount==data.lifecycle.recommendations.length){
                 $('#lifecycle-page-4').hide();
            } 
            
        }
        else{
             if(ycount<3){
                appendTo='#lifecycle-congrads-1';
            }
            else if((ycount >= 3) &&  (ycount < 6)){
                appendTo='#lifecycle-congrads-2';
            }
            else if((ycount >= 6) &&  (ycount < 10)){
                appendTo='#lifecycle-congrads-3';
            }
            $(appendTo).append('<div class="reccomendation congradulations icon '+data.lifecycle.recommendations[i-1].icon+'">'+
                                 '<div class="recommendation-text">'+
                                 '<div class="recommendation_title">'+data.lifecycle.recommendations[i-1].title+'</div>'+
                                 '<p>'+data.lifecycle.recommendations[i-1].yes+'</p> </div></div>' );
            ycount++;
             if(ycount==data.lifecycle.recommendations.length){
                 $('#lifecycle-page-2').hide();
                 $(appendTo).append('<div class="reccomendation congradulations icon">'+
                                 '<div class="recommendation-text">'+
                                 '<p>'+data.lifecycle.perfect+'</p> </div></div>' );
            }
        }
        if(ncount <= 6){
               $('#lifecycle-page-5').hide();
        }
        if(ycount <= 6){
               $('#lifecycle-page-3').hide();
        }
    } 
    var h= LifecycleScore * 161 /100;
    document.getElementById("lifecycle-score-holder").style.height=h + 'px';
    document.getElementById("lifecycle-cloud-bg").style.height=h + 'px';
    document.getElementById("lifecycle-cloud-score").innerHTML=LifecycleScore;
}
function getConclusion(data){
    data=data;
    var x=TotalScore;
    switch (true) {
        case (x < 25):
            document.getElementById('summary_content').innerHTML=data.summary.low;
            break;
        case (x < 50):
            document.getElementById('summary_content').innerHTML=data.summary.medlow;
            break;
        case (x < 74):
            document.getElementById('summary_content').innerHTML=data.summary.medhigh;
            break;
        default:
            document.getElementById('summary_content').innerHTML=data.summary.high;
            break;
    } 
    var h= TotalScore * 161 /100 
    document.getElementById("score-holder").style.height=h + 'px';
    document.getElementById("cloud-bg").style.height=h + 'px';
    document.getElementById("total-cloud-score").innerHTML=TotalScore;
}
function swapBackgrounds(el){
 el.css('background-image','url(../assets/strip_7.png)');
     el.css('background-size','792px 16px');
}
