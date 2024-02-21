import { lazy } from "react";

const Avatar = lazy(() => import("./pages/components/Avatar.jsx"));
const Accordion = lazy(() => import("./pages/components/Accordion.jsx"));
const Badge = lazy(() => import("./pages/components/Badge.jsx"));
const Button = lazy(() => import("./pages/components/Button.jsx"));
const Card = lazy(() => import("./pages/components/Card.jsx"));
const Checkbox = lazy(() => import("./pages/components/Checkbox.jsx"));
const Chip = lazy(() => import("./pages/components/Chip.jsx"));
const Code = lazy(() => import("./pages/components/Code.jsx"));
const Divider = lazy(() => import("./pages/components/Divider.jsx"));
const Link = lazy(() => import("./pages/components/Link.jsx"));
const Radio = lazy(() => import("./pages/components/Radio.jsx"));
const Skeleton = lazy(() => import("./pages/components/Skeleton.jsx"));
const Switch = lazy(() => import("./pages/components/Switch.jsx"));
const Textarea = lazy(() => import("./pages/components/Textarea.jsx"));
const User = lazy(() => import("./pages/components/User.jsx"));

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

export { components };
