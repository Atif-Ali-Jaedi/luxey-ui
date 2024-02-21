import CodePreview from "../../utils/CodePreview";
import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { ComponentsLinks } from "../../utils/ComponentsLinks";
import { linkCodes } from "../../data/component-codes/link.js";

const Link = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Components", "Link"]} />
			<article className="article">
				<h1 className="h1">Link</h1>
				<p className="lead">
					Link component is styled to resemble a hyperlink for navigating
					between pages.
				</p>
				<h3 className="h3">Usage</h3>
				<CodePreview code={{ lang: "html", code: linkCodes.default }} />
				<h3 className="h3">Disabled</h3>
				<CodePreview code={{ lang: "html", code: linkCodes.disabled }} />
				<h3 className="h3">Sizes</h3>
				<CodePreview code={{ lang: "html", code: linkCodes.sizes }} />
				<h3 className="h3">Colors</h3>
				<CodePreview code={{ lang: "html", code: linkCodes.colors }} />
				<h3 className="h3">Underline</h3>
				<CodePreview code={{ lang: "html", code: linkCodes.underline }} />
				<h3 className="h3">External</h3>
				<p>
					If you set the <span className="class">`target`</span> attribute or{" "}
					<span className="class">`data-show-anchor-icon="true"`</span>{" "}
					attribute it will show an anchor icon.
				</p>
				<CodePreview code={{ lang: "html", code: linkCodes.external }} />
				<h3 className="h3">Block</h3>
				<CodePreview
					code={{ lang: "html", showLineNumbers: true, code: linkCodes.block }}
				/>
				<ComponentsLinks
					last={{ link: "../divider", text: "Divider" }}
					next={{ link: "../radio", text: "Radio" }}
				/>
			</article>
		</>
	);
};

export default Link;
