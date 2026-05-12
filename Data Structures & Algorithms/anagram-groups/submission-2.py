class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list) #mapping the charCount --> list of anagram

        # iterate through the array of strings
        for s in strs:
            # an array of 26 zeros (represents 26 chars in alphabets)
            count = [0] * 26

            # iterate through the string
            for c in s:
                #subtracts the chars ascii and 'a' ascii 
                #to find the char and increments it each 
                #time it found in the string
                count[ord(c) - ord('a')] += 1
            
            #key is set to a tuple of count 
            key = tuple(count)
            #result is stored in dictionary 
            # 
            res[key].append(s)

        return res.values()
