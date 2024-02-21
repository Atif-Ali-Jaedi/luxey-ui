import CodePreview from "../../utils/CodePreview";
import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { ComponentsLinks } from "../../utils/ComponentsLinks";
import { codeCodes } from "../../data/component-codes/code";

const Code = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Components", "Code"]} />
			<article className="article">
				<h1 className="h1">Code</h1>
				<p className="lead">
					Code is a component which is used for displaying an inline code.
				</p>
				<h3 className="h3">Usage</h3>
				<CodePreview code={{ lang: "html", code: codeCodes.default }} />
				<h3 className="h3">Sizes</h3>
				<CodePreview code={{ lang: "html", code: codeCodes.sizes }} />
				<h3 className="h3">Colors</h3>
				<CodePreview code={{ lang: "html", code: codeCodes.colors }} />
				<ComponentsLinks
					last={{ link: "../chip", text: "Chip" }}
					next={{ link: "../divider", text: "Divider" }}
				/>
			</article>
		</>
	);
};

export default Code;
