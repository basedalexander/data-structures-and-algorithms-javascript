var Stack = require('./Stack');

var stack = new Stack();


function checkParentheses(expr) {
  var i,
    len = expr.length,
    elem;

  for (i = 0; i < len; i++) {
    elem = expr[i];

    switch (elem) {
    case '(':
      stack.push(1);
      break;

    case ')':
      if (stack.length() == 0) return 0;
      stack.pop();
      break;

    default:
      break;
    }
  }


  // If the stack isn't empty, then return the end index of expression.
  if (stack.length()) {
    return expr.length - 1;
  } else {
    return -5;
  }
}

console.log(checkParentheses("1 + 2/10 * ( 2 - 3"));
console.log(checkParentheses("1 + 3/135 ) - 25"));
