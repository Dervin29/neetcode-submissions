class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};

        for (let num of nums) {
            freq[num] = (freq[num] || 0) + 1;
        }

        const entries = Object.entries(freq);

        entries.sort((a, b) => b[1] - a[1]);

        const result = [];

        for (let i = 0; i < k; i++) {
            result.push(Number(entries[i][0]));
        }

        return result;
    }
}
