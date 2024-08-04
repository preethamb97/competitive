// https://leetcode.com/problems/simplify-path/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const stack = [];

    const splits = path.split('/');

    for (let i = 0; i < splits.length; i++) {
        if (splits[i] === '' || splits[i] === '.') {
            continue;
        } else if (splits[i] === '..') {
            if (stack.length)
                stack.pop();
        } else {
            stack.push(splits[i]);
        }
    }
    return '/' + stack.join('/');
};