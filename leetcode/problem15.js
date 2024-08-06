// https://leetcode.com/problems/fibonacci-number/ fibonacci-number

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let dp = [0, 1];
    if (n <= 1) return n;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
};