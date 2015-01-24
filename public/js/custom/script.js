$(document).ready(function() {
  $('.submenu').hide();
  $('.menu-item').click(function() {
    $('.submenu.active').removeClass('active').hide();
    $(this).find('.submenu').addClass('active');
    $(this).find('.submenu').show();
  });
});