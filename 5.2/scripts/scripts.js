// books section
function showMoreBooks(event) {
  event.preventDefault();
  var buttonContainer = document.getElementById('books_hyperlink_container');
  if (buttonContainer) {
    buttonContainer.style.display = 'none';
  }
  
  var hiddenBooks = document.getElementsByClassName('book_container hidden');
  if (hiddenBooks) {
    for(var i = 0; i < hiddenBooks.length; ++i) {
      var book = hiddenBooks[i];
      book.style.display = 'inherit';
      book.classList.add('fade_in_animation');
    }
  }
}

// feedback form section
function validateForm(event) {
  var sendData = true;
  let requiredIds = ['username', 'email', 'message'];
  for(var i = 0; i < requiredIds.length; ++i) {
    let input= document.getElementById(requiredIds[i]);
    if (input && !input.value) {
      input.classList.add('required_input_error');
      sendData = false;
    }
  }
  if (!sendData) {
    event.preventDefault();
  }
}

function resetStyle(event) {
  event.currentTarget.classList.remove('required_input_error');
}

// utils
function addOnFocusEventListerner(id, listener) {
  let button = document.getElementById(id);
  if (button) {
    button.onfocus = listener;
  }
}

function addOnClickEventListener(id, listener) {
  let button = document.getElementById(id);
  if (button) {
    button.onclick = listener;
  }
}

// on load handler
window.onload = function() {
  // init eventlisteners
  addOnClickEventListener('books_hyperlink', showMoreBooks);
  addOnClickEventListener('feedback_form_submith', validateForm);
  
  addOnFocusEventListerner('username', resetStyle);
  addOnFocusEventListerner('email', resetStyle);
  addOnFocusEventListerner('message', resetStyle);
}