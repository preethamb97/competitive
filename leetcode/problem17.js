// https://leetcode.com/problems/generate-parentheses/description/
function parenthesis(n) {
  const result = [];

  function generate(current, open, close) {
    if (open == n && close == n) {
      result.push(current);
      return;
    }
    if (open < n) {
      generate(current + "(", open + 1, close);
    }

    if (close < open) {
      generate(current + ")", open, close + 1);
    }
  }
  generate("", 0, 0);
  return result;
}

console.log(parenthesis(3));
