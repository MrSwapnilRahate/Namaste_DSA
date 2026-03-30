/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let minValue = prices[0]; 
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] - minValue > maxProfit) {
            maxProfit = prices[i] - minValue;
        }
        // agar prices[i] loop chalte samay agar previous value se km value il rhi to loop chalte chaltehi us value ko minvalue me update krte chalo, dubara return ake sbke sath minus krne ki jarurat nhi hai
        if(minValue > prices[i]) { // 1st pointer to track min value
            minValue = prices[i];
        }
    }
    return maxProfit;
};