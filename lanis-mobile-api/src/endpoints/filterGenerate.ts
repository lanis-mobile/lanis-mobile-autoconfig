import {
    OpenAPIRoute,
    OpenAPIRouteSchema,
} from "@cloudflare/itty-router-openapi";
import {AccountInfo, SubstitutionFilter} from "../types";

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
                    },
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
        request: Request,
        env: any,
        context: any,
        data: Record<string, any>
    ) {
        const accountInfo: typeof AccountInfo = await request.json();
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
