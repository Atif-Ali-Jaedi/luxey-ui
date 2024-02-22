import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { Changes } from "../../components/ui/Changes";

const Changelog = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Changelog"]} />
			<article>
				<h1 className="h1 !font-bold dark:text-white mt-2 mb-4">Changelog</h1>
				<p className="text-zinc-500 dark:text-zinc-400">
					Here, you can find all the changes that have been made for each
					versions. But super small updates won't be listed here.
				</p>
			</article>
			<article className="dark:text-zinc-50 pb-8 mb-4 border-b border-zinc-600">
				<Changes
					version="0.2.1"
					date="February 21, 2024"
					heading="Improved collections & fixed components & website"
					text="Big update. Although added only 5 components, and fixed 2 components, added an entire website for showcase."
				>
					<strong>Added</strong>
					<ul className="ul">
						<li>Website</li>
						<li>Accordion</li>
						<li>Card</li>
						<li>Checkbox</li>
						<li>Skeleton</li>
						<li>Textarea</li>
					</ul>
					<strong>Fixed</strong>
					<ul className="ul">
						<li>Avatar</li>
						<li>Chip</li>
					</ul>
				</Changes>
				<Changes
					version="0.1.0"
					date="January 5, 2024"
					heading="Improved collections & more"
					text="This is a medium update, neither too big nor too small. There is some issues with some components but will be fixed in the next update."
				>
					<strong>Added</strong>
					<ul className="my-3 ml-6 list-disc [&>li]:mt-2">
						<li>9 More Components</li>
						<li>Badge</li>
						<li>Button</li>
						<li>Chips</li>
						<li>Code</li>
						<li>Divider</li>
						<li>Link</li>
						<li>Radio</li>
						<li>Switch</li>
						<li>User</li>
					</ul>
				</Changes>
				<Changes
					version="0.0.1"
					date="December 29, 2023"
					heading="First testing"
					text="First version was only for testings. There was not many things."
				>
					<strong>Added</strong>
					<ul className="my-3 ml-6 list-disc [&>li]:mt-2">
						<li>Customization</li>
						<li>Theme</li>
						<li>First Component - Avatar</li>
					</ul>
				</Changes>
			</article>
		</>
	);
};

export default Changelog;
