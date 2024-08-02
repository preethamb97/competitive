// https://leetcode.com/problems/group-anagrams/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();

    strs.forEach(str => {
        const arr = Array(26).fill(0);

        for(let i = 0; i < str.length; i++) {
            arr[str[i].charCodeAt() - 97]++;
        }

        const combinedKey = arr.join("#");

        if (!map.has(combinedKey)) {
            map.set(combinedKey, []);
        }

        map.get(combinedKey).push(str);
    });

    return Array.from(map.values());
};