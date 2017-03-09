function showdiv(pid){
  
  var parent=jQuery(pid);
    //get parent's width and height
  pw=parent.width()-5;
  ph=parent.height()-5;
  
  parent.css("visibility", "visible");

  var topdiv=jQuery(pid+" div:nth-child(1)");

  topdiv.css("visibility", "visible");
  topdiv.delay("fast").animate({width: pw+2+"px"});
  
  var leftdiv=jQuery(pid+" div:nth-child(2)");

  leftdiv.css("visibility", "visible");
  leftdiv.delay("fast").animate({height: ph-2+"px"});

  var contentdiv=jQuery(pid+" div:nth-child(3)");
  contentdiv.css("width", pw-2+"px");

  var bottomdiv=jQuery(pid+" div:nth-child(5)");
  bottomdiv.css("visibility", "visible");
  bottomdiv.delay(500).animate({width: pw+2+"px"});

  var rightdiv=jQuery(pid+" div:nth-child(4)");
  rightdiv.css("visibility", "visible");
  rightdiv.delay(800).animate({height: ph-2+"px"}, "slow", slide_title);

};

function slide_title(){
  var p2=jQuery("p#header_p2");
  p2.css("visibility","visible");
  p2.animate({fontSize: '35px'}, "slow");

  var p1=jQuery("p#header_p1");
  p1.animate({
    top: "30px",
    opacity: "0.9"
  });


  var p3=jQuery("p#conp_1");
  var p4=jQuery("p#conp_2");
  var p5=jQuery("p#conp_3");

  p3.css("visibility","visible").delay(100).animate({
    top: "0px",
    opacity: "0.9"
  }, "fast");

  p4.css("visibility","visible").delay(100).animate({
    top: "0px",
    opacity: "0.9"
  }, "fast");

  p5.css("visibility","visible").delay(100).animate({
      top: "0px",
      opacity: "0.9"
    }, "fast");
};

window.onload=function(){
  showdiv("#parent1");
  showdiv("#parent2");
  showdiv("#parent3");
};

jQuery( document ).ready(function() {
  
    jQuery("#parent1").mouseenter(function(){

      jQuery("#firstb").click();

      jQuery("#condiv1").css("background", "#559c41");
      var content1_1="\
      <p id='conp1_pp1' class='conp_p1'>The AGITLE TEAM COOL</p>\
      <p id='conp1_pp2' class='conp_p2'>Available for all IBMor's TOODAY</p>\
      <button id='conp1_b' class='header_button'>Learn More</button>\
      ";
      jQuery("#condiv1").html(content1_1);

    });
    
    jQuery("#parent1").mouseleave(function(){
      jQuery("#condiv1").css("background", "transparent");
      var content1_2="<p id='conp_1'  class='conp'>AGILE TEAM TOOL</p>";
      jQuery("#condiv1").html(content1_2);

      var p3=jQuery("p#conp_1");
      p3.css("visibility","visible").delay(100).animate({
        top: "0px",
        opacity: "0.9"
      }, "fast");

    });



    jQuery("#parent2").mouseenter(function(){
      jQuery("#secondb").click();
      jQuery("#condiv2").css("background", "#846e2c");
      var content2_1="\
      <p class='conp_p1'>LEADERSHIP & STRATEGY</p>\
      <p class='conp_p2'>Take the course to learn more<br>about landing agile teams</p>\
      <button id='conp2_b' class='header_button'>Begin</button>\
      ";
      jQuery("#condiv2").html(content2_1);

    });
    
    jQuery("#parent2").mouseleave(function(){
      jQuery("#condiv2").css("background", "transparent");
      var content2_2="<p class='conp' id='conp_2'>LEADERSHIP & STRATEGY</p>";
      jQuery("#condiv2").html(content2_2);

      var p4=jQuery("p#conp_2");
      p4.css("visibility","visible").delay(100).animate({
        top: "0px",
        opacity: "0.9"
      }, "fast");
      
    });

     jQuery("#parent3").mouseenter(function(){
      jQuery("#thirdb").click();
      jQuery("#condiv3").css("background", "#846e2c");
    });
    
    jQuery("#parent3").mouseleave(function(){ 
      jQuery("#condiv3").css("background", "transparent");
    });
   

});