class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
         Map<String, List<String>> group = new HashMap<>();
        for (String str : strs) {
            char[] charArr = str.toCharArray();
            Arrays.sort(charArr);
            String sortedStr = String.valueOf(charArr);
            if (!group.containsKey(sortedStr)) {
                group.put(sortedStr, new ArrayList<>());
            }
            group.get(sortedStr).add(str);
        }
        return new ArrayList<>(group.values());
    }
}

    
