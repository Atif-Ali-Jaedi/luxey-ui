import CodePreview from "../../utils/CodePreview";
import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { ComponentsLinks } from "../../utils/ComponentsLinks";
import { radioCodes } from "../../data/component-codes/radio";

const Radio = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Components", "Radio"]} />
			<article className="prose lg:prose-lg dark:prose-invert [&_li>span]:text-pink-500 [&_li>span]:font-medium dark:[&_li>span]:text-sky-500 [&_span.class]:text-pink-500 [&_span.class]:font-medium dark:[&_span.class]:text-sky-500">
				<h1 className="my-4">Radio</h1>
				<p>
					Radio buttons—where only one of the buttons can be checked or
					selected.
				</p>
				<h3 >Slots</h3>
				<ul >
					<li>
						<span>radio-group</span>: The container of the radios.
					</li>
					<li>
						<span>radio-group-label</span>: The label of the radio-group.
					</li>
					<li>
						<span>radios</span>: The wrapper of the radio elements.
					</li>
					<li>
						<span>radio</span>: The radio box.
					</li>
					<li>
						<span>input:radio</span>: The radio input
					</li>
					<li>
						<span>radio-label</span>: The label of the radio input
					</li>
					<li>
						<span>description</span>: The description of the radio input
					</li>
				</ul>
				<blockquote className="blockquote">
					<span className="font-medium">Note:</span> You can you the{" "}
					<span className="class">`.radio`</span> separately without needing the{" "}
					<span className="class">`.radio-group`</span>
				</blockquote>
				<br />
				<h3 >Usage</h3>
				<CodePreview code={{ lang: "html", code: radioCodes.default }} />
				<h3 >Disabled</h3>
				<CodePreview code={{ lang: "html", code: radioCodes.disabled }} />
				<h3 >With description</h3>
				<CodePreview
					code={{ lang: "html", code: radioCodes.withDescription }}
				/>
				<h3 >Horizontal</h3>
				<CodePreview code={{ lang: "html", code: radioCodes.horizontal }} />
				<h3 >Invalid</h3>
				<CodePreview code={{ lang: "html", code: radioCodes.invalid }} />
				<h3 >Colors</h3>
				<CodePreview code={{ lang: "html", code: radioCodes.colors }} />
				<ComponentsLinks
					last={{ link: "../link", text: "Link" }}
					next={{ link: "../skeleton", text: "Skeleton" }}
				/>
			</article>
		</>
	);
};

export default Radio;
