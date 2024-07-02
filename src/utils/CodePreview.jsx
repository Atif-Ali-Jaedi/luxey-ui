import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Highlight from "./Highlight";
import { useTheme } from "../ThemeContext";
import { currentVersion } from "@/data/js/constants";

const CodePreview = ({ code, iframeHeight }) => {
	const [previewToggle, setPreviewToggle] = useState(true);
	const [codeToggle, setCodeToggle] = useState(false);
	const currentMode = useTheme();
	const iframeRef = useRef(null);

	const getIframeContent = () => {
		return `
      <!DOCTYPE html>
      <html lang="en" dir="ltr" class="${currentMode ? "dark" : ""}">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/luxeyui@${currentVersion}/dist/all.min.css"/>
          <script src="https://cdn.tailwindcss.com"></script>
          <script src="https://cdn.jsdelivr.net/npm/luxeyui@${currentVersion}/dist/all.min.js" defer></script>
          <style>::-webkit-scrollbar { display: none; }</style>
          <script>tailwind.config = { darkMode: 'class' }</script>
          <script>
            window.addEventListener('message', (event) => {
              if (event.data === 'dark') {
                document.documentElement.classList.add('dark');
              } else if (event.data === 'light') {
                document.documentElement.classList.remove('dark');
              }
            }, false);
          </script>
        </head>
        <body>${code.code}</body>
      </html>
    `;
	};

	useLayoutEffect(() => {
		const iframe = iframeRef.current;
		if (iframe) {
			iframe.onload = () => {
				iframe.height = `${
					iframeHeight || iframe.contentWindow.document.body.scrollHeight
				}px`;
			};
		}
	}, [iframeRef, previewToggle]);

	useEffect(() => {
		const iframe = iframeRef.current;
		if (iframe) {
			const message = currentMode ? "dark" : "light";
			iframe.contentWindow.postMessage(message, "*");
		}
	}, [currentMode]);

	useEffect(() => {
		if (previewToggle) {
			const iframe = iframeRef.current;
			if (iframe) {
				iframe.contentDocument.open();
				iframe.contentDocument.write(getIframeContent());
				iframe.contentDocument.close();
			}
		}
	}, [currentMode, previewToggle, code.code]);

	return (
		<div className="relative my-4">
			<header className="flex items-center gap-2 mb-4">
				<span
					onClick={() => {
						setPreviewToggle(true);
						setCodeToggle(false);
					}}
					className={`py-2 block px-3 dark:text-white rounded before:content-[''] before:w-full before:h-0.5 before:bg-current before:absolute before:bottom-0 select-none cursor-pointer relative before:left-0 before:transition-all before:duration-300 ${
						!previewToggle
							? "before:opacity-0 text-gray-500 dark:text-gray-400"
							: ""
					}`}
				>
					Preview
				</span>
				<span
					onClick={() => {
						setCodeToggle(true);
						setPreviewToggle(false);
					}}
					className={`py-2 block px-3 dark:text-white rounded before:content-[''] select-none relative before:w-full before:h-0.5 before:bg-current before:absolute cursor-pointer before:bottom-0 before:left-0 before:transition-all before:duration-300 ${
						previewToggle
							? "before:opacity-0 text-gray-500 dark:text-gray-400"
							: ""
					}`}
				>
					Code
				</span>
			</header>
			<div className="relative not-prose">
				{previewToggle && (
					<div className="border rounded-lg border-gray-300 dark:border-gray-600">
						<div className="relative p-8 overflow-x-scroll">
							<iframe
								ref={iframeRef}
								className="w-full frame"
								frameBorder="0"
								sandbox="allow-scripts allow-same-origin"
								srcDoc={getIframeContent()}
							/>
						</div>
					</div>
				)}
				{codeToggle && (
					<Highlight
						language={code.lang || "html"}
						code={code.code}
						showLineNumbers={code.showLineNumbers || false}
					/>
				)}
			</div>
		</div>
	);
};

export default CodePreview;
