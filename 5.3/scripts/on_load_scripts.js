function onLoad(){
  initRevealatorEffects();
  
  // books
  $('#books_hyperlink').click(showMoreBooks);

  // common popup event handlers
  let selectionQuery = '#feedback_popup_window:visible, #new_book_popup_window:visible';
  setClosePopupWindow(selectionQuery);

  // feedback form popup
  $('#feedback_form_hyperlink').click(showPopup('#feedback_popup_window'));
  let requiredFeedbackInputs = ['#username', '#email', '#message'];
  $('#feedback_form_submith').click(validateForm(requiredFeedbackInputs));
  addResetRequiredFormInputsStyles(requiredFeedbackInputs);
  
  // navigation
  $('#about_link').click(scrollTo('#my_photo'));
  $('#quote_link').click(scrollTo('#quote'));
  $('#books_link').click(scrollTo('#books'));
  
  let requiredNewBookInputs = ['#new_book_cover_input', '#new_book_title_input', '#new_book_description_input'];
  $('#new_book_form_submith').click(addNewBook(requiredNewBookInputs));
  addResetRequiredFormInputsStyles(requiredNewBookInputs);
  $('#add_new_book_link').click(showPopup('#new_book_popup_window'));
  
  $('#header_navigation_mobile_button_container').click(mobileMenu);
}

///////////////////////////////////////////////////
$(window).on('load', onLoad);
