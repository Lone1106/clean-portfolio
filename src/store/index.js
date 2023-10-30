import { createStore } from "vuex";

import projectsModule from "./modules/projects/index.js";

const store = createStore({
	state() {
		return {};
	},
	mutations: {},
	actions: {},
	getters: {},
	modules: {
		projects: projectsModule,
	},
});

export default store;
