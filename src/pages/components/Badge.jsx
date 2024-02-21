import CodePreview from "../../utils/CodePreview";
import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { ComponentsLinks } from "../../utils/ComponentsLinks";
import { badgeCodes } from "../../data/component-codes/badge";

const Badge = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Components", "Badge"]} />
			<article className="article">
				<h1 className="h1">Badge</h1>
				<p className="lead">
					Badge is used as a status descriptor for especially avatars.
				</p>
				<h3 className="h3">Slots</h3>
				<ul className="ul">
					<li>
						<span>badge-container</span>: The container of the badge.
					</li>
					<li>
						<span>badge</span>: The actual badge.
					</li>
				</ul>
				<h3 className="h3">Usage</h3>
				<CodePreview code={{ lang: "html", code: badgeCodes.default }} />
				<h3 className="h3">Sizes</h3>
				<CodePreview code={{ lang: "html", code: badgeCodes.sizes }} />
				<h3 className="h3">Colors</h3>
				<CodePreview
					code={{
						lang: "html",
						showLineNumbers: true,
						code: badgeCodes.colors
					}}
				/>
				<h3 className="h3">Variants</h3>
				<CodePreview
					code={{
						lang: "html",
						showLineNumbers: true,
						code: badgeCodes.variants
					}}
				/>
				<h3 className="h3">Placements</h3>
				<CodePreview
					code={{
						lang: "html",
						showLineNumbers: true,
						code: badgeCodes.placements
					}}
				/>
				<h3 className="h3">No outline</h3>
				<CodePreview code={{ lang: "html", code: badgeCodes.noOutline }} />
				<ComponentsLinks
					last={{ link: "../accordion", text: "Accordion" }}
					next={{ link: "../button", text: "Button" }}
				/>
			</article>
		</>
	);
};

export default Badge;
