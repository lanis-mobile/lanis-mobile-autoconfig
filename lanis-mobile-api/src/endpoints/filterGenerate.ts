import {
    OpenAPIRoute,
    OpenAPIRouteSchema,
} from "@cloudflare/itty-router-openapi";
import {Account, AccountInfo, SubstitutionFilter} from "../types";

export class GenerateFilter extends OpenAPIRoute {
    static schema: OpenAPIRouteSchema = {
        tags: ["Substitutions"],
        summary: "Generate a custom substitution filter",
        requestBody: AccountInfo,
        responses: {
            "200": {
                description: "Returns the created filter",
                schema: {
                    success: Boolean,
                    result: {
                        task: SubstitutionFilter,
                    } || null,
                },
            },
            "400": {
                description: "Missing schoolID",
                schema: {
                    success: Boolean,
                    error: String,
                },
            },
            "500": {
                description: "Internal server error: use default filter in your application",
                schema: {
                    success: Boolean,
                    error: String,
                },
            }
        },
    };

    async handle(
        _request: Request,
        _env: any,
        _context: any,
        data: Record<string, any>
    ) {
        const accountInfo: Account = data.body;
        if (!accountInfo.schoolID) {
            return Response.json(
                {
                    success: false,
                    error: "Missing schoolID",
                }, {status: 400}
            );
        }
        const schoolID = Number(accountInfo.schoolID);
        const isTeacher = accountInfo.classLevel === undefined || accountInfo.classLevel === null || accountInfo.classString === undefined || accountInfo.classString === null;

        switch (schoolID) {
            case 5182: // Max-Planck-Schule Rüsselsheim am Main
                if (isTeacher) return {
                    success: true,
                    result: null
                }
                accountInfo.classString = accountInfo.classString.toLowerCase();

                if (accountInfo.classString.includes("q") || accountInfo.classString.includes("e")) {
                    //get first digit from string
                    let klasseMatch = accountInfo.classString.match(/\d+/);
                    return {
                        success: true,
                        result: {
                            task: {
                                Klasse: {
                                    strict: true,
                                    filter: [
                                        accountInfo.classString.includes("q") ? "Q" : "E",
                                        klasseMatch ? klasseMatch[0] : "",
                                    ]
                                }
                            }
                        }
                    }
                }

                //Klassenbezeichnungen wie 5a, 5b, 5c, 5d, 10a, 10b, 13c etc.
                //lösung mit regex
                let klasseMatch = accountInfo.classString.match(/(\d+)([a-zA-Z]+)/);
                if (klasseMatch) {
                    return {
                        success: true,
                        result: {
                            task: {
                                Klasse: {
                                    strict: true,
                                    filter: [
                                        klasseMatch[1],
                                        klasseMatch[2],
                                    ]
                                }
                            }
                        }
                    }
                }

                return {
                    success: false,
                    result: null
                }
            case 5181: // Immanuel-Kant-Schule Rüsselsheim am Main
                //Hier funktioniert der schuleigene Filter. (gesehen nur bei E-Phase)
                return {
                    success: true,
                    result: null
                }
            case 5174: // Augustinerschule Friedberg
                let parsedKlasse = parseInt(accountInfo.classString);
                return {
                    success: true,
                    result: {
                        task: {
                            Klasse: {
                                strict: true,
                                filter: [
                                    (accountInfo.classLevel === "13" || accountInfo.classLevel === "12") ? "Q" : (accountInfo.classLevel === "11" ? "E" : accountInfo.classLevel),
                                    (!isNaN(parsedKlasse) && parsedKlasse < 11) ? accountInfo.classString.slice(String(parsedKlasse).length) : ""
                                ]
                            }
                        }
                    }
                }
            case 6091: // Otto-Hahn-Schule Nieder-Eschbach
                //Inconsistent entries by school so there should be no filter
                return {
                    success: true,
                    result: null
                }
            default:
                return {
                    success: false,
                    result: null,
                }
        }
    }
}
