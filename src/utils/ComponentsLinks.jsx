import chevronRight from "../assets/icons/chevron-right.svg";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button"
export const ComponentsLinks = ({ last, next }) => (
	<div
		className={`flex items-center ${
			next && !last ? "justify-end" : "justify-between"
		}`}
	>
		{last && (
			<Button className="py-1.5 text-sm border-2 border-zinc-300 dark:text-white flex rounded-lg items-center gap-1.5 px-3 [&_img]:pointer-events-none [&_img]:scale-[-1] mt-4">
				<img src={chevronRight} />
				<Link to={last.link}>{last.text}</Link>
			</Button>
		)}
		{next && (
			<Button className="py-1.5 text-sm border-2 border-zinc-300 dark:text-white flex rounded-lg items-center gap-1.5 px-3 [&_img]:pointer-events-none mt-4">
				<Link to={next.link}>{next.text}</Link>
				<img src={chevronRight} />
			</Button>
		)}
	</div>
);
