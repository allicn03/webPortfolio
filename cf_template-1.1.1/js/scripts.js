// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)
	[0],p=/^http:/.test(d.location)?'http':'https';if
	(!d.getElementById(id)){js=d.createElement(s);
		js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js,fjs);}}
		(document, 'script', 'twitter-wjs');


$(document).ready(function() {
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

  //work section
  for(var i = 0; i < works.length; ++i) {
  	var iPlus = i + 1;
  	$("#work-example").append("\
  		<div class='col-md-3 col-xs-6'>\
  			<a href='https://www.google.com/' class='work-img'>\
  				<img class='img-responsive' src='" + works[i].pic + "'>\
  				<span class='info'><p class='proj-title'>Title:</p> [IN PROGRESS] </span>\
  			</a>\
  		</div>\
  	");
  	$(".work-img").mouseenter(function() {
  		$(".info", this).show();
  	}).mouseleave(function() {
  		$(".info", this).hide();
  	});
  	var images = $("#work img");
  	if (i%2 === 0) {
  		$(images[i]).css("border", "2px solid DodgerBlue");
  	} else {
  		$(images[i]).css("border", "2px solid salmon");
  	};
  };

});
	
   

