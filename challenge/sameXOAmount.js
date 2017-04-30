function sameXOAmount(str) {
	//http://stackoverflow.com/questions/881085/count-the-number-of-occurances-of-a-character-in-a-string-in-javascript/10671743#10671743
	let letterOccurrence = l => (str.match(new RegExp(l, 'gi')) || []).length;

	return letterOccurrence('x') === letterOccurrence('o');
}

module.exports = sameXOAmount;
