import { createStore } from "vuex";

import projectsModule from "./modules/projects/index.js";
import aboutModule from "./modules/about/index.js";

const store = createStore({
	state() {
		return {
			isDarkMode: false,
		};
	},
	mutations: {
		toggleMode(state) {
			state.isDarkMode = !state.isDarkMode;
		},
		setDarkModeTrue(state) {
			state.isDarkMode = true;
		},
		setDarkModeFalse(state) {
			state.isDarkMode = false;
		},
	},
	actions: {
		setMode(context) {
			context.commit("toggleMode");
		},
		setDarkModeActive(context) {
			context.commit("setDarkModeTrue");
		},
		setDarkModeInactive(context) {
			context.commit("setDarkModeFalse");
		},
	},
	getters: {
		getMode(state) {
			return state.isDarkMode;
		},
	},
	modules: {
		projects: projectsModule,
		about: aboutModule,
	},
});

export default store;
