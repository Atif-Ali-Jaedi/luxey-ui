const navLinks = [
	{ id: 1, name: "Documentation", link: "/docs" },
	{ id: 2, name: "Components", link: "/docs/components/avatar" },
	{ id: 3, name: "Examples", link: "/docs/examples" },
	{ id: 4, name: "Theme", link: "/docs/theme" }
];

const sidebarLinks = [
	...navLinks,
	{ id: 5, name: "Introduction", link: "/docs" },
	{ id: 6, name: "Installation", link: "/docs/installation" },
	{ id: 7, name: "Typography", link: "/docs/typography" },
	{ id: 8, name: "Changelog", link: "/docs/changelog" }
];

const components = [
	{ id: 1, name: "Avatar", link: "/docs/components/avatar", chip: "Updated" },
	{ id: 2, name: "Accordion", link: "/docs/components/accordion", chip: "New" },
	{ id: 3, name: "Badge", link: "/docs/components/badge" },
	{ id: 4, name: "Button", link: "/docs/components/button" },
	{ id: 5, name: "Card", link: "/docs/components/card", chip: "New" },
	{ id: 6, name: "Checkbox", link: "/docs/components/checkbox", chip: "New" },
	{ id: 7, name: "Chip", link: "/docs/components/chip", chip: "Updated" },
	{ id: 8, name: "Code", link: "/docs/components/code" },
	{ id: 9, name: "Divider", link: "/docs/components/divider" },
	{ id: 10, name: "Link", link: "/docs/components/link" },
	{ id: 11, name: "Radio", link: "/docs/components/radio" },
	{ id: 12, name: "Skeleton", link: "/docs/components/skeleton", chip: "New" },
	{ id: 13, name: "Switch", link: "/docs/components/switch" },
	{ id: 14, name: "Textarea", link: "/docs/components/textarea", chip: "New" },
	{ id: 15, name: "User", link: "/docs/components/user" }
];

const faqs = [
	{
		id: 1,
		question: "Can I use LuxeyUI with other CSS frameworks?",
		answer:
			"Yes, LuxeyUI is designed to seamlessly integrate with other CSS frameworks. It plays well with popular frameworks like Bootstrap or Foundation, allowing you to leverage the best of both worlds for your projects."
	},
	{
		id: 2,
		question: "Is LuxeyUI suitable for responsive web design?",
		answer:
			"Absolutely! LuxeyUI is built with responsiveness in mind. All components are designed to adapt gracefully to various screen sizes, ensuring a consistent and visually appealing experience across devices."
	},
	{
		id: 3,
		question: "Does LuxeyUI include dark mode support?",
		answer:
			"No, not yet. But in the future, LuxeyUI will provide out-of-the-box support for dark mode. Then Easily toggle between light and dark themes to enhance user experience and cater to diverse design preferences."
	},
	{
		id: 4,
		question:
			"How frequently is LuxeyUI updated, and is there ongoing support?",
		answer:
			"LuxeyUI is actively maintained, with frequently updates to introduce new features, improvements, and ensure compatibility with the latest web technologies. I'm ready to assist you with any inquiries or issues you may encounter during your development journey."
	}
];

const currentVersion = "0.2.3";

export { sidebarLinks, navLinks, components, faqs, currentVersion };
