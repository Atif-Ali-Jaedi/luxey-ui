import CodePreview from "../../utils/CodePreview";
import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { ComponentsLinks } from "../../utils/ComponentsLinks";
import { buttonCodes } from "../../data/component-codes/button";

const Button = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Components", "Button"]} />
			<article className="prose lg:prose-lg dark:prose-invert [&_li>span]:text-pink-500 [&_li>span]:font-medium dark:[&_li>span]:text-sky-500 [&_span.class]:text-pink-500 [&_span.class]:font-medium dark:[&_span.class]:text-sky-500">
				<h1 className="my-4">Button</h1>
				<p>Button, looks like a button.</p>
				<h3 >Slots</h3>
				<ul>
					<li>
						<span>button-group</span>: The wrapper of buttons to display a
						group.
					</li>
					<li>
						<span>button</span>: The actual button.
					</li>
				</ul>
				<h3 >Usage</h3>
				<CodePreview code={{ lang: "html", code: buttonCodes.default }} />
				<h3 >Disabled</h3>
				<CodePreview code={{ lang: "html", code: buttonCodes.disabled }} />
				<h3 >Sizes</h3>
				<CodePreview code={{ lang: "html", code: buttonCodes.sizes }} />
				<h3 >Radius</h3>
				<CodePreview code={{ lang: "html", code: buttonCodes.radius }} />
				<h3 >Colors</h3>
				<CodePreview code={{ lang: "html", code: buttonCodes.colors }} />
				<h3 >Variants</h3>
				<CodePreview code={{ lang: "html", code: buttonCodes.variants }} />
				<h3 >Icon only</h3>
				<CodePreview code={{ lang: "html", code: buttonCodes.iconOnly }} />
				<h3 >Button Group</h3>
				<CodePreview code={{ lang: "html", code: buttonCodes.buttonGroup }} />
				<h3 >Custom ripple color</h3>
				<p>To customize the ripple color, you can follow these step.</p>
				<ul>
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
