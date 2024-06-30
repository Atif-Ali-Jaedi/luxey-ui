import CodePreview from "../../utils/CodePreview";
import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { ComponentsLinks } from "../../utils/ComponentsLinks";
import { accordionCodes } from "../../data/component-codes/accordion";

const Accordion = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Components", "Accordion"]} />
			<article className="prose lg:prose-lg dark:prose-invert [&_li>span]:text-pink-500 [&_li>span]:font-medium dark:[&_li>span]:text-sky-500 [&_span.class]:text-pink-500 [&_span.class]:font-medium dark:[&_span.class]:text-sky-500">
				<h1 className="my-4">Accordion</h1>
				<p>
					Accordion is a type of menu that displays a list of headers stacked on
					top of one another. When clicked on, these headers will either reveal
					or hide associated content.
				</p>
				<h3>Slots</h3>
				<ul>
					<li>
						<span>accordions</span>: The list of accordions or the wrapper.
					</li>
					<li>
						<span>accordion</span>: The actual accordion which has the header
						and the body.
					</li>
					<li>
						<span>accordion-header</span>: The header of the accordion.
					</li>
					<li>
						<span>accordion-body</span>: The body of the accordion.
					</li>
				</ul>
				<blockquote className="blockquote dark:text-zinc-300">
					<span className="font-medium">Note:</span> The accordion itself hasn't
					set to work if it has accordions inside it yet.
				</blockquote>
				<br />
				<h3>Usage</h3>
				<CodePreview
					code={{
						lang: "html",
						showLineNumbers: true,
						code: accordionCodes.default
					}}
				/>
				<blockquote className="blockquote dark:text-zinc-300">
					<span className="font-medium">Note:</span> Here, you have to use this
					class{" "}
					<span className="class text-[0.925rem]">
						`[&&gt;.accordion:has(.accordion-body.active)&gt;.accordion-header&gt;your
						icon]`
					</span>{" "}
					to be able to animate the anchor icon as your wish.
				</blockquote>
				<br />
				<h3>Expand single items</h3>
				<p>
					If you set the <span className="class">`data-selection-mode`</span> to{" "}
					<span className="class">`single`</span>, then only one accordion can
					be opened at once.
				</p>
				<CodePreview
					code={{
						lang: "html",
						showLineNumbers: true,
						code: accordionCodes.expandSingleItems
					}}
				/>
				<h3>Disabled Accordion(s)</h3>
				<p>
					Give the <span className="class">`data-disabled`</span> attribute to
					make accordion(s) disabled.
				</p>
				<CodePreview
					code={{
						lang: "html",
						showLineNumbers: true,
						code: accordionCodes.disabledAccordion
					}}
				/>
				<h3>Customization</h3>
				<p>Customization is very easy, here's an example.</p>
				<CodePreview
					code={{
						lang: "html",
						showLineNumbers: true,
						code: accordionCodes.customized
					}}
				/>

				<ComponentsLinks
					last={{ link: "../avatar", text: "Avatar" }}
					next={{ link: "../badge", text: "Badge" }}
				/>
			</article>
		</>
	);
};

export default Accordion;
