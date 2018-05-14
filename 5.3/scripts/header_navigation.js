function isMobile() {
  return $(window).width() <= 1250;
}


function scrollTo(id) {
  return function(event) {
    event.preventDefault();
    $('#header_navigation_mobile_button_container').removeClass('change');
    if (isMobile()) {
      $('#header_navigation_items').hide();
    }
    $.smoothScroll({
      scrollTarget: id
    });
  }
}


function mobileMenu(event) {
  $('#header_navigation_mobile_button_container').toggleClass('change');
  $('#header_navigation_items').slideToggle(500);
}


$(window).resize(function(event){
  if (!isMobile()) {
    $('#header_navigation_items').show();
  }
})