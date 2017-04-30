function findOddAmount(numbers) {
   var len = numbers.length;
    var A_sort = numbers.slice().sort();

    var count = {};

    A_sort.forEach(function(i) {
        count[i] = (count[i] || 0) + 1;
    });
    for (var key in count) {
        if (count.hasOwnProperty(key)) {

            if (count[key] % 2 !== 0) {
                return Number(key);
            }
        }
    }
}
/*
another simple version
function findOddAmount(numbers) {
	return numbers.reduce((p, n) => p ^ n);
}
*/
module.exports = findOddAmount;
