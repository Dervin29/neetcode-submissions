class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // If lengths differ, impossible
        if (s.length !== t.length) {
            return false;
        }

        // Store character counts
        const count = {};

        // Count characters from s
        for (let char of s) {
            // If char exists increment
            // otherwise start at 1
            count[char] = (count[char] || 0) + 1;
        }

        // Remove counts using t
        for (let char of t) {
            // Character missing
            if (!count[char]) {
                return false;
            }

            // Decrease count
            count[char]--;
        }

        return true;
    }
}
