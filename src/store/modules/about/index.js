import getters from "./getters.js";

export default {
	namespaced: true,
	state() {
		return {
			content: {
				info: "Hi, my name is Jan. I'm currently working as a prepress operator. In my free time, I enjoy learning about new things. That's why I'm currently learning Japanese and Spanish as my 3rd and 4th foreign languages. On top of that, I am trying to learn more about UI design and web development while also practicing designing and building websites with the current popular tech.",
				skills: [
					{
						title: "Tech",
						items: ["HTML/CSS", "SASS", "Tailwind", "React", "Vue", "Git"],
					},
					{
						title: "Software",
						items: [
							"Adobe Illustrator",
							"Adobe Photoshop",
							"Figma",
							"Artpro",
							"Packedge",
						],
					},
					{
						title: "Languages",
						items: [
							"German (native)",
							"English (fluent)",
							"Japanese (N3)",
							"Spanish (A1)",
						],
					},
				],
				experience: [
					{
						title: "03/2021 - current",
						description:
							"I am currently employed as a prepress operator, focusing on labeling and packaging in the offset printing process. My current responsibilities include checking data for printability, adjusting data for the offset print process, color correction according to proof, proofreading.",
					},
					{
						title: "09/2017 - 08/2020",
						description:
							"Three year apprenticeship as a media designer, focusing mainly on prepress and label offset printing.",
					},
				],
			},
		};
	},
	getters,
};
