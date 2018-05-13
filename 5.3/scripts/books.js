function showMoreBooks(event) {
  event.preventDefault();
  
  $('#books_hyperlink_container').hide();
  $('.book_container.hidden').css('display', 'block').animate({opacity: 1}, "slow");
  $.smoothScroll({
    scrollTarget: $('.book_container.hidden')
  });
}


function addNewBook(requiredIds) {
  return function(event){
    event.preventDefault();
    if (validateForm(requiredIds)(event)) {
      let coverValue = $('#new_book_cover_input').val();
      let titleValue = $('#new_book_title_input').val();
      let descrValue = $('#new_book_description_input').val();
      $('#new_book_popup_window').hide();
      
      var img = $('<img/>');
      img.addClass('book_cover').attr('src', coverValue).attr('alt', titleValue);
      
      var title = $('<h4></h4>');
      title.addClass('book_title').text(titleValue);
      
      var descriptionContainer = $('<div></div>');
      descriptionContainer.addClass('book_description');
      
      var description = $('<p></p>');
      description.text(descrValue);
      descriptionContainer.append(description);

      var container = $('<div></div>');
      container.addClass('book_container').append(img).append(title).append(descriptionContainer);

      $('#books_container').append(container);
      $.smoothScroll({
        scrollTarget: container
      });
    }
  }
}