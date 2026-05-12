class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();

        //if set has duplicates return true
        //else add the number to the set
        //if there are no duplicates return false
        for (let num of nums) {
            if (seen.has(num)) {
                return true;
            }

            seen.add(num);
        }

        return false;
    }
}
