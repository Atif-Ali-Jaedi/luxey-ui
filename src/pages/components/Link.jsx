import CodePreview from "../../utils/CodePreview";
import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { ComponentsLinks } from "../../utils/ComponentsLinks";
import { linkCodes } from "../../data/component-codes/link.js";

const Link = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Components", "Link"]} />
			<article className="prose lg:prose-lg dark:prose-invert [&_li>span]:text-pink-500 [&_li>span]:font-medium dark:[&_li>span]:text-sky-500 [&_span.class]:text-pink-500 [&_span.class]:font-medium dark:[&_span.class]:text-sky-500">
				<h1 className="my-4">Link</h1>
				<p >
					Link component is styled to resemble a hyperlink for navigating
					between pages.
				</p>
				<h3 >Usage</h3>
				<CodePreview code={{ lang: "html", code: linkCodes.default }} />
				<h3 >Disabled</h3>
				<CodePreview code={{ lang: "html", code: linkCodes.disabled }} />
				<h3 >Sizes</h3>
				<CodePreview code={{ lang: "html", code: linkCodes.sizes }} />
				<h3 >Colors</h3>
				<CodePreview code={{ lang: "html", code: linkCodes.colors }} />
				<h3 >Underline</h3>
				<CodePreview code={{ lang: "html", code: linkCodes.underline }} />
				<h3 >External</h3>
				<p>
					If you set the <span className="class">`target`</span> attribute or{" "}
					<span className="class">`data-show-anchor-icon="true"`</span>{" "}
					attribute it will show an anchor icon.
				</p>
				<CodePreview code={{ lang: "html", code: linkCodes.external }} />
				<h3 >Block</h3>
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
