class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        # if length of both the strings are not equal retrun false
        if (len(s) != len(t) ):
            return False
        #creating hashmaps for maintaining the count of 
        #string s and t
        countS , countT = {}, {}   
        for i in range(len(s)):
            #each time the key is found increment the count
            #counting the occurence of char
            #we use get method to handle if the key  
            #is not already present in the hashmap and gives 
            #it a default count as 0
            countS[s[i]] = 1 + countS.get(s[i], 0)
            countT[t[i]] = 1 + countT.get(t[i], 0)
            
        #iterate through the hashmap and check whether they are equal
        return countS == countT