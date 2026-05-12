
class Solution {
    public int[] twoSum(int[] nums, int target) {
        //initializing a hashmap
        Map<Integer, Integer> num_map = new HashMap<>();
        //iterating through the array left to right
        for (int i = 0; i < nums.length; i++) {
            //if hasmap contains the complement, than return the indexes
            //eg = 7-3 = 5 num_map put{5:0} 7-4 = 3
            //3 is in the hashmap so it return ans: {0,1}
            if (num_map.containsKey(target - nums[i])) {
                return new int[]{num_map.get(target - nums[i]), i};
            }
            //if complement is not found it returns with index
            num_map.put(nums[i], i);
        }
        //if ansser is not found
        return new int[]{-1, -1}; 
    }
}