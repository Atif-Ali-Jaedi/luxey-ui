import { Button } from "@/components";
import { useState } from "react";
import Highlight from "@/utils/Highlight";
import { Workflow } from "./Workflow";
import { UI } from "./UI";
import { CardWithCode } from "./CardWithCode";

export const Showcase = ({ id }) => {
	const [size, setSize] = useState("md");
	return (
		<>
		
			{id === 1 ? (
				<div className="relative min-h-[375px] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.4)_1px,transparent_0)] [background-size:9.9%_9.9%] gap-y-8 grid grid-cols-2 place-items-center">
					<Workflow />
				</div>
			) : id === 2 ? (
				<div className="relative min-h-[340px] grid place-items-center">
					<UI />
				</div>
			) : (
				<div className="relative min-h-[400px] grid place-items-center">
					<CardWithCode />
				</div>
			)}
		</>
	);
};
