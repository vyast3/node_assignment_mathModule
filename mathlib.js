module.exports = function(){
    return {
        add: function(num1, num2){
            console.log("the sum is:", num1 + num2);
        },
        multiply: function(num1,num2){
            console.log("the miltiply is:", num1 * num2);
        },
         square: function(num) {
            console.log("the square is:", num * num);
        },
        random: function(num1, num2) {
            console.log("Random number:", Math.floor(Math.random() * num2) + 1)
        }
    }
};

//--other way
// module.exports = function () {
// 	return {
// 		add: function(a, b) {
// 			return a + b;
// 		},
// 		multiply: function(a, b) {
// 			return a * b;
// 		},
// 		square: function(a) {
// 			return a * a;
// 		},
// 		random: function(a, b) {
// 			return Math.floor(Math.random() * 35) + 1;
// 		}
// 	};
// };