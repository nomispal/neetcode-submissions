class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        let map = new Map([
            ['(', ')'],
            ['[', ']'],
            ['{', '}']
        ]);

        for (let i = 0; i < s.length; i++) {
            let ch = s[i];

            if (ch === '(' || ch === '[' || ch === '{') {
                stack.push(ch);
            } else {
                let popp = stack.pop();

                if (map.get(popp) !== ch) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}