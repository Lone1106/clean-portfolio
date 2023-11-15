import getters from "./getters.js";

import jBlog from "../../../assets/jBlog.webp";
import BeLabel from "../../../assets/BEredesign.webp";
import SensationalGusto from "../../../assets/SensationalGusto.webp";
import PortfolioCat from "../../../assets/portfolio-cat.webp";

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
					linkType: "web",
					link: "https://cozy-kulfi-2133b1.netlify.app/",
					shortDescr:
						"Restaurant website redesign practice project for a local pizza shop.",
					description:
						"Sensational Gusto (name changed) is a local pizza shop offering the biggest and best pizzas in the area. Despite the quality of their food and all their offered services, the website of the shop looks like it was created with WordPress on the fly, without much consistency in the design, a handful of UX problems that make the site hard to use, and a lot of subpages with repeating content.",
					goals:
						"The goal for the page was to give off a more modern experience and consistent design than what is currently offered, as well as fix UX problems like links changing to the same color as the background on hover. In addition, some existing pages with repeating content were merged into one to make it easier to navigate the website.",
					techInfo: ["Figma", "Wordpress"],
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
					slug: "portfolio-catalina",
					image: PortfolioCat,
					altText: "Portfolio Catalina Mockup",
					title: "3D Game designer portfolio",
					linkType: "web",
					link: "https://musical-nasturtium-2c9612.netlify.app/",
					shortDescr: "Portfolio website redesign of a 3D game designer.",
					description:
						"Catalina is a 3D game designer. On the side, she is also crafting parts for cosplays and other fan items from games and series. Her current portfolio site is difficult to navigate, and it's quite hard to find the information you need (content all over the place, long walls of text, not very consistent overall, etc.). Even though her work is good, the site itself makes it very hard to stay focused. (all images are placeholders)",
					goals:
						"Create a new portfolio page with a clear overview of recent projects as well as the person's skill set. All important information should be easily found. Have a consistent theme across the page. The website should be easy to create and maintain with a website builder like Wix.",
					techInfo: ["Figma", "Wordpress"],
				},
			],
		};
	},
	getters,
};
