//Default active on home
$('#link').addClass("active");


/*
Smooth scrolling
*/
$("#link").click(function() {
     $('html, body').animate({
         scrollTop:        $("#top").offset().top-65
     }, 1000);
  return false;
 });

$("#link1").click(function() {
     $('html, body').animate({
         scrollTop:        $("#services").offset().top-100
     }, 1000);
  return false;
 });

$("#link2").click(function() {
     $('html, body').animate({
         scrollTop:        $("#about").offset().top-100
     }, 1000);
  return false;
 });

$("#link3").click(function() {
  $(this).addClass("active");
     $('html, body').animate({
         scrollTop:        $("#testimonials").offset().top-100
     }, 1000);
  return false;
 });
$("#link4").click(function() {
  $(this).addClass("active");
     $('html, body').animate({
         scrollTop:        $("#contact").offset().top-100
     }, 1000);
  return false;
 });
$("#link5").click(function() {
  $(this).addClass("active");
     $('html, body').animate({
         scrollTop:        $("#register").offset().top-100
     }, 1000);
  return false;
 });

$("#link").click(function() {
     $('html, body').animate({
         scrollTop:        $("top").offset().top-65
     }, 1000);
  return false;
 });







/*$('#2').waypoint(function(event, direction) {

  $(".nav-container ul li").children().removeClass("active");
  $("#s2").addClass("active");
  
  if (direction === 'down') {
    offset = 90;
  } 
  else {
    offset = 20;
  }
});*/


/*
Using jquery waypoints to change active on scroll
*/
$('#top').waypoint(function() {

  $(".navbar-right").children().removeClass("active");
  $("#link").addClass("active");
  
}, { offset: 101 });


$('#services').waypoint(function() {
  $(".navbar-right").children().removeClass("active");
  $("#link1").addClass("active");
}, { offset: 101 });

$('#about').waypoint(function() {
  $(".navbar-right").children().removeClass("active");
  $("#link2").addClass("active");
}, { offset: 101 });

$('#testimonials').waypoint(function() {
  $(".navbar-right").children().removeClass("active");
  $("#link3").addClass("active");
}, { offset: 0 });





// $('#2').waypoint(function() {
//   $(".to-top").addClass("visible");
// }, { offset: 100 });

// $('#1').waypoint(function(event, direction) {
//   $(".to-top").removeClass("visible");
// }, { offset: 30 });