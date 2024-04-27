import { OpenAPIRouter } from "@cloudflare/itty-router-openapi";
import {GenerateFilter} from "./endpoints/filterGenerate";

export const router = OpenAPIRouter({
	docs_url: "/",

});


router.get("/api/filter/generate/", GenerateFilter);

// 404 for everything else
router.all("*", () =>
	Response.redirect("https://github.com/alessioC42/lanis-mobile", 301)
);

export default {
	fetch: router.handle,
};
