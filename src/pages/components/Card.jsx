import CodePreview from "../../utils/CodePreview";
import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { ComponentsLinks } from "../../utils/ComponentsLinks";
import { cardCodes } from "../../data/component-codes/card";

const Card = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Components", "Card"]} />
			<article className="prose lg:prose-lg dark:prose-invert [&_li>span]:text-pink-500 [&_li>span]:font-medium dark:[&_li>span]:text-sky-500">
				<h1 className="my-4">Card</h1>
				<p>
					Card is a wrapper or a container of texts, images or actions inside
					the context of a subject.
				</p>
				<h3>Slots</h3>
				<ul>
					<li>
						<span>card</span>: The main container.
					</li>
					<li>
						<span>card-header</span>: The header of the card for displaying
						title.
					</li>
					<li>
						<span>card-body</span>: The content of the card.
					</li>
					<li>
						<span>card-footer</span>: The actions of the card.
					</li>
				</ul>
				<h3>Usage</h3>
				<CodePreview
					code={{
						lang: "html",
						showLineNumbers: true,
						code: cardCodes.default
					}}
				/>
				<h3>Customization</h3>
				<p>
					To customize the card, design at your own will. Its super easy, here's
					an example.
				</p>
				<h3>Example</h3>
				<CodePreview
					code={{
						lang: "html",
						showLineNumbers: true,
						code: cardCodes.eg
					}}
				/>
				<ComponentsLinks
					last={{ link: "../button", text: "Button" }}
					next={{ link: "../checkbox", text: "Checkbox" }}
				/>
			</article>
		</>
	);
};

export default Card;
