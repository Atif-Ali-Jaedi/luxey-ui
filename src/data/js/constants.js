import { Customize } from "@/assets";
import {
	SwatchBook,
	Moon,
	Puzzle,
	Codepen,
	Instagram,
	Twitter,
	Github
} from "lucide-react";
import { Icodethis } from "@/assets";

const currentVersion = "0.5.2";

const navLinks = [
	{ id: 1, name: "Documentation", link: "/docs" },
	{ id: 2, name: "Components", link: "/docs/components/avatar" },
	{ id: 3, name: "Blog", link: "/blog" },
	{ id: 4, name: "Theme", link: "/docs/theme" },
	{ id: 5, name: "Changelog", link: "/docs/changelog" }
];

const components = [
	{ name: "Avatar", link: "/docs/components/avatar" },
	{ name: "Accordion", link: "/docs/components/accordion", chip: "Updated" },
	{ name: "Badge", link: "/docs/components/badge" },
	{ name: "Button", link: "/docs/components/button" },
	{ name: "Card", link: "/docs/components/card" },
	{ name: "Checkbox", link: "/docs/components/checkbox" },
	{
		name: "Checkbox Group",
		link: "/docs/components/checkbox-group"
	},
	{ name: "Chip", link: "/docs/components/chip" },
	{
		name: "Circular Progress",
		link: "/docs/components/circular-progress",
		chip: "New"
	},
	{ name: "Code", link: "/docs/components/code" },
	{ name: "Divider", link: "/docs/components/divider" },
	{ name: "Image", link: "/docs/components/image", chip: "New" },
	{ name: "Input", link: "/docs/components/input" },
	{ name: "Kbd", link: "/docs/components/kbd" },
	{ name: "Link", link: "/docs/components/link" },
	{ name: "Progress", link: "/docs/components/progress" },
	{ name: "Radio", link: "/docs/components/radio" },
	{ name: "Skeleton", link: "/docs/components/skeleton", chip: "Updated" },
	{
		name: "Scroll Shadow",
		link: "/docs/components/scroll-shadow"
	},
	{ name: "Spinner", link: "/docs/components/spinner", chip: "New" },
	{ name: "Switch", link: "/docs/components/switch" },
	{ name: "Textarea", link: "/docs/components/textarea" },
	{ name: "User", link: "/docs/components/user" }
];

const sidebarLinks = [
	{ type: "normal", name: "Documentation", link: "/docs" },
	{ type: "normal", name: "Components", link: "/docs/components/avatar" },
	{ type: "normal", name: "Blog", link: "/blog" },

	{ type: "normal", name: "Introduction", link: "/docs" },
	{ type: "normal", name: "Installation", link: "/docs/installation" },
	{ type: "normal", name: "Typography", link: "/docs/typography" },

	{ type: "normal", name: "Theme", link: "/docs/theme" },
	{ type: "normal", name: "Dark Mode", link: "/docs/dark-mode" },
	{ type: "normal", name: "Override Styles", link: "/docs/override-styles" },
	{ type: "normal", name: "Custom Variants", link: "/docs/custom-variants" },
	{ type: "normal", name: "Changelog", link: "/docs/changelog" },

	...components
];

const faqs = [
	{
		id: 1,
		question: "Can I use LuxeyUI with other CSS frameworks?",
		answer: "Yes, LuxeyUI is designed to seamlessly integrate with other CSS frameworks. It plays well with popular frameworks like Bootstrap or Foundation, allowing you to leverage the best of both worlds for your projects."
	},
	{
		id: 2,
		question: "Is LuxeyUI suitable for responsive web design?",
		answer: "Absolutely! LuxeyUI is built with responsiveness in mind. All components are designed to adapt gracefully to various screen sizes, ensuring a consistent and visually appealing experience across devices."
	},
	{
		id: 3,
		question: "Does LuxeyUI include dark mode support?",
		answer: "Yes it does. LuxeyUI provides out-of-the-box support for dark mode. Then Easily toggle between light and dark themes to enhance user experience and cater to diverse design preferences."
	},
	{
		id: 4,
		question:
			"How frequently is LuxeyUI updated, and is there ongoing support?",
		answer: "LuxeyUI is actively maintained, with frequently updates to introduce new features, improvements, and ensure compatibility with the latest web technologies. We're ready to assist you with any inquiries or issues you may encounter during your development journey."
	}
];

const features = [
	{
		id: 1,
		name: "Easily Customizable",
		text: "Customize components effortlessly to match your project's design with ease.",
		icon: Customize
	},
	{
		id: 2,
		name: "Simple & Beautifully crafted",
		text: "Enjoy a clean and visually appealing design for seamless user experiences.",
		icon: SwatchBook
	},
	{
		id: 3,
		name: "Works with Almost Every Libraries & Frameworks",
		text: "Integrate seamlessly with popular libraries and frameworks for maximum flexibility.",
		icon: Puzzle
	},
	{
		id: 4,
		name: "Dark Mode out of the box",
		text: "Enhance readability and reduce eye strain with a sleek and modern dark mode option.",
		icon: Moon
	}
];

const footerLinks = [
	{ id: 1, name: "Home", link: "/" },
	{ id: 2, name: "Documentation", link: "/docs" },
	{ id: 3, name: "Components", link: "/docs/components/avatar" },
	{ id: 4, name: "Installation", link: "/docs/installation" },

	{ id: 5, name: "Theme", link: "/docs/theme" },
	{ id: 6, name: "Typography", link: "/docs/typography" },
	{ id: 7, name: "Examples", link: "/docs/examples" },
	{ id: 8, name: "Changelog", link: "/docs/changelog" },
	{ id: 9, name: "Blog", link: "/blog" }
];

const details = [
	{
		id: 1,
		title: "customization",
		heading: "Revolutionize Your Design Workflow",
		text: "Discover how our UI library empowers developers to create stunning interfaces with ease. Say goodbye to tedious customization processes and hello to streamlined design workflows.",
		cta: "Start Exploring",
		link: "./docs/components/avatar"
	},
	{
		id: 2,
		title: "theme",
		heading: "Embrace the Dark Side: Introducing Dark Mode",
		text: "Dive into a new dimension of user experience with our sleek and immersive dark mode feature. Enhance readability, reduce eye strain, and captivate users with modern, stylish designs.",
		cta: "Try dark mode",
		link: "./blog/Introduction to dark mode"
	},
	{
		id: 3,
		title: "simplification",
		heading: "Simplify Styling with Class-based Architecture",
		text: "Experience the future of frontend development with our class-based architecture. Say farewell to cluttered code and embrace simplicity as you effortlessly customize components using intuitive classes."
	}
];

const socialMedia = [
	{ id: 1, Icon: Codepen, link: "https://codepen.io/Atif_Ali_Jaedi" },
	{ id: 2, Icon: Instagram, link: "https://instagram.com/atif_ali_jaedi" },
	{ id: 3, Icon: Twitter, link: "https://twitter.com/atif_ali_jaedi" },
	{ id: 4, Icon: Icodethis, link: "https://icodethis.com/Tahsin" },
	{ id: 5, link: "https://github.com/Atif-Ali-Jaedi", Icon: Github }
];

export {
	sidebarLinks,
	navLinks,
	components,
	faqs,
	currentVersion,
	features,
	details,
	footerLinks,
	socialMedia
};
