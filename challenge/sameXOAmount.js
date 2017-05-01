function sameXOAmount(str) {
	let letterOccurrence = l => (str.match(new RegExp(l, 'gi')) || []).length;

	return letterOccurrence('x') === letterOccurrence('o');
}

module.exports = sameXOAmount;
