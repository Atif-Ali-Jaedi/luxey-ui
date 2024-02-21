import CodePreview from "../../utils/CodePreview";
import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { ComponentsLinks } from "../../utils/ComponentsLinks";
import { switchCodes } from "../../data/component-codes/switch";

const Switch = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Components", "Switch"]} />
			<article className="article">
				<h1 className="h1">Switch</h1>
				<p className="lead">
					Switch is used to toggle between checked & not checked.
				</p>
				<h3 className="h3">Usage</h3>
				<CodePreview code={{ lang: "html", code: switchCodes.default }} />
				<h3 className="h3">Disabled</h3>
				<CodePreview code={{ lang: "html", code: switchCodes.disabled }} />
				<h3 className="h3">Sizes</h3>
				<CodePreview code={{ lang: "html", code: switchCodes.sizes }} />
				<h3 className="h3">Colors</h3>
				<CodePreview code={{ lang: "html", code: switchCodes.colors }} />
				<ComponentsLinks
					last={{ link: "../skeleton", text: "Skeleton" }}
					next={{ link: "../textarea", text: "Textarea" }}
				/>
			</article>
		</>
	);
};

export default Switch;
