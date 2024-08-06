// https://leetcode.com/problems/evaluate-reverse-polish-notation/?envType=study-plan-v2&envId=top-interview-150 evaluate-reverse-polish-notation

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const arithmetic = (op, a, b) => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b); // truncate towards 0, for positive FLOOR, for negetive CIEL
    }
  };
  const stack = [];
  tokens.forEach((token) => {
    if (["+", "-", "*", "/"].includes(token)) {
      let res = stack.pop();
      const popped = stack.pop();
      res = arithmetic(token, Number(popped), Number(res));
      stack.push(res);
    } else {
      stack.push(token);
    }
  });
  return stack;
};
