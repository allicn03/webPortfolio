// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)
	[0],p=/^http:/.test(d.location)?'http':'https';if
	(!d.getElementById(id)){js=d.createElement(s);
		js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js,fjs);}}
		(document, 'script', 'twitter-wjs');


$(document).ready(function(){

  	//smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
    });
  $('#submit').on('click', function() {
  	var comment = $('#message-box').val();
  	console.log(comment);
  	$('#visible-comment').html(comment);
  	if(comment === "") {
  		$("#message-box").css("border", "2px solid red");
  	} else {
  		$('#message-box').hide();
  	};
  	$('#submit').hide();
  	$('#received').append("We have received your message!");
  	return false;
  });
  $('#message-box').on('keyup', function() {
  	var charCount = $('#message-box').val().length;
  	$('#char-count').html(charCount);
  	if(charCount > 50) {
  		$('#char-count').css("color", "red");
		} else {
		};

  });

});
	
   

