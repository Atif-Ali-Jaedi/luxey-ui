import Highlight from "@/utils/Highlight";

export const Timeline = ({ data }) => {
	return (
		<div className="pb-16">
			{data.map(d => (
				<div
					key={d.id}
					className="pl-12 relative before:content-[''] before:bg-gray-200 before:absolute before:w-px before:h-[calc(100%+2em)] before:left-3.5 before:top-0 pb-8 last:pb-0 dark:before:bg-zinc-800"
				>
					<span className="bg-gray-100 rounded-full w-7 h-7 grid place-items-center absolute top-0 left-0 dark:bg-zinc-800">
						{d.id}
					</span>
					<h4>{d.heading}</h4>
					{d.html ? (
						<p
							className="text-[0.925rem]"
							dangerouslySetInnerHTML={{ __html: d.html }}
						></p>
					) : (
						<p className="text-[0.925rem]">{d.text}</p>
					)}
					{d.code && (
						<Highlight
							showLineNumbers={d.code.showLineNumbers}
							language={d.code.lang}
							code={d.code.code}
						/>
					)}
				</div>
			))}
		</div>
	);
};
