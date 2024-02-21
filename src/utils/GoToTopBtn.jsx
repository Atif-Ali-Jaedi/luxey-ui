import { useState } from "react";
import Button from "../components/ui/Button";

export const GoToTopBtn = () => {
	const [scrolled, setScrolled] = useState(false);
	window.addEventListener("scroll", () =>
		window.scrollY >= 24 ? setScrolled(true) : setScrolled(false)
	);
	return (
		<Button
			rippleClasses="dark:bg-white/5 bg-black/2.5"
			onClick={() => {
				window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
			}}
			className={`!fixed transition-all duration-200 active:scale-95 bottom-4 right-4 w-12 h-12 rounded-2xl dark:bg-gray-500/30 bg-gray-200/30 backdrop-blur grid place-items-center ${
				scrolled
					? "opacity-100 pointer-events-auto"
					: "opacity-0 pointer-events-none"
			}`}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 21 21"
				className="w-6 -rotate-90 dark:[&_path]:stroke-white [&_path]:stroke-black"
			>
				<path
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="m9.5 14.5l4-4l-4-4"
					strokeWidth="1.5"
				/>
			</svg>
		</Button>
	);
};
