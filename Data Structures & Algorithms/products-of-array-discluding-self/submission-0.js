class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        //     const result = [];

        //     for(let i = 0; i < nums.length; i++) {
        //         let product = 1;

        //         for(let j = 0; j < nums.length; j++) {
        //             if (i !== j) {
        //                 product *= nums[j];
        //             }
        //         }

        //         result.push(product);
        //     }

        //     return result;

        const n = nums.length;

        const prefix = new Array(n).fill(1);
        const suffix = new Array(n).fill(1);

        // Build prefix products
        for (let i = 1; i < n; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }

        // Build suffix products
        for (let i = n - 2; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i + 1];
        }

        // Build final answer
        const result = [];

        for (let i = 0; i < n; i++) {
            result.push(prefix[i] * suffix[i]);
        }

        return result;
    }
}
