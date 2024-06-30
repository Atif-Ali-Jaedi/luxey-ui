import { processes } from "./data";
import { Button } from "@/components/ui/Button";

export const Workflow = () => {
	return (
		<>
			{[1, 2, 3, 4, 5].map(i => (
				<div
					key={i}
					className={`absolute bg-primary/80 min-w-0.5 min-h-0.5 ${
						i === 1
							? "top-[3.15rem] w-48"
							: i === 2
							? "top-24 right-1/4 h-12"
							: i === 3
							? "w-48"
							: i === 4
							? "bottom-24 left-1/4 h-12"
							: "bottom-[3.15rem] w-48"
					}`}
				></div>
			))}
			{processes.map((p, i) => (
				<div
					key={i}
					className="w-32 relative h-24 rounded-lg border-2 border-primary/40 backdrop-blur-[3px] flex flex-col items-center justify-center transition-colors duration-300 hover:bg-primary hover:text-white dark:[background-image:radial-gradient(circle_at_50%_5%,transparent,rgba(97,87,255,0.2))] gap-4"
				>
					<p.icon strokeWidth="1.25" />
					<span className="text-sm select-none">{p.process}</span>
				</div>
			))}
			<div>
				<Button
					className="bg-gradient-to-r from-neon-100 to-neon-200 px-8"
					radius="full"
				>
					Button
				</Button>
			</div>
		</>
	);
};
