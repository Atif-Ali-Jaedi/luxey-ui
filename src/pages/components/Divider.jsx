import CodePreview from "../../utils/CodePreview";
import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { ComponentsLinks } from "../../utils/ComponentsLinks";
import { dividerCodes } from "../../data/component-codes/divider";

const Divider = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Components", "Divider"]} />
			<article className="article">
				<h1 className="h1">Divider</h1>
				<p className="lead">A separator for contents.</p>
				<h3 className="h3">Usage</h3>
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
