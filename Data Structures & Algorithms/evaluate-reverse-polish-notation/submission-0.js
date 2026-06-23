class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        for (let i = 0; i < tokens.length; i++) {
            let token = tokens[i];

            if (token !== '+' && token !== '-' && token !== '*' && token !== '/') {
                stack.push(Number(token));
            } else {
                let num2 = stack.pop();
                let num1 = stack.pop();

                if (token === '+') {
                    stack.push(num1 + num2);
                } else if (token === '-') {
                    stack.push(num1 - num2);
                } else if (token === '*') {
                    stack.push(num1 * num2);
                } else if (token === '/') {
                    stack.push(Math.trunc(num1 / num2));
                }
            }
        }

        return stack[0];
    }
}