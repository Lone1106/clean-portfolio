import getters from "./getters.js";

import jBlog from "../../../assets/jBlog.webp";
import BeLabel from "../../../assets/BEredesign.webp";
import Jpunktmedia from "../../../assets/jpunktmedia.webp";
import SensationalGusto from "../../../assets/sensational-gusto.webp";

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
					slug: "jpunktmedia",
					image: Jpunktmedia,
					altText: "Jpunktmedia  Mockup",
					title: "jpunktmedia",
					linkType: "web",
					link: "https://graceful-melomakarona-364fc6.netlify.app/",
					shortDescr: "Website design for a new, small digital agency.",
					description:
						"jpunktmedia is a small and new digital agency offering diverse services ranging from web design to website management to data preparation for the print process.",
					goals:
						"The goals were to create a clean website that showcases everything the new agency has to offer their clients, as well as information about the agency itself, recent projects and reviews from previous customers.",
					techInfo: ["Figma", "Wordpress", "Elementor"],
				},
				{
					id: 3,
					slug: "sensational-gusto",
					image: SensationalGusto,
					altText: "Sensational Gusto Mockup",
					title: "Sensational Gusto",
					linkType: "web",
					link: "https://papaya-cactus-70ada7.netlify.app/",
					shortDescr: "Website redesign for a local pizza restaurant.",
					description:
						"Sensational Gusto (name changed) is a local pizza shop offering the biggest and best pizzas in the area. Despite the quality of their food and all their offered services, the website of the shop looks like it was created with WordPress on the fly, without much consistency in the design, a handful of UX problems that make the site hard to use, and a lot of subpages with repeating content.",
					goals:
						"The goal for the page was to give off a more modern experience and consistent design than what is currently offered, as well as fix UX problems like links changing to the same color as the background on hover. In addition, some existing pages with repeating content were merged into one to make it easier to navigate the website.",
					techInfo: ["Figma", "Wordpress", "Elementor"],
				},
				{
					id: 4,
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
			],
		};
	},
	getters,
};
