import CodePreview from "../../utils/CodePreview";
import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { ComponentsLinks } from "../../utils/ComponentsLinks";
import { checkboxCodes } from "../../data/component-codes/checkbox";

const Checkbox = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Components", "Checkbox"]} />
			<article className="article">
				<h1 className="h1">Checkbox</h1>
				<p className="lead">
					Checkboxes are controls that allow users to select multiple items from
					a list of individual items, or to mark one individual item as
					selected.
				</p>
				<h3 className="h3">Slots</h3>
				<ul className="ul">
					<li>
						<span>`checkbox-wrapper`</span>: The checkbox wrapper.
					</li>
					<li>
						<span>`checkbox-icon`</span>: The wrapper which wraps the svg icon
						and checkbox input.
					</li>
					<li>
						<span>`svg`</span>: The icon.
					</li>
					<li>
						<span>`checkbox`</span>: The checkbox input.
					</li>
					<li>
						<span>`checkbox-label`</span>: The text/label for the checkbox.
					</li>
				</ul>
				<h3 className="h3">Usage</h3>
				<CodePreview code={{ lang: "html", code: checkboxCodes.default }} />
				<h3 className="h3">Line through</h3>
				<CodePreview code={{ lang: "html", code: checkboxCodes.lineThrough }} />
				<h3 className="h3">Disabled</h3>
				<CodePreview code={{ lang: "html", code: checkboxCodes.disabled }} />
				<h3 className="h3">Sizes</h3>
				<CodePreview
					code={{
						lang: "html",
						showLineNumbers: true,
						code: checkboxCodes.sizes
					}}
				/>
				<h3 className="h3">Colors</h3>
				<CodePreview
					code={{
						lang: "html",
						showLineNumbers: true,
						code: checkboxCodes.colors
					}}
				/>
				<h3 className="h3">Radius</h3>
				<CodePreview
					code={{
						lang: "html",
						showLineNumbers: true,
						code: checkboxCodes.radius
					}}
				/>
				<h3 className="h3">Customization</h3>
				<p>You can you various classes for customization.</p>
				<CodePreview code={{ lang: "html", code: checkboxCodes.customized }} />
				<ComponentsLinks
					last={{ link: "../card", text: "Card" }}
					next={{ link: "../chip", text: "Chip" }}
				/>
			</article>
		</>
	);
};

export default Checkbox;
