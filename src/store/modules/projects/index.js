import getters from "./getters.js";

import jBlog from "../../../assets/jBlog.webp";
import BeLabel from "../../../assets/BEredesign.webp";
import XyMedia from "../../../assets/XY-Media.webp";

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
					linkType: "live",
					link: "",
					shortDescr:
						"A full fledged blog website project to get more familiar with VueJS, Vue-router and Vuex.",
					description: "",
					goals: "",
					techInfo: [],
				},
				{
					id: 2,
					slug: "be-label",
					image: BeLabel,
					altText: "BE Label Mockup",
					title: "BE Label",
					linkType: "live",
					link: "",
					shortDescr:
						"Redesign of the website of a label printing company operating world wide.",
					description: "",
					goals: "",
					techInfo: [],
				},
				{
					id: 3,
					slug: "xy-media",
					image: XyMedia,
					altText: "XY Media Mockup",
					title: "XY Media",
					linkType: "live",
					link: "",
					shortDescr:
						"A minimal themed business website for selling digital goods.",
					description: "",
					goals: "",
					techInfo: [],
				},
			],
		};
	},
	getters,
};
