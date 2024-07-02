import { lazy } from "react";

const DarkModeIntroduction = lazy(() =>
	import("./pages/DarkModeIntroduction.mdx")
);
const LuxeyUI_0_3_0 = lazy(() => import("./pages/LuxeyUI_0_3_0.mdx"));

const blogs = [
	{
		name: "Introducing v0.3.0",
		title: "Introducing LuxeyUI v0.3.0",
		description:
			"NextUI v0.3.0 is here! Includes many bug fixes along with entirely remade components, dark mode, a new component: Input and so much more.",
		tag: "Changelog",
		content: LuxeyUI_0_3_0,
		date: "Jun 29, 2024",
		cover: "/blogPostCovers/luxeyui_0-3-0.png"
	},
	{
		name: "Introduction to dark mode",
		title: "Dark mode is finally here!",
		description: "After a lot of time and effort, dark mode is finally here in LuxeyUI.",
		tag: "Announcement",
		content: DarkModeIntroduction,
		date: "Jun 19, 2024",
		cover: "/blogPostCovers/darkMode.jpg"
	}
];

export default blogs;
