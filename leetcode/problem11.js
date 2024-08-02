// https://leetcode.com/problems/valid-parentheses/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const hashMap = {
        '(': ')',
        ')': '(',
        '{': '}',
        '}': '{',
        '[': ']',
        ']': '['
    }
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] == ')' || s[i] == '}' || s[i] == ']') {
            const last = stack.pop();
            if (last != hashMap[s[i]]) {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }

    return stack.length == 0;
};