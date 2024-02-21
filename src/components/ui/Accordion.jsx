import { useState } from "react";
import chevronRight from "../../assets/icons/chevron-right.svg";

export const Accordion = ({ data }) => {
	const [openAccordions, setOpenAccordions] = useState(
		new Array(data.length).fill(false)
	);

	const toggleAccordion = index => 
		setOpenAccordions(prevState => {
			const newState = [...prevState];
			newState[index] = !newState[index];
			return newState;
		});
	

	return (
		<>
			{data.map((d, index) => (
				<div
					key={d.id}
					className="text-sm border-t last:border-b py-5 dark:border-t-zinc-600 dark:last:border-b-zinc-600 dark:text-zinc-50"
				>
					<div
						onClick={() => toggleAccordion(index)}
						className="flex items-center justify-between"
					>
						<strong className="font-medium w-[30ch]">{d.question}</strong>
						<img
							src={chevronRight}
							className={`scale-[-1] w-5 transition-all duration-300 ${
								openAccordions[index] ? "-rotate-90" : ""
							}`}
						></img>
					</div>
					<div
						className={`transition-all duration-500 ease-in-out overflow-hidden ${
							openAccordions[index] ? `max-h-[165px]` : "max-h-0"
						}`}
					>
						<p className="pt-6">{d.answer}</p>
					</div>
				</div>
			))}
		</>
	);
};
