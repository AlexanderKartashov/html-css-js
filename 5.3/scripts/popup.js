function showPopup(id) {
  return function(event){
    event.preventDefault();
    $(id).show();
  }
}


function hidePopup(id) {
  return function(event){
    $(id).hide();
  }
}