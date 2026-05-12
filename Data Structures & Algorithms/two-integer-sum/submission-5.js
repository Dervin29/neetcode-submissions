class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //comparing pairs and checking if the sum = target
        // time complexity: O(n^2)
        // for (let i = 0; i < nums.length; i++) {
        //     for (let j = i; j < nums.length; j++) {
        //         if (nums[i] + nums[j] == target) {
        //             return [i, j];
        //         }
        //     }
        // }

        //store the number -> index
        const map = {};

        for (let i = 0; i < nums.length; i++) {
            //number we need
            let complement = target - nums[i];

            // if complement exists return the indexes
            if (map[complement] !== undefined) {
                return [map[complement], i];
            }
            //else store the number and its index
            map[nums[i]] = i;
        }
    }
}
