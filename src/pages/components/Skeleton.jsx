import CodePreview from "../../utils/CodePreview";
import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { ComponentsLinks } from "../../utils/ComponentsLinks";
import { skeletonCodes } from "../../data/component-codes/skeleton";

const Skeleton = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Components", "Skeleton"]} />
			<article className="prose lg:prose-lg dark:prose-invert">
				<h1 className="my-4">Skeleton</h1>
				<p>
					Skeleton is a placeholder to show a loading state and the expected
					shape of a component.
				</p>
				<h3>Usage</h3>
				<CodePreview code={{ lang: "html", code: skeletonCodes.default }} />
				<h3>Another example</h3>
				<CodePreview code={{ lang: "html", code: skeletonCodes.eg }} />
				<ComponentsLinks
					last={{ link: "../radio", text: "Radio" }}
					next={{ link: "../switch", text: "Switch" }}
				/>
			</article>
		</>
	);
};

export default Skeleton;
