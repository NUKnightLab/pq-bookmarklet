$(document).ready(function(){

    $('.buttonBookmark').click(function(e) {
    createiFrame(e);
    closeIframe();
    $('.closeButton').css({
    	'display': 'block'
    })
    });

	function createiFrame(e) {
	  e.preventDefault();
	  var element = document.createElement('iframe');
	  element.src = '/template.html'
	  document.body.appendChild(element);
	  styleiFrame(element);
	}

	function styleiFrame(el) {
		el.style.width = '100%';
		el.style.height = '100%';
		el.style.border = 'none';
	}

	function closeIframe() {
	  $('.closeButton').on('click', function(e) {
		  e.preventDefault();
		  $('iframe').remove();
		  $('.closeButton').css({
    	  'display': 'none'
          })
		});
	};
});
