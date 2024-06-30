import CodePreview from "../../utils/CodePreview";
import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { examples } from "../../data/examples";

const Examples = () => {
	return (
		<>
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
