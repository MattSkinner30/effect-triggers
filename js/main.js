var $body = $('body');
var $btn1 = $('.btn-show-hide');
var $btn2 = $('.btn-move');
var $btn3 = $('.btn-collapse-expand');
var $btn4 = $('.btn-btn-bounce');
var $btn5 = $('.btn-append');
var $list = $('.list');
var $bounce = $('.btn-bounce');

$body.on('click', '.btn-show-hide', function () {
  $('.box').toggleClass('show');
});

$body.on('click', '.btn-move', function () {
  $('.diamond').toggleClass('move');
});

$body.on('click', '.btn-collapse-expand', function () {
  $('.panel').toggleClass('collapse');
});

$body.on('click', '.btn-bounce', function () {
  $('.circle').addClass('bounce');
});

$('.circle').on('animationend', function () {
  $(this).removeClass('bounce');
});

$body.on('click', '.btn-append', function () {
  $('.list').append('<li>New List Item</li>');
});
