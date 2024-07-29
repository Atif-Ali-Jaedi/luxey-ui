import { Chevron } from "@/assets/icons/Chevron";
import { Link } from "react-router-dom";
import { Button } from "@/components/";

export const ComponentsLinks = ({ last, next }) => (
	<div
		className={`flex items-center py-4 ${
			!last ? "justify-end" : "justify-between"
		}`}
	>
		{[last, next].map(
			(item, index) =>
				item && (
					<Link key={index} to={item.link} className="no-underline">
						<Button
							variant="light"
							radius="lg"
							size="sm"
							className="max-h-11 gap-2 w-max"
						>
							{index === 0 ? <Chevron position="left" isGradient /> : null}
							{item.text}
							{index === 1 ? <Chevron isGradient /> : null}
						</Button>
					</Link>
				)
		)}
	</div>
);
