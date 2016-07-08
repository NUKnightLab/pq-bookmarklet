function iFrame() {
  var iframe, closeButton, backDrop

  function init() {
    bookMarklet = document.createElement('div');
    bookMarklet.className = 'bookMarklet';
    bookMarklet.innerHTML = "<button class='closeButton' onclick='iFrame().closeiFrame()'></button><iframe src='/template.html'></iframe><div class='backdrop'></div>"

    document.body.appendChild(bookMarklet);
  }

  function closeiFrame() {
    document.body.removeChild(bookMarklet)
  }

  return {
    init: init,
    closeiFrame: closeiFrame
  }
}
