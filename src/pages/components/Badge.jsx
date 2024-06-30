import CodePreview from "../../utils/CodePreview";
import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { ComponentsLinks } from "../../utils/ComponentsLinks";
import { badgeCodes } from "../../data/component-codes/badge";

const Badge = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Components", "Badge"]} />
			<article className="prose lg:prose-lg dark:prose-invert [&_li>span]:text-pink-500 [&_li>span]:font-medium dark:[&_li>span]:text-sky-500">
				<h1 className="my-4">Badge</h1>
				<p>Badge is used as a status descriptor for especially avatars.</p>
				<h3>Slots</h3>
				<ul>
					<li>
						<span>badge-container</span>: The container of the badge.
					</li>
					<li>
						<span>badge</span>: The actual badge.
					</li>
				</ul>
				<h3>Usage</h3>
				<CodePreview code={{ lang: "html", code: badgeCodes.default }} />
				<h3>Sizes</h3>
				<CodePreview code={{ lang: "html", code: badgeCodes.sizes }} />
				<h3>Colors</h3>
				<CodePreview
					code={{
						lang: "html",
						showLineNumbers: true,
						code: badgeCodes.colors
					}}
				/>
				<h3>Variants</h3>
				<CodePreview
					code={{
						lang: "html",
						showLineNumbers: true,
						code: badgeCodes.variants
					}}
				/>
				<h3>Placements</h3>
				<CodePreview
					code={{
						lang: "html",
						showLineNumbers: true,
						code: badgeCodes.placements
					}}
				/>
				<h3>No outline</h3>
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
