import getters from "./getters.js";

import jBlog from "../../../assets/jBlog.webp";
import BeLabel from "../../../assets/BEredesign.webp";
import EditorPortfolio from "../../../assets/editor-portfolio.webp";

export default {
	namespaced: true,
	state() {
		return {
			projects: [
				{
					id: 1,
					slug: "jblog",
					image: jBlog,
					altText: "jBlog Mockup",
					title: "jBlog",
					linkType: "web",
					link: "https://fanciful-kataifi-874129.netlify.app/posts",
					shortDescr:
						"A full fledged blog website project to get more familiar with VueJS, Vue-router and Vuex.",
					description:
						"jBlog was my first bigger project that I built using vuejs. It has a lot of the functions a blog site should have, logging in, reading, adding and deleting posts as well a basic filter function. ALl the data for the preview site is stored in vuex and will be deleted after a refresh.",
					goals:
						"The goal of this practice was to get more familiar with vuejs, vuex and vue-router as well as implementing a basic filter function to filter through the current posts.",
					techInfo: ["Vue", "Tailwind"],
				},
				{
					id: 2,
					slug: "be-label",
					image: BeLabel,
					altText: "BE Label Mockup",
					title: "BE Label",
					linkType: "web",
					link: "https://luminous-treacle-b8cb1e.netlify.app/",
					shortDescr:
						"Redesign of the website of a label printing company operating world wide.",
					description:
						"BE Label (name changed) is a globally operating laber printer firm. The compay is very innovative in its approaches and is one of the leading companies in label priting world wide. Despite that the company website looks quite dated compared to rival companies.",
					goals:
						"The goal therefor was to give the company a more modern web presence, while still keeping the design very clean with only the most important informations.",
					techInfo: ["React", "Tailwind"],
				},
				{
					id: 3,
					slug: "editor-portfolio",
					image: EditorPortfolio,
					altText: "Editor Portfolio Mockup",
					title: "Code editor portfolio",
					linkType: "web",
					link: "https://ubiquitous-granita-aaf3e4.netlify.app/",
					shortDescr:
						"A code editor themed portfolio site inspired by the github dark theme for sublime text.",
					description:
						"A code editor themed portfolio website to showcase projects, info about oneself and offer viewers a means to contact. The site is inspired by the github dark theme for sublime text. ",
					goals:
						"The goal of this website was to replicate the github dark theme from sublime text as a website.",
					techInfo: ["React"],
				},
			],
		};
	},
	getters,
};
