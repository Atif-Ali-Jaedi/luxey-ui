import { lazy, Suspense } from "react";
import { Breadcrumbs } from "../../utils/Breadcrumbs";

const Timeline = lazy(() =>
	import("../../components/ui/Timeline.jsx").then(module => {
		return { default: module.Timeline };
	})
);

const Installation = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Installation"]} />
			<h1 className="h1 !font-bold my-2 dark:text-white">Installation</h1>
			<p className="text-gray-500 max-w-[60ch] dark:text-zinc-300">
				CDN is the best way to use the library for now.
			</p>
			<br />
			<Suspense fallback="Loading...">
				<Timeline
					data={[
						{
							id: 1,
							heading: "Create an boilerplate",
							text: "Start by creating the basic HTML template.",
							code: {
								lang: "html",
								showLineNumbers: true,
								code: `<!DOCTYPE html>
<html lang="en">
	<head>
	<meta charset="UTF-8" />
  	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
  	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
  	<title>LuxeyUI Project</title>
	</head>
	<body></body>
</html>`
							}
						},
						{
							id: 2,
							heading: "Add the link & script tag",
							text: "Add the stylesheet and the script inside the head tag, as following. Note that the script should be before every scripts you use and the defer attribute won't be needed if you add before the end of the body tag.",
							code: {
								lang: "html",
								code: `<link rel="stylesheet"href="https://cdn.jsdelivr.net/npm/luxeyui@0.2.1/dist/all.min.css" />
<!-- Utilize the Tailwind CDN for better customization -->
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdn.jsdelivr.net/npm/luxeyui@0.2.1/dist/all.min.js" defer></script>`
							}
						},
						{
							id: 3,
							heading: "That's it",
							text: "Now you can start using components.",
							code: {
								lang: "html",
								code: `<button class="button primary">Button</button>`
							}
						}
					]}
				/>
			</Suspense>
		</>
	);
};

export default Installation;
