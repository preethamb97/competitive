// longest-substring-without-repeating-characters https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let trackerSet = new Set();
    let l = 0;
    let r = 0;
    let maxCount = 0;
    while (r < s.length) {
        if (trackerSet.has(s[r])) {
            trackerSet.delete(s[l]);
            l++;
        } else {
            trackerSet.add(s[r]);
            r++;
            maxCount = Math.max(maxCount, trackerSet.size);
        }
    }
    return maxCount;
};