import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ChevronUp } from "lucide-react";

export const GoToTopBtn = () => {
	const [scrolled, setScrolled] = useState(false);
	window.addEventListener("scroll", () =>
		window.scrollY >= 24 ? setScrolled(true) : setScrolled(false)
	);
	return (
		<Button
			onClick={() => {
				window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
			}}
			variant="light"
			className={`fixed bottom-4 right-4 w-12 h-12 rounded-2xl bg-gray-200/30 dark:bg-gray-500/30 backdrop-blur grid ${
				scrolled
					? "opacity-100 pointer-events-auto"
					: "opacity-0 pointer-events-none"
			}`}
		>
			<ChevronUp className="mix-blend-difference" />
		</Button>
	);
};
