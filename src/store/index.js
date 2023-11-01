import { createStore } from "vuex";

import projectsModule from "./modules/projects/index.js";

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
	},
	actions: {
		setMode(context) {
			context.commit("toggleMode");
		},
	},
	getters: {
		getMode(state) {
			return state.isDarkMode;
		},
	},
	modules: {
		projects: projectsModule,
	},
});

export default store;
