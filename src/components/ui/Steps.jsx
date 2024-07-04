import Highlight from "@/utils/Highlight";

const Step = ({ children, heading }) => {
	return (
		<div className="relative [counter-increment:step] before:content-[counter(step)] before:absolute before:left-[-2.625rem] before:size-7 before:bg-zinc-100 dark:before:bg-zinc-800 before:rounded-full before:grid before:place-items-center before:font-medium pb-px">
			<h4 className="text-lg">{heading}</h4>
			{children}
		</div>
	);
};

const HighlightedCode = ({ lang, lineNumbers, code }) => (
	<Highlight
		language={lang || "html"}
		showLineNumbers={lineNumbers}
		code={code}
	/>
);

const Steps = ({ children }) => (
	<div className="relative [counter-reset:step] mb-12 ml-4 border-l border-zinc-100 dark:border-zinc-800 pl-[1.625rem]">
		{children}
	</div>
);

export { Steps, Step, HighlightedCode };
