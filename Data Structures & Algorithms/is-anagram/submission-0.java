class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length()){
            return false;
        }
        //intialising an array with length 26 (26 letters)
        int [] char_array = new int[26];
        for ( int i = 0; i < s.length(); i++){
            //current charcter - 'a' gives the index of the character
            //so each time the charcter it found it increments the 
            //character count in the char_array
            char_array[s.charAt(i)-'a']++;
            //decrements each time the character is found in the char_array
            char_array[t.charAt(i)-'a']--;
        }

        //if count of each character in the character array is zero 
        //than the string is an valid anagam to not an anagram
        for (int count : char_array){
            if ( count != 0){
                return false;
            }
        }
        return true;
    }
}
