
const mobileSide = {
  //사이드 메뉴 열기
  open : function() {
    /*
    1. aside에 on클래스 추가
    2. layer_dim의 dn클래스를 제거
    */
    if(!$('aside').hasClass('on')) { //on클래스가 없으면 추가
    $('aside').addClass('on');
  }
  $('#layer_dim').removeClass('dn');
},
  //사이드 메뉴 닫기
  close : function() {
    /*
    1. aside에 on클래스 제거
    2. layer_dim에 dn클래스를 추가
    */
    $('aside').removeClass('on');
    if(!$('#layer_dim').hasClass('dn')) {
      $('#layer_dim').addClass('dn');
    }
  }
};


$(function() {
  /* 메뉴 열기 */
  $('.side_open').click(function() {
    mobileSide.open();
  });
  /* 메뉴 닫기 */
  $('.side_close, #layer_dim').click(function() {
    mobileSide.close();
  });
});
