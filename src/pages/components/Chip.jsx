import CodePreview from "../../utils/CodePreview";
import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { ComponentsLinks } from "../../utils/ComponentsLinks";
import { chipCodes } from "../../data/component-codes/chip";

const Chip = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Components", "Chip"]} />
			<article className="prose lg:prose-lg dark:prose-invert">
				<h1 className="my-4">Chip</h1>
				<p>A small block to display important informations.</p>
				<h3 >Usage</h3>
				<CodePreview code={{ lang: "html", code: chipCodes.default }} />
				<h3 >Disabled</h3>
				<CodePreview code={{ lang: "html", code: chipCodes.disabled }} />
				<h3 >Sizes</h3>
				<CodePreview code={{ lang: "html", code: chipCodes.sizes }} />
				<h3 >Colors</h3>
				<CodePreview code={{ lang: "html", code: chipCodes.colors }} />
				<h3 >Radius</h3>
				<CodePreview code={{ lang: "html", code: chipCodes.radius }} />
				<h3 >Variants</h3>
				<CodePreview code={{ lang: "html", code: chipCodes.variants }} />
				<ComponentsLinks
					last={{ link: "../checkbox", text: "Checkbox" }}
					next={{ link: "../code", text: "Code" }}
				/>
			</article>
		</>
	);
};

export default Chip;
