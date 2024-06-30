import CodePreview from "../../utils/CodePreview";
import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { ComponentsLinks } from "../../utils/ComponentsLinks";
import { switchCodes } from "../../data/component-codes/switch";

const Switch = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Components", "Switch"]} />
			<article className="prose lg:prose-lg dark:prose-invert ">
				<h1 className="my-4">Switch</h1>
				<p>
					Switch is used to toggle between checked & not checked.
				</p>
				<h3 >Usage</h3>
				<CodePreview code={{ lang: "html", code: switchCodes.default }} />
				<h3 >Disabled</h3>
				<CodePreview code={{ lang: "html", code: switchCodes.disabled }} />
				<h3 >Sizes</h3>
				<CodePreview code={{ lang: "html", code: switchCodes.sizes }} />
				<h3 >Colors</h3>
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
