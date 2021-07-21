$(function() {
  $('.menu_open').click(function() {
    const nav = $('nav')
    const menuOpen = $('.menu_open')
    if (nav.hasClass('on')) {
      nav.removeClass('on');
      menuOpen.text('메뉴열기');
    } else {
      nav.addClass('on');
      menuOpen.text('메뉴닫기');
    }
  });
});
