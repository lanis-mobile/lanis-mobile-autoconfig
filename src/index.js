import { Router } from 'itty-router';
import SCHOOL_CONFIGS from "./school_config";

const router = Router();



router.get('/substitutions/:schoolID', ({ params, query }) => {
	const { schoolID } = params;
	const { stufe, klasse, isStudent } = query;

	let result;

	if (!SCHOOL_CONFIGS[schoolID]) {
		result = SCHOOL_CONFIGS["default"](stufe, klasse, isStudent);
	} else {
		result = SCHOOL_CONFIGS[schoolID](stufe, klasse, isStudent);
	}

	return new Response(JSON.stringify(result), {
		headers: {
			'Content-Type': "application/json",
		},
	});
});


router.all('*', () => new Response("",{status: 302, headers: {"location": "https://github.com/alessioc42/lanis-mobile-autoconfig"} }));

export default {
	fetch: router.handle,
};
