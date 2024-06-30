import { ExternalLink, Star } from "lucide-react";
import Highlight from "@/utils/Highlight";

export const CardWithCode = () => (
	<>
		<Highlight
			className="max-w-72 absolute -top-4 right-0 z-[2] shadow-[0px_12px_24px_-8px_rgba(10,20,30,0.1)]"
			header={{ fileType: "html", fileName: "index" }}
			language="html"
			code={`<article class="card radius-lg">
  <div class="avatar absolute left-6 -top-6"><img src="..." alt="..."></div>
  <div class="card-body"><p class="p">...</p></div>
  <div class="card-footer"><strong className="text-lg"></strong></div>
</article>`}
		/>

		<article className="p-6 absolute left-0 w-[calc(100%-2.5em)] bottom-0 rounded-2xl dark:border bg-zinc-100/60 backdrop-blur-xl dark:border-zinc-900 dark:bg-[radial-gradient(circle_at_40%_50%,theme(colors.zinc.800_/_0.925)_40%,theme(colors.zinc.800)_60%)] shadow shadow-gray-100 dark:shadow-none">
			<img
				className="!my-0 absolute -top-6 left-6 size-12 rounded-full object-cover"
				src="https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/348b40b7-b194-40f6-80c9-770512499170.jpg"
				alt="Ansarullah - An experienced frontend developer"
			/>
			<div className="flex items-center gap-2 my-4 w-max">
				{[1, 2, 3, 4, 5].map(i => (
					<Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
				))}
			</div>

			<p className="!mt-0 !mb-2 text-[0.95rem]">
				This ui library is super awesome. It helped me a lot while completing UI
				challenges on{" "}
				<a
					href="https://icodethis.com"
					className="link primary no-underline"
					target="_blank"
					rel="nooopener noreferrer"
				>
					ICodeThis
					<ExternalLink strokeWidth={1.75} size={18} />
				</a>
				. Using the components makes it super efficient and less time to
				complete.
			</p>
			<strong className="text-lg">Ansarullah</strong>
		</article>
	</>
);
