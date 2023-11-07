import getters from "./getters.js";

import jBlog from "../../../assets/jBlog.webp";
import BeLabel from "../../../assets/BEredesign.webp";
import EditorPortfolio from "../../../assets/editor-portfolio.webp";
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
					slug: "portfolio-catalina",
					image: PortfolioCat,
					altText: "Portfolio Catalina Mockup",
					title: "3D Game designer portfolio",
					linkType: "behance",
					link: "https://www.behance.net/gallery/183933925/3D-Designer-Portfolio-Website",
					shortDescr: "Portfolio website redesign of a 3D game designer.",
					description:
						"Catalina is a 3D game designer. On the side, she is also crafting parts for cosplays and other fan items from games and series. Her current portfolio site is difficult to navigate, and it's quite hard to find the information you need (content all over the place, long walls of text, not very consistent overall, etc.). Even though her work is good, the site itself makes it very hard to stay focused. (all images are placeholders)",
					goals:
						"Create a new portfolio page with a clear overview of recent projects as well as the person's skill set. All important information should be easily found. Have a consistent theme across the page. The website should be easy to create and maintain with a website builder like Wix.",
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
