class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let maxProfit = 0;
        let left = 0;

        for(let right = 1; right<prices.length; right++){
            
            if(prices[right] > prices[left]){
            let currentProfit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, currentProfit);
            }else{
                left = right;
            }
        }
        return maxProfit;
}
}
