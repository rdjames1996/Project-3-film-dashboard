$(document).ready(function() {
    $("#p1").hover(function() {
      $(this).hide();
    });
    $("#p2").click(function() {
      $(this).hide();
    });
    $("#p3").dblclick(function(){
      $(this).hide();
    });
    $("#p4").mouseout(function(){
      $(this).hide();
    });
    $("#p5").click(function() {
      $(this).fadeOut("slow", function() {
      });
    });
    $("#p6").click(function() {
      $("#smile").fadeOut("slow", function() {
      });
    });
    $("#p7").click(function() {
      $("#smile").fadeIn("slow", function() {
      });
    });
    $("#p8").click(function() {
      $("#smile").slideUp("slow", function() {
      }); 
    });
    $("#p9").click(function() {
      $("#smile").slideDown("slow", function() {
      }); 
    });
    $("#p10").click(function() {
      $("#smile").toggle("slow", function() {
      });
    });
    $("#p11").click(function() {
      $("#smile").slideToggle("slow", function() {
      });
    });
    $("#p12").click(function() {
      $("#smile").fadeToggle("slow", function() {
      });
    });   
  });