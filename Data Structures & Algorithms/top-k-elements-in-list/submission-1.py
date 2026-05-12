class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        #a hash map to storing the count of each element
        count = {}
        #a array with subarrays to maintain the elements 
        #that occur in that particular frequency count
        freq_bucket = [[] for i in range(len(nums)+1)]

        #iterating nums array and counting the freq of 
        #each element
        for n in nums:
            count[n] = 1 + count.get(n,0)
        #for each count in key value pairs of the dict
        for n , c in count.items():
            #n occurs c no of times
            freq_bucket[c].append(n)
        
        #result array
        res = []
        for i in range(len(freq_bucket) - 1, 0, -1):
            for n in freq_bucket[i]:
                res.append(n)
                if len(res) == k:
                    return res
