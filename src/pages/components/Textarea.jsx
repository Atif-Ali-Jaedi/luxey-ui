import CodePreview from "../../utils/CodePreview";
import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { ComponentsLinks } from "../../utils/ComponentsLinks";
import { textareaCodes } from "../../data/component-codes/textarea";

const Textarea = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Components", "Textarea"]} />
			<article className="article">
				<h1 className="h1">Textarea</h1>
				<p className="lead">A multi line input for writing text.</p>
				<h3 className="h3">Slots</h3>
				<ul className="ul">
					<li>
						<span>textarea-outerbox</span>: The outer box of the component.
					</li>
					<li>
						<span>label</span>: The label to use outline the inner box.
					</li>
					<li>
						<span>textarea-innerbox</span>: The innerbox for holding label and
						the text area.
					</li>
					<li>
						<span>label</span>: The label for the textarea.
					</li>
					<li>
						<span>textarea</span>: The text area.
					</li>
				</ul>
				<h3 className="h3">Usage</h3>
				<CodePreview code={{ lang: "html", code: textareaCodes.default }} />
				<h3 className="h3">Disabled</h3>
				<CodePreview code={{ lang: "html", code: textareaCodes.disabled }} />
				<h3 className="h3">Autosize</h3>
				<CodePreview code={{ lang: "html", code: textareaCodes.autoSize }} />
				<h3 className="h3">Without autosize</h3>
				<p>
					Set the <span className="class">`data-autosize`</span> of the textarea
					to <span className="class">`false`</span> of you want without
					autosize.
				</p>
				<CodePreview
					code={{ lang: "html", code: textareaCodes.withoutAutosize }}
				/>
				<h3 className="h3">Variants</h3>
				<CodePreview code={{ lang: "html", code: textareaCodes.variants }} />
				<h3 className="h3">Invalid</h3>
				<CodePreview code={{ lang: "html", code: textareaCodes.invalid }} />
				<ComponentsLinks
					last={{ link: "../switch", text: "Switch" }}
					next={{ link: "../user", text: "User" }}
				/>
			</article>
		</>
	);
};

export default Textarea;
