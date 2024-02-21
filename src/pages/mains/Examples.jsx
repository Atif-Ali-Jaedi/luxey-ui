import CodePreview from "../../utils/CodePreview";
import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { examples } from "../../data/examples";

const Examples = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Examples"]} />
			<article className="article">
				<h1 className="h1">Examples</h1>
				<p className="lead">
					Some examples which are crafted with the help of luxeyui.
				</p>
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
			</article>
		</>
	);
};

export default Examples;
