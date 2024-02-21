import CodePreview from "../../utils/CodePreview";
import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { ComponentsLinks } from "../../utils/ComponentsLinks";
import { buttonCodes } from "../../data/component-codes/button";

const Button = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Components", "Button"]} />
			<article className="article">
				<h1 className="h1">Button</h1>
				<p className="lead">Button, looks like a button.</p>
				<h3 className="h3">Slots</h3>
				<ul className="ul">
					<li>
						<span>button-group</span>: The wrapper of buttons to display a
						group.
					</li>
					<li>
						<span>button</span>: The actual button.
					</li>
				</ul>
				<h3 className="h3">Usage</h3>
				<CodePreview code={{ lang: "html", code: buttonCodes.default }} />
				<h3 className="h3">Disabled</h3>
				<CodePreview code={{ lang: "html", code: buttonCodes.disabled }} />
				<h3 className="h3">Sizes</h3>
				<CodePreview code={{ lang: "html", code: buttonCodes.sizes }} />
				<h3 className="h3">Radius</h3>
				<CodePreview code={{ lang: "html", code: buttonCodes.radius }} />
				<h3 className="h3">Colors</h3>
				<CodePreview code={{ lang: "html", code: buttonCodes.colors }} />
				<h3 className="h3">Variants</h3>
				<CodePreview code={{ lang: "html", code: buttonCodes.variants }} />
				<h3 className="h3">Icon only</h3>
				<CodePreview code={{ lang: "html", code: buttonCodes.iconOnly }} />
				<h3 className="h3">Button Group</h3>
				<CodePreview code={{ lang: "html", code: buttonCodes.buttonGroup }} />
				<h3 className="h3">Custom ripple color</h3>
				<p>To customize the ripple color, you can follow these step.</p>
				<ul className="ul">
					<li>
						For example, use <span className="class">`data-ripple-color`</span>{" "}
						attribute to set a color.
					</li>
					<li>Or customize the ripple class.</li>
				</ul>
				<CodePreview code={{ lang: "html", code: buttonCodes.crc }} />
				<ComponentsLinks
					last={{ link: "../badge", text: "Badge" }}
					next={{ link: "../card", text: "Card" }}
				/>
			</article>
		</>
	);
};

export default Button;
