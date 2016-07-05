$('.buttonBookmark').click(function(e) {
  createiFrame(e);
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
