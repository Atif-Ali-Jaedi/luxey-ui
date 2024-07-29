import { twMerge } from "tailwind-merge";
import { useState } from "react";

export const Tooltip = ({
	tooltip,
	className,
	children,
	parentClassName,
	hasArrow,
	onClick,
	clickMessage
}) => {
	const [clicked, setClicked] = useState(false);
	const [originalTooltip, setTooltip] = useState(tooltip);

	const handleTooltip = () => {
		setClicked(true);
		if (clicked) {
			setTooltip(clickMessage);
			setTimeout(() => {
				setTooltip(tooltip);
				setClicked(false);
			}, 2000);
		}
	};

	return (
		<div
			className={twMerge("group relative", parentClassName)}
			onClick={handleTooltip}
		>
			<div
				className={twMerge(
					`absolute bottom-[calc(100%+0.5em)] left-1/2 -translate-x-1/2 px-2 py-1 rounded-lg shadow-md z-[2] text-sm bg-zinc-50 dark:bg-zinc-900 dark:text-gray-50 origin-bottom opacity-0 scale-50 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:scale-100 transition-all duration-300`,
					hasArrow &&
						"before:content-[''] before:absolute before:border-4 before:border-transparent before:border-t-zinc-50 dark:border-t-zinc-900 before:left-1/2 before:-translate-x-1/2 before:top-full before:origin-top scale-0 group-hover:before:scale-100",
					className
				)}
			>
				{originalTooltip}
			</div>
			{children}
		</div>
	);
};
