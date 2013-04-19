$(document).ready(function() {
 
  // Good Stuff
  var $lastLink=$('.nav-pills>li:last-child>a');
  
  $lastLink.fadeOut('slow').fadeIn('fast');
  
  $lastLink.html('<i class="icon-star"></i>Last Link');
  
 	$('h1').click(function() {
  	$(this).hide();
	});





});