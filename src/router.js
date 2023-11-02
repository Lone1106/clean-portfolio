import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/landing/Landing.vue";

const Profile = () => import("./components/profile/Profile.vue");
const Project = () => import("./components/project/Project.vue");
const NotFound = () => import("./components/notFound/NotFound.vue");

const router = createRouter({
	history: createWebHistory(),
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return { el: to.hash, behavior: "smooth", top: 15 };
		} else {
			return { top: 0 };
		}
	},
	routes: [
		{ path: "/", redirect: "/home" },
		{ path: "/home", component: Home },
		{ path: "/profile", component: Profile },
		{ path: "/project/:projectId", component: Project, props: true },
		{ path: "/:notFound(.*)", component: NotFound },
	],
});

export default router;
