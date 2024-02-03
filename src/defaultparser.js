
/*
* @param {string} stufe - The grade of the student.
* @param {string} klasse - The class of the student.
* @param {boolean} isStudent - Whether the user is a student or Teacher/Parent.
*
* @returns {Object} - The extracted data from the input.
* */
export function defaultSubstitutionsFilterExtractor(stufe, klasse, isStudent) {
	klasse = klasse.toLowerCase();

	//Oberstufenklassen haben oft sehr seltsame Bezeichnungen. Diese sollen primär schulspezifisch gehandhabt werden.
	if (klasse.includes("q") || klasse.includes("e")) {
		//get first digit from string
		let klasseMatch = klasse.match(/\d+/);
		return {
			"stufe": klasse.includes("q") ? "Q" : "E",
			"klasse": klasseMatch ? klasseMatch[0] : "",
			"lehrer": "",
		}
	}

	//Klassenbezeichnungen wie 5a, 5b, 5c, 5d, 10a, 10b, 13c etc.
	//lösung mit regex
	let klasseMatch = klasse.match(/(\d+)([a-zA-Z]+)/);
	if (klasseMatch) {
		return {
			"stufe": parseInt(klasseMatch[1]),
			"klasse": klasseMatch[2],
			"lehrer": "",
		}
	}


	return {klasse: "", stufe: "", lehrer: ""};
}
