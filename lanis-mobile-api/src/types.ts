import { DateTime, Str } from "@cloudflare/itty-router-openapi";

export const Task = {
	name: new Str({ example: "lorem" }),
	slug: String,
	description: new Str({ required: false }),
	completed: Boolean,
	due_date: new DateTime(),
};

export const SubstitutionFilter = {
	Vertreter: [String] || null,
	Lehrer: [String] || null,
	Stunde: [String] || null,
	Klasse: [String] || null,
	Klasse_alt: [String] || null,
	Fach: [String] || null,
	Fach_alt: [String] || null,
	Raum: [String] || null,
	Raum_alt: [String] || null,
	Hinweis: [String] || null,
	Art: [String] || null,
	Hinweis2: [String] || null,
	Lehrerkuerzel: [String] || null,
	Vertreterkuerzel: [String] || null,
}

export const AccountInfo = {
	schoolID: String,
	loginName: String,
	classString: String || null,
	classLevel: String || null,
}

export type Account = {
	schoolID: string,
	loginName: string,
	classString?: string,
	classLevel?: string,
}