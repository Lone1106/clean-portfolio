import getters from "./getters.js";

import jBlog from "../../../assets/jBlog.webp";
import BeLabel from "../../../assets/BEredesign.webp";
import EditorPortfolio from "../../../assets/editor-portfolio.webp";
import SensationalGusto from "../../../assets/Sensational-Gusto.webp";

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
						"A full-fledged blog website project to get more familiar with Vue.js, Vue-router and Vuex.",
					description:
						"jBlog was my first bigger project that I built using Vue.js. It has a lot of the functions a blog site should have, such as logging in, reading, adding and deleting posts, as well as a basic filter function. All the data for the preview site is stored in Vuex and will be deleted after a refresh.",
					goals:
						"The goal of this practice was to get more familiar with Vue.js, VueX and Vue-router as well as implement a basic filter function to filter through the current posts.",
					techInfo: ["Vue", "Tailwind"],
				},
				{
					id: 2,
					slug: "sensational-gusto",
					image: SensationalGusto,
					altText: "Sensational Gusto Mockup",
					title: "Sensational Gusto",
					linkType: "behance",
					link: "https://www.behance.net/gallery/183612767/Sensational-Gusto-Pizza-Shop",
					shortDescr: "Redesign of the website of a local pizza shop.",
					description:
						"Sensational Gusto (name changed) is a local pizza shop. It's been around for more than 10 years. They sell the biggest and best pizzas in the area. They are even trying to produce all their products with only local resources. Despite them being around for a very long time and having great quality food, this is not reflected in their website. It's a quick-crafted WordPress site with many UX errors and lots of inconsistencies.",
					goals:
						"The goal for this project was to give the shop a more modern web presence befitting of their services, as well as fix UX errors like text disappearing on hover.",
					techInfo: ["Figma"],
				},
				{
					id: 3,
					slug: "be-label",
					image: BeLabel,
					altText: "BE Label Mockup",
					title: "BE Label",
					linkType: "web",
					link: "https://luminous-treacle-b8cb1e.netlify.app/",
					shortDescr:
						"Redesign of the website of a label printing company operating worldwide.",
					description:
						"BE Label (name changed) is a globally operating label printer firm. The company is very innovative in its approaches and is one of the leading companies in label printing worldwide. Despite that, the company website looks quite dated compared to rival companies.",
					goals:
						"The goal was to give the company a more modern web presence while still keeping the design very clean with only the most important information.",
					techInfo: ["React", "Tailwind"],
				},
				{
					id: 4,
					slug: "editor-portfolio",
					image: EditorPortfolio,
					altText: "Editor Portfolio Mockup",
					title: "Code editor portfolio",
					linkType: "web",
					link: "https://ubiquitous-granita-aaf3e4.netlify.app/",
					shortDescr:
						"A code editor-themed portfolio site inspired by the GitHub dark theme for sublime text.",
					description:
						"A code editor themed portfolio website to showcase projects, info about oneself and offer viewers a means to contact. The site is inspired by the github dark theme for sublime text. ",
					goals:
						"The goal of this website was to replicate the github dark theme from sublime text as a website and use it as a 'techy' portfolio website.",
					techInfo: ["React"],
				},
			],
		};
	},
	getters,
};
