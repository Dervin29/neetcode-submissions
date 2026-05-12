class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        #intialise hashset
         hashset = set();

         #iterate each element in array
         for n in nums:
            #if duplicate is present return true
            if n in hashset:
                return True
            #else add the unqiue number in the hashset 
            hashset.add(n)
        #return false if no element is found
         return False