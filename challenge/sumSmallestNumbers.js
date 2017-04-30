function sumSmallestNumbers(numbers) {
	(numbers.length > 2) && numbers.sort((a, b) => a - b);

	return numbers[0] + numbers[1];
}

module.exports = sumSmallestNumbers;
