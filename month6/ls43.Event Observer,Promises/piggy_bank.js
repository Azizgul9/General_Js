// var PiggyBank = {
//     coins: {1: 0, 3: 0, 5: 0, 10: 0},
//     addCoin: function(value) {
//         switch (value) {
//             case 1: case 3: case 5: case 10:
//             this.coins[value]++;
//             break;
//             default:
//                 console.log('This is not a correct value!');
//         }
//     },
//     showCoins: function() {
//         for (var value in this.coins) {
//             console.log(value, this.coins[value]);
//         }
//     },
//     getTotal: function() {
//         var total = 0;
//         for (var value in this.coins) {
//             total += value * this.coins[value];
//         }
//         return total;
//     }
// };
//
// PiggyBank.addCoin(10);
// PiggyBank.addCoin(5)
// PiggyBank.addCoin(3);
// PiggyBank.showCoins();
//
// console.log(PiggyBank.getTotal());

var PiggyBank=function () {
    this.coins={1:0, 3:0, 5:0,10:0};
};

PiggyBank.prototype.addCoin=function (value) {
    
};
PiggyBank.prototype.getTotal=function(){
    return 500;
};