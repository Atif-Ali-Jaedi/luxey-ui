import { lazy } from "react";

const DarkModeIntroduction = lazy(() =>
	import("./DarkModeIntroduction.mdx")
);
const LuxeyUI_0_3_0 = lazy(() => import("./LuxeyUI_0_3_0.mdx"));
const LuxeyUI_0_4_0 = lazy(() => import("./LuxeyUI_0_4_0.mdx"));

const blogs = [
	{
		name: "Introducing v0.4.0",
		title: "Introducing LuxeyUI v0.4.0",
		description:
			"LuxeyUI v0.4.0 is here! Includes 4 new components (Scroll Shadow, Checkbox Group, Kbd and Progress) with some minor bug fixes.",
		tag: "Changelog",
		content: LuxeyUI_0_4_0,
		date: "Jul 14, 2024",
		cover: "/blogPostCovers/luxeyui_0-4-0.png"
	},
	{
		name: "Introducing v0.3.0",
		title: "Introducing LuxeyUI v0.3.0",
		description:
			"LuxeyUI v0.3.0 is here! Includes many bug fixes along with entirely remade components, dark mode, a new component: Input and so much more.",
		tag: "Changelog",
		content: LuxeyUI_0_3_0,
		date: "Jun 29, 2024",
		cover: "/blogPostCovers/luxeyui_0-3-0.png"
	},
	{
		name: "Introduction to dark mode",
		title: "Dark mode is finally here!",
		description:
			"After a lot of time and effort, dark mode is finally here in LuxeyUI.",
		tag: "Announcement",
		content: DarkModeIntroduction,
		date: "Jun 19, 2024",
		cover: "/blogPostCovers/darkMode.jpg"
	}
];

export default blogs;
