function addOnFocusEventListerner(id, listener) {
  $(id).focusin(listener);
}


function resetFormStyle(event) {
  $(event.target).removeClass('input_error');
}


function addResetRequiredFormInputsStyles(requiredIds) {
  for(var i = 0; i < requiredIds.length; ++i) {
    addOnFocusEventListerner(requiredIds[i], resetFormStyle);
  }
}


function validateForm(requiredIds) {
  return function(event) {
    var sendData = true;
  
    for(var i = 0; i < requiredIds.length; ++i) {
      let input = $(requiredIds[i]);
      if (input && !input.val()) {
        input.addClass('input_error');
        sendData = false;
      }
    }

    if (!sendData) {
      event.preventDefault();
    }
    return sendData;
  }
}


function setClosePopupWindow(selectionQuery) {
  $(window).click(function(event){
    let currentPopup = $(selectionQuery);
    if (currentPopup && currentPopup[0]) {
      if (event.target.id == currentPopup[0].id) {
        hidePopup(selectionQuery)();
      }
    }
  });
  $('.close_button').click(hidePopup(selectionQuery));
}