import { Button, Tooltip } from "@/components";
import { Copy } from "lucide-react";
import Prism from "prismjs";
import { useEffect, useRef } from "react";

import "prismjs/components/prism-bash";
import "prismjs/components/prism-diff";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/match-braces/prism-match-braces";

const Highlight = ({
	language,
	code,
	showLineNumbers,
	disableCopyBtn,
	className,
	header,
}) => {
	const codeRef = useRef(null);

	useEffect(() => {
		if (codeRef.current) {
			Prism.highlightElement(codeRef.current);
		}
	}, [code, language]);

	return (
		<div
			className={`border border-transparent not-prose ${
				className ? className : ""
			}`}
		>
			{header && (
				<header className="flex items-center gap-4 rounded-t-xl bg-[#353742] px-4">
					<div className="flex items-center gap-2">
						{[1, 2, 3].map((i) => (
							<div
								key={i}
								className={`size-3 rounded-full ${
									i == 1
										? "bg-red-400"
										: i == 2
											? "bg-yellow-400"
											: "bg-green-400"
								}`}
							></div>
						))}
					</div>
					<div className="flex items-center gap-2 bg-[--background] py-2.5 pl-3.5 rounded-t-lg mt-1.5 pr-5 text-sm text-gray-100 relative before:content-[''] before:absolute before:-right-2 before:bottom-0 before:size-2 before:bg-[#353742] before:rounded-bl-xl before:shadow-[-2px_2px_var(--background)] after:content-[''] after:absolute after:-left-2 after:bottom-0 after:size-2 after:bg-[#353742] after:rounded-br-xl after:shadow-[2px_2px_var(--background)]">
						<img
							src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${
								header.fileType === "html"
									? "html5"
									: header.fileType === "css"
										? "css3"
										: header.fileType
							}/${
								header.fileType === "html"
									? "html5"
									: header.fileType === "css"
										? "css3"
										: header.fileType
							}-original.svg`}
							className="w-4 !my-0"
						/>
						{header.fileName}.{header.fileType}
					</div>
				</header>
			)}
			<div className="relative">
				<pre
					className={`${showLineNumbers ? "line-numbers" : ""} ${
						header ? "!rounded-t-none" : ""
					}`}
				>
					<code
						ref={codeRef}
						className={`language-${language} match-braces rainbow-braces`}
					>
						{code}
					</code>
				</pre>
				{!disableCopyBtn && (
					<Tooltip
						tooltip="Copy"
						hasArrow
						clickMessage="Copied"
						parentClassName="absolute top-2 right-2"
					>
						<Button
							onClick={() => navigator.clipboard.writeText(code)}
							variant="light"
							className="text-white active:scale-100 p-0 w-8 h-8 grid place-items-center hover:bg-gray-700 rounded-md transition duration-300"
						>
							<Copy size={16} />
						</Button>
					</Tooltip>
				)}
			</div>
		</div>
	);
};

export default Highlight;
