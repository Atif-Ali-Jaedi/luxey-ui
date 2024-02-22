import { useState, useEffect } from "react";
import Highlight from "./Highlight";
import Button from "../components/ui/Button";

const CodePreview = ({ code }) => {
	const [previewToggle, setPreviewToggle] = useState(true);
	const [codeToggle, setCodeToggle] = useState(false);
	const [iframeHeight, setIframeHeight] = useState(0);
	useEffect(() => {
		document.querySelectorAll(".frame").forEach(iframe => {
			if (iframe)
				iframe.onload = () =>
					(iframe.height = `${iframe.contentWindow.document.body.scrollHeight}px`);
		});
	}, [iframeHeight, previewToggle]);
	return (
		<div className="relative my-4">
			<header
				className={`grid grid-cols-2 select-none dark:text-white relative before:content-[''] before:absolute before:w-1/2 before:h-0.5 before:bg-zinc-300 before:bottom-0 before:rounded before:transition-all before:duration-300 ${
					codeToggle ? "before:translate-x-full" : ""
				}`}
			>
				<Button
					onClick={() => {
						setPreviewToggle(true);
						setCodeToggle(false);
					}}
					className="py-2.5"
				>
					Preview
				</Button>
				<Button
					onClick={() => {
						setCodeToggle(true);
						setPreviewToggle(false);
					}}
					className="p-2.5"
				>
					Code
				</Button>
			</header>
			<div className="relative">
				{previewToggle && (
					<div className="border rounded mt-2 border-gray-300 dark:border-zinc-800">
						<div className="relative px-5 py-6 overflow-x-scroll">
							<iframe
								srcDoc={`<!DOCTYPE html><html lang="en" dir="ltr" class="${document.documentElement.className}"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/luxeyui@0.2.3/dist/all.min.css"/><script src="https://cdn.tailwindcss.com"></script><script src="https://cdn.jsdelivr.net/npm/luxeyui@0.2.3/dist/all.min.js" defer></script><style>::-webkit-scrollbar{display:none}</style><script>tailwind.config = {darkMode: "class"}</script></head><body>${code.code}</body></html>`}
								frameBorder="0"
								className="w-full frame"
							/>
						</div>
					</div>
				)}
				{codeToggle && (
					<Highlight
						language={code.lang}
						code={code.code}
						showLineNumbers={code.showLineNumbers || false}
					/>
				)}
			</div>
		</div>
	);
};
export default CodePreview;
