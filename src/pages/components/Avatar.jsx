import CodePreview from "../../utils/CodePreview";
import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { ComponentsLinks } from "../../utils/ComponentsLinks";
import { avatarCodes } from "../../data/component-codes/avatar";
const Avatar = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Components", "Avatar"]} />
			<article className="prose lg:prose-lg dark:prose-invert [&_li>span]:text-pink-500 [&_li>span]:font-medium dark:[&_li>span]:text-sky-500 [&_span.class]:text-pink-500 [&_span.class]:font-medium dark:[&_span.class]:text-sky-500">
				<h1 className="my-4">Avatar</h1>
				<p>
					The Avatar component is used to represent a user's profile picture,
					initial or fallback icon.
				</p>
				<h3>Slots</h3>
				<ul>
					<li>
						<span>avatar</span>: The main container which includes styles for
						focus ring, position & appearance.
					</li>
					<li>
						<span>img</span>: The image.
					</li>
				</ul>
				<h3>Usage</h3>
				<CodePreview code={{ lang: "html", code: avatarCodes.default }} />
				<h3>Sizes</h3>
				<CodePreview code={{ lang: "html", code: avatarCodes.sizes }} />
				<h3>Disabled</h3>
				<CodePreview code={{ lang: "html", code: avatarCodes.disabled }} />
				<h3>Outlined with Colors</h3>
				<CodePreview
					code={{
						lang: "html",
						showLineNumbers: true,
						code: avatarCodes.outlinedWithColors
					}}
				/>
				<h3>Radius</h3>
				<CodePreview code={{ lang: "html", code: avatarCodes.radius }} />
				<h3>Avatar Fallbacks</h3>
				<p>
					If the <span className="class">`src`</span> is not passed or it's
					empty there are 3 fallbacks.
				</p>
				<ul>
					<li>
						If there is the <span className="class">`alt`</span> attribute, it
						will be used.
					</li>
					<li>If there is nothing, a default fallback icon is used.</li>
					<li>
						To customize the fallback, you can you svgs, images or text inside
						the <span className="class">`data-fallback`</span> attribute.
					</li>
				</ul>
				<CodePreview code={{ lang: "html", code: avatarCodes.fallbacks }} />
				<h3>Avatar group</h3>
				<CodePreview code={{ lang: "html", code: avatarCodes.group }} />
				<h3>Group disabled</h3>
				<CodePreview code={{ lang: "html", code: avatarCodes.groupDisabled }} />
				<h3>Group max count</h3>
				<CodePreview code={{ lang: "html", code: avatarCodes.groupMaxCount }} />
				<h3>Group total count</h3>
				<CodePreview
					code={{ lang: "html", code: avatarCodes.groupTotalCount }}
				/>
				<h3>Group custom count</h3>
				<CodePreview
					code={{ lang: "html", code: avatarCodes.groupCustomCount }}
				/>
				<ComponentsLinks next={{ link: "../accordion", text: "Accordion" }} />
			</article>
		</>
	);
};

export default Avatar;
