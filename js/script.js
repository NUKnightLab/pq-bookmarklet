$(document).ready(function(){
	createiFrame(e);

	$('.closeMe').click(function(e) {
	  e.preventDefault();
	  $('.bookmarklet').remove();
	})

	function createiFrame(e) {
	  e.preventDefault();
	  var element = document.createElement('iframe');
	  element.src = 'http://knightlab.northwestern.edu/projects/'
	  document.body.appendChild(element);
	  closeIframe();
	}

	function loadTemplate(e){
	  e.preventDefault();
	  var element = document.createElement('div');
	  $('body').append(element);
	  $(element).load('/template.html', function(){closeIframe(e)});
	}

	function closeIframe() {
	  $('.closeMe').on('click', function(e) {
		  e.preventDefault();
		  $('.bookmarklet').remove();
		});
	};
})();
