import CodePreview from "../../utils/CodePreview";
import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { ComponentsLinks } from "../../utils/ComponentsLinks";
import { dividerCodes } from "../../data/component-codes/divider";

const Divider = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Components", "Divider"]} />
			<article className="prose lg:prose-lg dark:prose-invert">
				<h1 className="my-4">Divider</h1>
				<p >A separator for contents.</p>
				<h3 >Usage</h3>
				<p>You have to set a height to the parent or to the divider itself when the orientation is vertical.</p>
				<CodePreview code={{ lang: "html", code: dividerCodes.default }} />
				<ComponentsLinks
					last={{ link: "../code", text: "Code" }}
					next={{ link: "../link", text: "Link" }}
				/>
			</article>
		</>
	);
};

export default Divider;
