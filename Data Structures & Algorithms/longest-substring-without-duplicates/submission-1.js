class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {


        let set = new Set();
        let left = 0;
        let maxString = 0;

        for(let right = 0; right<s.length; right++){

            if(set.has(s[right])){
                while(set.has(s[right])){
                    set.delete(s[left]);
                    left++;
                }
            }
                set.add(s[right]);


            maxString = Math.max(maxString, right - left + 1);
        }

        return maxString
       
}
}

