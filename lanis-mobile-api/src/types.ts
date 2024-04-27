import { DateTime, Str } from "@cloudflare/itty-router-openapi";

export const Task = {
	name: new Str({ example: "lorem" }),
	slug: String,
	description: new Str({ required: false }),
	completed: Boolean,
	due_date: new DateTime(),
};

export const SubstitutionFilter = {
	Tag: [String],
	Tag_en: [String],
	Vertreter: [String],
	Lehrer: [String],
	Stunde: [String],
	Klasse: [String],
	Klasse_alt: [String],
	Fach: [String],
	Fach_alt: [String],
	Raum: [String],
	Raum_alt: [String],
	Hinweis: [String],
	Art: [String],
	Hinweis2: [String],
	Lehrerkuerzel: [String],
	Vertreterkuerzel: [String],
}

export const AccountInfo = {
	schoolID: String,
	loginName: String,
	classString: String || null,
	classLevel: String || null,
}