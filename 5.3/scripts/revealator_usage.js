function initRevealatorEffectsForClasses(classes) {
  for (var i = 0; i < classes.length; ++i) {
    $(classes[i]).addClass('revealator-slideup');
  }
}


function initRevealatorEffects() {
  let classes = ['.list_header', '.list_item', '.quote_text', '.quote_author',
    '.name', '.article_title', '.article_text', '.feedback_form_hyperlink',
    '.photo', '.book_title', '.book_cover', '.book_description', '.boost_list_title',
    '.books_hyperlink'];
  initRevealatorEffectsForClasses(classes);
}