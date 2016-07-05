$(document).ready(function(){
	$('.buttonBookmark').click(function(e) {
	  loadTemplate(e);
	})

	$('.closeMe').click(function(e) {
	  e.preventDefault();
	  $('.bookmarklet').remove();
	})

	function createiFrame(e) {
	  e.preventDefault();
	  var element = document.createElement('iframe');
	  $('body').append(element);
	  $('iframe').attr('src', 'http://www.shortdiv.com');
	}

	function loadTemplate(e){
	  e.preventDefault();
	  var element = document.createElement('div');
	  $('body').append(element);
	  $(element).load('/template.html', function(){closeIframe(e)});
	}

	function closeIframe(e) {
	  $('.closeMe').on('click', function(e) {
		  e.preventDefault();
		  $('.bookmarklet').remove();
		});
	};
});
