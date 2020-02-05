$(function(){
//テキストカウンター
$('.js-counter-text').keyup(function(){
    $('.counter').text($(this).val().length);
});
//ハンバーガーメニュー
$('.js-toggle-sp-menu').on('click', function() {
    $(this).toggleClass('active');
    $('.js-toggle-sp-menu-target').toggleClass('active');
});
});
