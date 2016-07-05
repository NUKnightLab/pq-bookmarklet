$(document).ready(function(){
	createiFrame(e);

	$('.closeMe').click(function(e) {
	  e.preventDefault();
	  $('.bookmarklet').remove();
	})

	function createiFrame(e) {
	  e.preventDefault();
	  var element = document.createElement('iframe');
	  $('body').append(element);
	  $('iframe').load('https://http://www.nytimes.com', function(){closeIframe(e)});
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
