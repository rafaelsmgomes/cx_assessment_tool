//DB vars

var TotalScore ;
var BroadcastScore;
var ResponsiveScore;
var RelationshipScore;
var LifecycleScore;
var companyName;


var broadcast_1;
var broadcast_2;
var broadcast_3;
var broadcast_4;
var broadcast_5;
var broadcast_6;

var responsive_1;
var responsive_2;
var responsive_3;
var responsive_4;
var responsive_5;
var responsive_6;
var responsive_7;
var responsive_8;
var responsive_9;
var responsive_10;


var relationship_1;
var relationship_2;
var relationship_3;
var relationship_4;
var relationship_5;
var relationship_6;
var relationship_7;
var relationship_8;
var relationship_9;
var relationship_10;
var relationship_11;
var relationship_12;

var lifecycle_1;
var lifecycle_2;
var lifecycle_3;
var lifecycle_4;
var lifecycle_5;
var lifecycle_6;
var lifecycle_7;
var lifecycle_8;


var loc= window.location.href;
var r=loc.lastIndexOf('/');
var id=loc.substring(r + 1);

var link= "/b2b/pdfdata/" +id;


    var data;
    

    var jqxhr1 = $.getJSON( link, function(data) { });
    console.log(jqxhr1);
    jqxhr1.fail(function(data) {
        console.log( "error" );
    });
    jqxhr1.always(function(data) {
          var pdfData = data;

    TotalScore=pdfData.data.TotalScore;
    BroadcastScore=pdfData.data.BroadcastScore;
    ResponsiveScore=pdfData.data.ResponsiveScore;
    RelationshipScore=pdfData.data.RelationshipScore;
    LifecycleScore=pdfData.data.LifecycleScore;
    companyName=pdfData.data.companyName;
    
    broadcast_1=pdfData.data.broadcast_1;
    broadcast_2=pdfData.data.broadcast_2;
    broadcast_3=pdfData.data.broadcast_3;
    broadcast_4=pdfData.data.broadcast_4;
    broadcast_5=pdfData.data.broadcast_5;
    broadcast_6=pdfData.data.broadcast_6;
    
    responsive_1=pdfData.data.responsive_1;
    responsive_2=pdfData.data.responsive_2;
    responsive_3=pdfData.data.responsive_3;
    responsive_4=pdfData.data.responsive_4;
    responsive_5=pdfData.data.responsive_5;
    responsive_6=pdfData.data.responsive_6;
    responsive_7=pdfData.data.responsive_7;
    responsive_8=pdfData.data.responsive_8;
    responsive_9=pdfData.data.responsive_9;
    responsive_10=pdfData.data.responsive_10;
    
    relationship_1=pdfData.data.relationship_1;
    relationship_2=pdfData.data.relationship_2;
    relationship_3=pdfData.data.relationship_3;
    relationship_4=pdfData.data.relationship_4;
    relationship_5=pdfData.data.relationship_5;
    relationship_6=pdfData.data.relationship_6;
    relationship_7=pdfData.data.relationship_7;
    relationship_8=pdfData.data.relationship_8;
    relationship_9=pdfData.data.relationship_9;
    relationship_10=pdfData.data.relationship_10;
    relationship_11=pdfData.data.relationship_11;
    relationship_12=pdfData.data.relationship_12;
    
    lifecycle_1=pdfData.data.lifecycle_1;
    lifecycle_2=pdfData.data.lifecycle_2;
    lifecycle_2=pdfData.data.lifecycle_2;
    lifecycle_3=pdfData.data.lifecycle_3;
    lifecycle_4=pdfData.data.lifecycle_4;
    lifecycle_5=pdfData.data.lifecycle_5;
    lifecycle_5=pdfData.data.lifecycle_5;
    lifecycle_6=pdfData.data.lifecycle_6;
    lifecycle_7=pdfData.data.lifecycle_7;
    lifecycle_8=pdfData.data.lifecycle_8;
    

      
    });
jqxhr1.done(function() { 
      var jqxhr2 = $.getJSON( "/pdf.json", function(data) { });
     //console.log(jqxhr2);
    jqxhr2.fail(function(data) {
        console.log( "error" );
    });
    jqxhr2.done(function(data) {
        data=data;
        getSummary(data);
        getBroadcast(data);
        getResponsive(data);
        getRelationship(data);
        getLifecycle(data);
        getConclusion(data);
        spiders();
        
      
    });  
});

//vars not from DB
var breakpoint=51;


function getSummary(data){
    data=data;
    var x=TotalScore;
    document.getElementById('company_name').innerHTML=companyName;
    switch (true) {
        case (x < 25):
            document.getElementById('conclusion_text').innerHTML=data.conclusion.low;
            break;
        case (x < 50):
            document.getElementById('conclusion_text').innerHTML=data.conclusion.medlow;
            break;
        case (x < 75):
            document.getElementById('conclusion_text').innerHTML=data.conclusion.medhigh;
            break;
        default:
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
        case (x < 75):
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
                if(i==4){console.log("Q4: firing reccomend"  )}
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
             if(ncount==data.broadcast.recommendations.length){
                 $('#broadcast-congrads-1').append('<div class="reccomendation congradulations icon icon-congrats">'+
                                 '<div class="recommendation-text">'+
                                 data.broadcast.noexcellence+'</div></div>' );
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
                $('#broadcast-col-content').append('<p>You did it! Your company has mastered Broadcast Marketing.</p>');
                document.getElementById('broadcast-rec').innerHTML="Congratulations, based on your responses to the Broadcast Marketing Maturity section, your company has mastered this level of marketing maturity.";
                document.getElementById('broadcast-rec2').innerHTML="Based on your answers to the Broadcast Marketing section we have curated a recommendation to help your organization continue to advance in the foundational and tactical areas needed to master Broadcast Marketing Maturity.";
                 $('#broadcast-recs-1').append('<div class="reccomendation congradulations icon icon-congrats">'+
                                 '<div class="recommendation-text">'+
                                 data.broadcast.perfect+'</div></div>' );
            }
        }

    } 
    var h= BroadcastScore * 142 /100;
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
        case (x < 75):
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
            if((ncount >= 6) &&  (ncount < 9)){
                appendTo='#responsive-recs-3';
            }
             if((ncount >=9) &&  (ncount < 13)){
                swapBackgrounds($('#responsive-page-3'));
                appendTo='#responsive-recs-4';
            }
            $(appendTo).append('<div class="reccomendation icon '+data.responsive.recommendations[i-1].icon+'">'+
                                 '<div class="recommendation-text">'+
                                 '<div class="recommendation_title">'+data.responsive.recommendations[i-1].title+'</div>'+
                                 '<p>'+data.responsive.recommendations[i-1].no+'</p> </div></div>' );
          
            ncount++;
            if(ncount==data.responsive.recommendations.length){
                 $('#responsive-congrads-1').append('<div class="reccomendation congradulations icon icon-congrats">'+
                                 '<div class="recommendation-text">'+
                                 data.responsive.noexcellence+'</div></div>' );
            }  
        }
        else{
             if(ycount<3){
                appendTo='#responsive-congrads-1';
            }
            else if((ycount >= 3) &&  (ycount < 6)){
                swapBackgrounds($('#responsive-page-4'));
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
                $('#responsive-col-content').append('<p>Keep up the momentum. Your company has top scores in Responsive Marketing.</p>');
                 document.getElementById('responsive-rec').innerHTML="Congratulations, based on your responses to the Responsive Marketing Maturity section, your company joins an elite group of organizations that Oracle recognizes as experts in Responsive Marketing.";
                 document.getElementById('responsive-rec2').innerHTML="Based on your answers to the Responsive Marketing section we have curated a recommendation to help your organization master the  foundational and tactical areas needed to master Responsive Marketing Maturity.";
                 $('#responsive-recs-1').append('<div class="reccomendation congradulations icon icon-congrats">'+
                                 '<div class="recommendation-text">'+
                                 data.responsive.perfect+'</div></div>' );
            }
        }
     
    } 
        if(ncount <= 6){
               $('#responsive-page-3').hide();
        }
        if(ycount <= 6){
               $('#responsive-page-5').hide();
        }
    var h= ResponsiveScore * 142 /100;
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
        case (x < 75):
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
                 $('#relationship-congrads-1').append('<div class="reccomendation congradulations icon icon-congrats">'+
                                 '<div class="recommendation-text">'+
                                 data.relationship.noexcellence+'</div></div>' );
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
                 $('#relationship-col-content').append('<p>Now we’re talking. While other companies are still mastering the basics, you’ve already mastered Relationship Marketing.</p>');
                 document.getElementById('relationship-rec').innerHTML="Congratulations, based on your responses to the Relationship Marketing Maturity section, your company is setting the pace that other organizations now follow when it comes to Relationship Marketing.";
               document.getElementById('relationship-rec2').innerHTML="Based on your answers to the Relationship Marketing section we have curated a recommendation to help your organization continue to advance in the  foundational and tactical areas needed to master Relationship Marketing Maturity.";
               $('#relationship-recs-1').append('<div class="reccomendation congradulations icon icon-congrats">'+
                                 '<div class="recommendation-text">'+
                                 data.relationship.perfect+'</div></div>' );
            }
        }
  
    } 
       if(ncount <= 6){
               $('#relationship-page-3').hide();
        }
        if(ycount <= 6){
               $('#relationship-page-5').hide();
        }
    var h= RelationshipScore * 142 /100;
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
        case (x < 75):
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
        console.log('answer '+ v + "value is " + window[v] )
        if( window[v]<breakpoint){
            $('#lifecycle-col-content').append('<div class="action-item"><span>'+data.lifecycle.recommendations[i-1].title+'</span></div>');
            if(ncount < 3){
                appendTo='#lifecycle-recs-1';
                swapBackgrounds($('#lifecycle-page-2'));
            }
            if((ncount >= 3) &&  (ncount < 6)){
                appendTo='#lifecycle-recs-2';
            }
            if((ncount >= 6) &&  (ncount < 10)){
             swapBackgrounds($('#lifecycle-page-3'));
                appendTo='#lifecycle-recs-3';
            }
            $(appendTo).append('<div class="reccomendation icon '+data.lifecycle.recommendations[i-1].icon+'">'+
                                 '<div class="recommendation-text">'+
                                 '<div class="recommendation_title">'+data.lifecycle.recommendations[i-1].title+'</div>'+
                                 '<p>'+data.lifecycle.recommendations[i-1].no+'</p> </div></div>' );
            ncount++;   
            if(ncount==data.lifecycle.recommendations.length){
                 $('#lifecycle-congrads-1').append('<div class="reccomendation congradulations icon icon-congrats">'+
                                 '<div class="recommendation-text">'+
                                 data.lifecycle.noexcellence+'</div></div>' );
            } 
            
        }
        else{
             if(ycount<3){
                appendTo='#lifecycle-congrads-1';   
            }
            else if((ycount >= 3) &&  (ycount < 6)){
                appendTo='#lifecycle-congrads-2';
                 swapBackgrounds($('#lifecycle-page-4'));
                 
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
                 $('#lifecycle-col-content').append('<p>You’re a leader and your company is well positioned to win. Congratulations on mastering Lifecycle Engagement. </p>');
                 document.getElementById('lifecycle-rec').innerHTML="Congratulations, based on your responses to the Lifecycle Engagement Maturity section, your company is a leader in Lifecycle Engagement, and is one of a few organizations that is well-positioned to define and disrupt new business models in your industry. ";
                 document.getElementById('lifecycle-rec2').innerHTML="Based on your answers to the Lifecycle Engagement section we have curated a recommendation to help your organization continue to advance in the foundational and tactical areas needed to master Lifecycle Engagement Maturity.";
                  $('#lifecycle-recs-1').append('<div class="reccomendation congradulations icon icon-congrats">'+
                                 '<div class="recommendation-text">'+
                                 data.lifecycle.perfect+'</div></div>' );
            }
        }
    }

       if(ycount < 7){
               $('#lifecycle-page-5').hide();
        }
        if(ncount < 7){
               $('#lifecycle-page-3').hide();
        }
    
    var h= LifecycleScore * 142 /100;
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
        case (x < 75):
            document.getElementById('summary_content').innerHTML=data.summary.medhigh;
            break;
        default:
            document.getElementById('summary_content').innerHTML=data.summary.high;
            break;
    } 
    var h= TotalScore * 142 /100 
    document.getElementById("score-holder").style.height=h + 'px';
    document.getElementById("cloud-bg").style.height=h + 'px';
    document.getElementById("total-cloud-score").innerHTML=TotalScore;
}
function swapBackgrounds(el){
 el.css('background-image','url(/assets/strip_7.png)');
     el.css('background-size','792px 16px');
}


function spiders(){
    var ctx = document.getElementById('spiderChart').getContext('2d');
var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'radar',
// The data for our dataset
data: {
labels: ['Broadcast', 'Responsive', 'Relationship', ['Lifecycle', 'Engagement']],
datasets: [{
  label: 'Component Maturity Score',
  borderColor: 'rgb(0,0, 0)',
  data: [BroadcastScore, ResponsiveScore, RelationshipScore, LifecycleScore]
}]
},
// Configuration options go here
options: {
scales: {
  yAxes: [{
      scaleLabel: {
          display: false,
      },
      gridLines: {
          display: 'false',
          color: 'transparent',
          zeroLineColor: '#E5DBBE',
      },
      ticks: {
          display: false,
          color: 'transparent'
      },
  }]
},
scale: {
  ticks: {
      min: 0,
      max: 100,
      stepSize: 25,
      display: false,
      fontColor: "#E5DBBE",
  },
  gridLines: {
      lineWidth: 2,
      color: ['#C74634', '#FACD62', '#94AFAF', '#41817E']
  },
  pointLabels: {
      display: true,
      fontColor: '#221F1F',
      fontFamily: 'OracleSans-Bold',
      fontSize: '8',
      fontStyle: 'bold'
  }
},
legend: {
  display: false
},
layout: {
  padding: {
      left: 50,
      right: 50,
      top: 50,
      bottom: 50
  }
}
}
});
}  