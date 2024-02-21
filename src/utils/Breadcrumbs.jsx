import chevronRight from "../assets/icons/chevron-right.svg";

export const Breadcrumbs = ({ data }) => (
	<div className="flex items-center text-sm [&_img]:pointer-events-none [&_img]:dark:invert-[70%] [&_img]:brightness-50">
		{data.map((item, i) => (
			<span
			key={i}
				className={`dark:text-zinc-400 flex item-center text-zinc-500 ${
					i < data.length - 1 || "!text-black font-medium dark:!text-zinc-50"
				}`}
			>
				{item}
				{i < data.length - 1 && (
					<img src={chevronRight} />
				)}
			</span>
		))}
	</div>
);
