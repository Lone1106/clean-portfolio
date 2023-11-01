import getters from "./getters.js";

export default {
	namespaced: true,
	state() {
		return {
			content: {
				info: "Hi, my name is Jan. I'm currently working as a prepress operator. In my free time I enjoy learning about new stuff. Thats why I'm currently learning japanese and spanish as my 3rd and 4th foreign languages. On top of that I am trying to learn more about ui design and web development while also practicing designing and building website with the current popular tech.",
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
							"Currently employed as prepress operator focusing on label and packacking in the offset printing process. My current responsibilities include: checking data for printability, adjusting data for the offset print process, color correction according to proof, proof reading.",
					},
					{
						title: "09/2017 - 08/2020",
						description:
							"Three year apprenticeship as media designer, focusing mainly on prepress and label offset printing.",
					},
				],
			},
		};
	},
	getters,
};
