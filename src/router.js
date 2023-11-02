import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/landing/Landing.vue";

const Profile = () => import("./components/profile/Profile.vue");
const Project = () => import("./components/project/Project.vue");
const NotFound = () => import("./components/notFound/NotFound.vue");

const router = createRouter({
	history: createWebHistory(),
	scrollBehavior(to, from, savedPosition) {
		if (to.hash === "#projects") {
			return new Promise((resolve, reject) => {
				const timer = setTimeout(() => {
					resolve({ el: to.hash, top: 20, behavior: "smooth" });
				}, 500);
			});
			clearTimeout(timer);
		}

		return { top: 0, behavior: "smooth" };
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
