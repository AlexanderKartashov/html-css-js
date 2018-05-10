function trimBlanks(input) {
  var trimmed = input.trim();
  var output = '';
  var isLastSymbolWhitespce = false;
  
  for(var i = 0; i < input.length; ++i) {
    var symbol = trimmed.slice(i, i + 1);
    if (symbol == ' ') {
      if (isLastSymbolWhitespce) {
        continue;
      }
      else {
        isLastSymbolWhitespce = true;
      }
    }
    else {
      isLastSymbolWhitespce = false;
    }
    
    output = output.concat(symbol);
  }
  
  return output;
}

function getLastSymbol(input) {
  if (input.length == 0)
  {
    return null;
  }
  
  return input.slice(input.length - 1, input.length);
}

function cutLastSymbol(input){
  if (input.length == 0)
  {
    return null;
  }
  
  return input.slice(0, input.length - 1);
}

function reverseString(input) {
  var output = '';
  
  for(var i = input.length - 1; i >= 0; --i) {
    output = output.concat(input.slice(i, i + 1));
  }
  
  return output;
}