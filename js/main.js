var $body = $ ('body');

$body.on('click', '.btn-show-hide', function () {
  $('.box').toggleClass('show');
});

$body.on('click', '.btn-move', function () {
  $('.diamond').toggleClass('move');
});