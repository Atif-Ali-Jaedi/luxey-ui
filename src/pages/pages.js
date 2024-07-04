import { lazy } from "react";

const Avatar = lazy(() => import("./components/Avatar.jsx"));
const Accordion = lazy(() => import("./components/Accordion.jsx"));
const Badge = lazy(() => import("./components/Badge.jsx"));
const Button = lazy(() => import("./components/Button.jsx"));
const Card = lazy(() => import("./components/Card.jsx"));
const Checkbox = lazy(() => import("./components/Checkbox.jsx"));
const Chip = lazy(() => import("./components/Chip.jsx"));
const Code = lazy(() => import("./components/Code.jsx"));
const Divider = lazy(() => import("./components/Divider.jsx"));
const Input = lazy(() => import("./components/Input.mdx"));
const Link = lazy(() => import("./components/Link.jsx"));
const Radio = lazy(() => import("./components/Radio.jsx"));
const Skeleton = lazy(() => import("./components/Skeleton.jsx"));
const Switch = lazy(() => import("./components/Switch.jsx"));
const Textarea = lazy(() => import("./components/Textarea.jsx"));
const User = lazy(() => import("./components/User.jsx"));

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
	{ path: "chip", element: Chip },
	{ path: "code", element: Code },
	{ path: "divider", element: Divider },
	{ path: "link", element: Link },
	{ path: "radio", element: Radio },
	{ path: "switch", element: Switch },
	{ path: "textarea", element: Textarea },
	{ path: "input", element: Input }
];

export { components, docs, Blogs };
