import { useEffect, useRef } from "react";
import Prism from "prismjs";
import Button from "../components/ui/Button";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/match-braces/prism-match-braces";

const Highlight = ({ language, code, showLineNumbers }) => {
	const codeRef = useRef(null);

	useEffect(() => {
		if (codeRef.current) {
			Prism.highlightElement(codeRef.current);
		}
	}, [code, language]);

	return (
		<div className="relative">
			<pre className={`${showLineNumbers ? "line-numbers" : ""}`}>
				<code
					ref={codeRef}
					className={`language-${language} match-braces rainbow-braces`}
				>
					{code}
				</code>
			</pre>
			<Button
				onClick={() => navigator.clipboard.writeText(code)}
				className="!absolute right-4 top-3 text-white w-6 h-6 grid place-items-center hover:bg-gray-700 rounded transition duration-300"
				rippleClasses="!bg-white/10"
			>
				<svg
					aria-hidden="true"
					fill="none"
					focusable="false"
					role="presentation"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					viewBox="0 0 24 24"
					width="16px"
				>
					<path d="M16 17.1c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9Z"></path>
					<path d="M8 8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16"></path>
					<path d="M16 12.9C16 9.4 14.6 8 11.1 8"></path>
				</svg>
			</Button>
		</div>
	);
};

export default Highlight;
