$(document).ready(function() {
	const word = document.querySelector('.word')
	const btn = document.querySelector('.btn')
	const result = document.querySelector('.result')

	const checkVowel = () => {
		let vowelCount = 0;
		let wordVal = word.value.toLowerCase()

		for (let i = 0; i < wordVal.length; i++) {
			if (wordVal[i] === 'a' || wordVal[i] === 'e' || wordVal[i] === 'i' || wordVal[i] === 'o' || wordVal[i] === 'u') {
				vowelCount++
			}
			$(result).text(`There are ${vowelCount} vowels in ${word.value.toUpperCase()}`)
		}

	}

	$(btn).on('click', (event) => {
		// event.preventDefault();
		checkVowel()
	});
	
});