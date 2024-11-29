import SwaggerJsdoc from "swagger-jsdoc";

const options = {
	definition: {
		info: {
			title: "KW_MatchRoomie API",
			version: "0.0.1",
			description: "KW_MatchRoomie API with express, API 설명",
		},
		host: "localhost:3000",
		basepath: "../",
	},
	apis: ["./src/routes/*.js", "./swagger/*"],
};

export const specs = SwaggerJsdoc(options);