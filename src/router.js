import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/landing/Landing.vue";

const Profile = () => import("./components/profile/Profile.vue");
const Project = () => import("./components/project/Project.vue");
const NotFound = () => import("./components/notFound/NotFound.vue");

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", redirect: "/home" },
		{ path: "/home", component: Home },
		{ path: "/profile", component: Profile },
		{ path: "/project/:projectId", component: Project, props: true },
		{ path: "/:notFound(.*)", component: NotFound },
	],
});

export default router;
