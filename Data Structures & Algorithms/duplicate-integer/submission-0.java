
class Solution {
    public boolean hasDuplicate(int[] nums) {
        //intialising a HashSet unique
        HashSet<Integer> unique = new HashSet<>();
        // for loop runs from 0 to array length
        for( int i = 0; i < nums.length;i++){
            //checks if element is present in unique array
            if(unique.contains(nums[i])){
                //returns true if the duplicate of the element exists
                return true;
            }
            //adds all the unique element in the array nums
            unique.add(nums[i]);
        }
        //returns false if the isn't any duplicates 
        return false;
    }
}
