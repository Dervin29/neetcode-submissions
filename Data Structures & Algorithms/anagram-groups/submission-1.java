class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        //initalizing a hashmap
         Map<String, List<String>> group = new HashMap<>();
         //iterating through each element of the string array
        for (String str : strs) {
            //converting each element to a char array
            char[] charArr = str.toCharArray();
            //sorting the char array
            Arrays.sort(charArr);
            //converting the sorted array back to string
            String sortedStr = String.valueOf(charArr);
            //if hashmap does not contain the sorted string
            //than put the element in the hashmap(key: sorted string and an array list)
            //values: to any other of similar chars
            if (!group.containsKey(sortedStr)) {
                group.put(sortedStr, new ArrayList<>());
            }
            //else get the sorted string and add its
            //corresponding string
            group.get(sortedStr).add(str);
        }
        //return an array list with group values
        return new ArrayList<>(group.values());
    }
}

    
