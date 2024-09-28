import {Bool, DateTime, Str} from "@cloudflare/itty-router-openapi";

export const Task = {
	name: new Str({ example: "lorem" }),
	slug: String,
	description: new Str({ required: false }),
	completed: Boolean,
	due_date: new DateTime(),
};

const EntryFilter = {
	strict: Bool,
	filter: [String] || null,
}

export const SubstitutionFilter = {
	Vertreter: EntryFilter,
	Lehrer: EntryFilter,
	Stunde: EntryFilter,
	Klasse: EntryFilter,
	Klasse_alt: EntryFilter,
	Fach: EntryFilter,
	Fach_alt: EntryFilter,
	Raum: EntryFilter,
	Raum_alt: EntryFilter,
	Hinweis: EntryFilter,
	Art: EntryFilter,
	Hinweis2: EntryFilter,
	Lehrerkuerzel: EntryFilter,
	Vertreterkuerzel: EntryFilter,
}

export const AccountInfo = {
	schoolID: String,
	//loginName: String,
	classString: String || null,
	classLevel: String || null,
}

export type Account = {
	schoolID: string,
	//loginName: string,
	classString?: string,
	classLevel?: string,
}