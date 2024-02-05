import {defaultSubstitutionsFilterExtractor} from "./defaultparser";


let SCHOOL_CONFIGS = {
	"default": (stufe, klasse, isStudent) => {
		return defaultSubstitutionsFilterExtractor(stufe, klasse, isStudent)
	},
	//Configs for Max-Planck-Schule Rüsselsheim
	"5182": (stufe, klasse, isStudent) => {
		let result =  defaultSubstitutionsFilterExtractor(stufe, klasse, isStudent);

		if (result.stufe === "Q" || result.stufe === "E") {
			switch (result.klasse) {
				case "1" || "2":
					result.klasse = "1/2";
					break;
				case "3" || "4":
					result.klasse = "3/4";
					break;
			}
		}

		return result;
	},
	//Configs for Augustinerschule Friedberg
	"5174": (stufe, klasse, isStudent) => {
  	let parsedKlasse = parseInt(klasse);

 		return {
    			"stufe": (stufe === "13" || stufe === "12") ? "Q" : (stufe === "11" ? "E" : stufe),
    			"klasse": (!isNaN(parsedKlasse) && parsedKlasse < 11) ? klasse.substr(String(parsedKlasse).length) : "",
    			"lehrer": "",
    		};
 	}
}

export default  SCHOOL_CONFIGS;
