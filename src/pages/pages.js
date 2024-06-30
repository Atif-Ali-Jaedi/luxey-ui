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
const Link = lazy(() => import("./components/Link.jsx"));
const Radio = lazy(() => import("./components/Radio.jsx"));
const Skeleton = lazy(() => import("./components/Skeleton.jsx"));
const Switch = lazy(() => import("./components/Switch.jsx"));
const Textarea = lazy(() => import("./components/Textarea.jsx"));
const User = lazy(() => import("./components/User.jsx"));

const Introduction = lazy(() => import("./mains/docs/Introduction.mdx"));
const Installation = lazy(() => import("./mains/docs/Installation.mdx"));
const Theme = lazy(() => import("./mains/Theme.jsx"));
const Changelog = lazy(() => import("./mains/docs/Changelog.mdx"));
const Typography = lazy(() => import("./mains/docs/Typography.mdx"));
const Examples = lazy(() => import("./mains/Examples.jsx"));

const docs = [
	{ id: 101, index: true, element: Introduction },
	{ id: 102, path: "installation", element: Installation },
	{ id: 103, path: "theme", element: Theme },
	{ id: 104, path: "changelog", element: Changelog },
	{ id: 105, path: "typography", element: Typography },
	{ id: 106, path: "examples", element: Examples }
];

const components = [
	{ id: 1, path: "avatar", element: Avatar },
	{ id: 2, path: "user", element: User },
	{ id: 3, path: "skeleton", element: Skeleton },
	{ id: 4, path: "card", element: Card },
	{ id: 5, path: "accordion", element: Accordion },
	{ id: 6, path: "badge", element: Badge },
	{ id: 7, path: "button", element: Button },
	{ id: 8, path: "checkbox", element: Checkbox },
	{ id: 9, path: "chip", element: Chip },
	{ id: 10, path: "code", element: Code },
	{ id: 11, path: "divider", element: Divider },
	{ id: 12, path: "link", element: Link },
	{ id: 13, path: "radio", element: Radio },
	{ id: 14, path: "switch", element: Switch },
	{ id: 15, path: "textarea", element: Textarea }
];

export { components, docs };
