import Highlight from "../../utils/Highlight";

export const Timeline = ({ data }) => {
	return (
		<article className="pb-16 border-b mb-4">
			{data.map(d => (
				<div
					key={d.id}
					className="pl-12 relative before:content-[''] before:bg-gray-200 before:absolute before:w-px before:h-full before:left-3.5 before:top-0 pb-8 last:pb-0 dark:before:bg-zinc-800"
				>
					<span className="bg-gray-100 rounded-full w-7 h-7 grid place-items-center absolute top-0 left-0 outline outline-4 outline-white dark:outline-black dark:text-white dark:bg-zinc-800">
						{d.id}
					</span>
					<h4 className="h4 dark:text-zinc-50">{d.heading}</h4>
					<br />
					<p className="dark:text-zinc-200 text-zinc-500">{d.text}</p>
					<br />
					<Highlight
						showLineNumbers={d.code.showLineNumbers}
						language={d.code.lang}
						code={d.code.code}
					/>
				</div>
			))}
		</article>
	);
};
