function scrollTo(id) {
  return function(event) {
    event.preventDefault();
    $.smoothScroll({
      scrollTarget: id
    });
  }
}