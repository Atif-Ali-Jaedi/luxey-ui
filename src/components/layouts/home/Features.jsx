import { features } from "@/data/js/constants";

export const Features = () => (
	<section className="prose md:prose-lg dark:prose-invert max-w-none md:px-3 mt-8 grid sm:grid-cols-2 gap-x-16 gap-y-12">
		{features.map(f => (
			<div key={f.id} className="flex gap-4 items-start">
				<f.icon
					size={window.innerWidth <= 640 ? 64 : 48}
					strokeWidth="1.25"
					className="-translate-y-4 md:-translate-y-2"
				/>
				<div>
					<h4 className="!mt-0">{f.name}</h4>
					<p className="text-[0.95rem] !mb-0">{f.text}</p>
				</div>
			</div>
		))}
	</section>
);
