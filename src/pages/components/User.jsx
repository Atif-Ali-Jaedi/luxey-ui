import CodePreview from "../../utils/CodePreview";
import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { ComponentsLinks } from "../../utils/ComponentsLinks";
import { userCodes } from "../../data/component-codes/user";

const User = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Components", "User"]} />
			<article className="prose lg:prose-lg dark:prose-invert [&_li>span]:text-pink-500 [&_li>span]:font-medium dark:[&_li>span]:text-sky-500 [&_span.class]:text-pink-500 [&_span.class]:font-medium dark:[&_span.class]:text-sky-500">
				<h1 className="h1 my-2">User</h1>
				<p>
					Display user information with avatar and name and description.
				</p>
				<h3>Slots</h3>
				<ul>
					<li>
						<span>user</span>: The main user container.
					</li>
					<li>
						<span>user-info</span>: The name & description info.
					</li>
					<li>
						<span>name</span>: The name of the user.
					</li>
					<li>
						<span>description</span>: The description of the user.
					</li>
				</ul>
				<CodePreview code={{ lang: "html", code: userCodes.default }} />
				<h3>Customization</h3>
				<p>
					To customize, you can use tailwind classes. For customizing the style
					that is already used like <span className="class">`ml-2`</span>, you
					have to use the <span className="class">`!`</span> before the class
					names if you use tailwind classes or{" "}
					<span className="class">`!important`</span> if you use css properties.
				</p>
				<CodePreview code={{ lang: "html", code: userCodes.customized }} />
				<ComponentsLinks last={{ link: "../textarea", text: "Textarea" }} />
			</article>
		</>
	);
};

export default User;
