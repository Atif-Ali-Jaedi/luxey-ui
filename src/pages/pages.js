import { lazy } from "react";

const Avatar = lazy(() => import("./components/Avatar.mdx"));
const Accordion = lazy(() => import("./components/Accordion.mdx"));
const Badge = lazy(() => import("./components/Badge.mdx"));
const Button = lazy(() => import("./components/Button.mdx"));
const Card = lazy(() => import("./components/Card.mdx"));
const Checkbox = lazy(() => import("./components/Checkbox.mdx"));
const CheckboxGroup = lazy(() => import("./components/CheckboxGroup.mdx"));
const Chip = lazy(() => import("./components/Chip.mdx"));
const CircularProgress = lazy(() =>
	import("./components/CircularProgress.mdx")
);
const Code = lazy(() => import("./components/Code.mdx"));
const Divider = lazy(() => import("./components/Divider.mdx"));
const Image = lazy(() => import("./components/Image.mdx"));
const Input = lazy(() => import("./components/Input.mdx"));
const Kbd = lazy(() => import("./components/Kbd.mdx"));
const Link = lazy(() => import("./components/Link.mdx"));
const Progress = lazy(() => import("./components/Progress.mdx"));
const Radio = lazy(() => import("./components/Radio.mdx"));
const Skeleton = lazy(() => import("./components/Skeleton.mdx"));
const ScrollShadow = lazy(() => import("./components/ScrollShadow.mdx"));
const Spinner = lazy(() => import("./components/Spinner.mdx"));
const Switch = lazy(() => import("./components/Switch.mdx"));
const Textarea = lazy(() => import("./components/Textarea.mdx"));
const User = lazy(() => import("./components/User.mdx"));

const Introduction = lazy(() => import("./mains/docs/Introduction.mdx"));
const Installation = lazy(() => import("./mains/docs/Installation.mdx"));
const Theme = lazy(() => import("./mains/docs/Theme.mdx"));
const Changelog = lazy(() => import("./mains/docs/Changelog.mdx"));
const Typography = lazy(() => import("./mains/docs/Typography.mdx"));
const DarkMode = lazy(() => import("./mains/docs/DarkMode.mdx"));
const OverrideStyles = lazy(() => import("./mains/docs/OverrideStyles.mdx"));
const CustomVariants = lazy(() => import("./mains/docs/CustomVariants.mdx"));

const Blogs = lazy(() => import("./mains/Blogs.jsx"));

const docs = [
	{ id: 101, index: true, element: Introduction },
	{ id: 102, path: "installation", element: Installation },
	{ id: 103, path: "theme", element: Theme },
	{ id: 104, path: "changelog", element: Changelog },
	{ id: 105, path: "typography", element: Typography },
	{ id: 106, path: "dark-mode", element: DarkMode },
	{ id: 107, path: "override-styles", element: OverrideStyles },
	{ id: 108, path: "custom-variants", element: CustomVariants }
];

const components = [
	{ path: "avatar", element: Avatar },
	{ path: "user", element: User },
	{ path: "skeleton", element: Skeleton },
	{ path: "card", element: Card },
	{ path: "accordion", element: Accordion },
	{ path: "badge", element: Badge },
	{ path: "button", element: Button },
	{ path: "checkbox", element: Checkbox },
	{ path: "checkbox-group", element: CheckboxGroup },
	{ path: "chip", element: Chip },
	{ path: "code", element: Code },
	{ path: "divider", element: Divider },
	{ path: "input", element: Input },
	{ path: "kbd", element: Kbd },
	{ path: "link", element: Link },
	{ path: "radio", element: Radio },
	{ path: "switch", element: Switch },
	{ path: "textarea", element: Textarea },
	{ path: "scroll-shadow", element: ScrollShadow },
	{ path: "progress", element: Progress },
	{ path: "spinner", element: Spinner },
	{ path: "image", element: Image },
	{ path: "circular-progress", element: CircularProgress }
];

export { components, docs, Blogs };
