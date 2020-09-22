// Write a function, lucasNumberMemo(n), that takes in a number. The function
// should return the n-th number of the Lucas Sequence.
//
// The Lucas Sequence is like the Fibonacci Sequence, except that its two seed
// values are:
//   The 0-th number of the Lucas Sequence is 2.
//   The 1-st number of the Lucas Sequence is 1.
//
// To generate the next number of the sequence, you add up the previous two
// numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively with memoization.
//
// Examples:
//
// lucasNumberMemo(0)   // => 2
// lucasNumberMemo(1)   // => 1
// lucasNumberMemo(40)  // => 228826127
// lucasNumberMemo(41)  // => 370248451
// lucasNumberMemo(42)  // => 599074578
function lucasNumberMemo(n, memo = {}) {
// memo = {1: 1, 0: 2, 2: 3, 3: 4}; n = 3;
// memo = {1: 1, 0: 2, 2: 3}; n = 2
// memo = {1: 1, 0: 2}; n = 1;
// memo = {1: 1, 0: 2}; n = 0
    if(n in memo) {
        return memo[n]
    }
    if(n === 1) {
        memo[n] = 1
        return memo[n];
    } else if (n === 0 ) {
        memo[n] = 2
        return memo[n];
    }

    memo[n] = lucasNumberMemo(n-1, memo) + lucasNumberMemo(n-2, memo); // 3 + 1
    return memo[n];
}


// Write a function, minChange(coins, amount), that accepts an array of coin
// values and a target amount as arguments. The method should return the minimum number
// of coins needed to make the target amount. A coin value can be used multiple
// times.
//
// After you pass the first 3 examples, you'll likely need to memoize your code
// in order to pass the 4th example in a decent runtime.
//
// Examples:
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100

// function minChange(coins, amount, memo = {}) {
//     if (amount === 0) {
//         return 0;
//     }
//     for (let i = coins.length - 1; i >= 0; i--) {
//         if (amount % coins[i] === 0) {
//             return amount / coins[i];
//         }
//     }
//     let biggestValueCoin = coins[coins.length - 1]
//     if (biggestValueCoin <= amount) {
//         let coinCount = Math.floor(amount / biggestValueCoin)
//         let remainingAmount = amount % biggestValueCoin
//         return coinCount + minChange(coins.slice(0 , coins.length - 1), remainingAmount);
//     } else {
//         return minChange(coins.slice(0, coins.length - 1), amount);
//     }
// }

// function minChange(coins, amount, memo = {}) {
//     if (amount === 0) {
//         return 0;
//     }
//     for (let i = coins.length-1; i>=0; i--) {
//         let coinValue = coins[i];
//         if(coinValue <= amount) {
//             let remainder = amount % coinValue;
//             let numCoins = Math.floor(amount/coinValue);
//             memo[coinValue] = numCoins + minChange(coins.slice(0, i), remainder, memo)


//         }
//     }
//     let minCount = Infinity
//     // console.log(memo)
//     for (let key in memo) {
//         if(memo[key] <= minCount) {
//             minCount = memo[key]
//         }
//     }
//     return minCount;
// }


function minChange(coins, amount, memo = {}) {
    if(amount in memo) {
        return memo[amount]
    }
    if (amount === 0) {
        return 0;
    }
    let newArray =[];
    for (let i = coins.length-1; i>=0; i--) {
        let coinValue = coins[i];
        if(coinValue <= amount) {
            newArray.push(minChange(coins , amount-coinValue, memo)+1)


        }


    }
    memo[amount] = Math.min(...newArray)
    return memo[amount]
}

console.log(minChange([83, 186, 408, 419], 6249))
// 6249 / 419 = 14 , 383
// 383/186 = 2 , 11

// 6249/ 408 = 15, 129
// 129/83 = 1, 46

// 6249 / 186 = 33, 11

// 6249 / 83 = 75, 24

// console.log(minChange([1, 5, 10, 25], 15) )   // => 2, because 10 + 5 = 15
/*
Divide by biggest coin value andd get remainder // 11 / 5 => 1
If there's a remainder,
then divide by biggest number that can go into it // 1 / 1 => 0

*/
// console.log(minChange([1, 2, 5], 0))

// console.log(minChange([1, 2, 5], 11))         // => 3, because 5 + 5 + 1 = 11
// console.log(minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// console.log(minChange([1, 5, 10, 25], 100))    // => 4, because 25 + 25 + 25 + 25 = 100


module.exports = {
    lucasNumberMemo,
    minChange
};
