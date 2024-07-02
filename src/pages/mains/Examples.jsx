import CodePreview from "../../utils/CodePreview";
import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { examples } from "../../data/examples";
import { Helmet } from "react-helmet-async";
const Examples = () => {
	return (
		<>
			<Helmet>
				<title>
					Examples | LuxeyUI - Elevate your design effortlessly and quickly
				</title>
				<meta
					name="description"
					content="Check out some beautifully crafted examples using LuxeyUI components."
				/>
			</Helmet>
			<Breadcrumbs data={["Docs", "Examples"]} />
			<article className="prose lg:prose-lg dark:prose-invert">
				<h1 className="my-4">Examples</h1>
				<p>Some examples which are crafted with the help of luxeyui.</p>
			</article>
			<CodePreview
				code={{
					lang: "html",
					showLineNumbers: true,
					code: examples.notificationSettings
				}}
			/>
			<CodePreview
				code={{
					lang: "html",
					showLineNumbers: true,
					code: examples.selectPlan
				}}
			/>
		</>
	);
};

export default Examples;
