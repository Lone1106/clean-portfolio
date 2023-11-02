import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/landing/Landing.vue";

const Profile = () => import("./components/profile/Profile.vue");
const Project = () => import("./components/project/Project.vue");
const NotFound = () => import("./components/notFound/NotFound.vue");

const router = createRouter({
	history: createWebHistory(),
	scrollBehavior(to, from, savedPosition) {
		if (to.hash === "#projects" && from.path !== "/home") {
			return new Promise((resolve, reject) => {
				const timer = setTimeout(() => {
					resolve({ el: to.hash, top: 50, behavior: "smooth" });
				}, 500);
			});
			clearTimeout(timer);
		} else if (to.hash === "#projects" && from.path === "/home") {
			return { el: to.hash, top: 50, behavior: "smooth" };
		} else {
			return { top: 0, behavior: "smooth" };
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
