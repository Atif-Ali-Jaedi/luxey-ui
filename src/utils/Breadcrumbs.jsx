import { ChevronRight } from "lucide-react";

export const Breadcrumbs = ({ data }) => (
	<div className="flex items-center text-sm [&_img]:pointer-events-none [&_img]:dark:invert-[70%] [&_img]:brightness-50">
		{data.map((item, i) => (
			<span
				key={i}
				className={`dark:text-gray-400 flex items-center text-gray-500 ${
					i < data.length - 1 || "!text-black font-medium dark:!text-gray-50"
				}`}
			>
				{item}
				{i < data.length - 1 && <ChevronRight size={16} />}
			</span>
		))}
	</div>
);
