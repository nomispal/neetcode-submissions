class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {

        let p1 = 0;
        let p2 = 0;

        let word3 = [];

        while(word1.length > p1 && word2.length > p2){

            if(p1 > p2){
                word3.push(word2[p2]);
                p2++;
            }else{
                word3.push(word1[p1]);
                p1++;
            }
        }

        while(word2.length > p2){
            word3.push(word2[p2]);
            p2++
        }
        while (p1 < word1.length) {
            word3.push(word1[p1]);
            p1++;
        }
        return word3.join("")
    }
}
