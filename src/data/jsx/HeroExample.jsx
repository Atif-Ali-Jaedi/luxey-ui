import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
const transition = {
	duration: 3,
	ease: "easeInOut",
	repeat: Infinity
};
export const HeroExample = () => (
	<>
		<motion.div
			animate={{ y: [6, 0, 6] }}
			transition={{ ...transition, repeatDelay: 0.1 }}
		>
			<input
				type="checkbox"
				className="!absolute left-80 top-6 switch primary size-lg dark:!bg-zinc-700 dark:checked:!bg-primary"
			/>
		</motion.div>
		<motion.div
			animate={{ y: [6, 0, 6] }}
			transition={{ ...transition, repeatDelay: 0.3 }}
			className="absolute -bottom-24 left-16"
		>
			<img
				src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmV0cm98ZW58MHx8MHx8fDA%3D"
				className="w-64 rounded-lg"
				alt="An illustration of retro"
			/>
			<div className="backdrop-blur text-xs absolute bottom-1 w-full flex items-center justify-between p-3 border border-zinc-300/30 text-white">
				<p>Computer toy for kids</p>
				<Button
					radius="full"
					variant="light"
					className="py-1 px-3 bg-zinc-300/30 text-[0.65rem] min-w-12"
				>
					Buy
				</Button>
			</div>
		</motion.div>
		<motion.div
			className="absolute avatar badge-container primary size-lg bottom-16 sm:bottom-24 left-6"
			animate={{ y: [6, 0, 6] }}
			transition={{ ...transition, repeatDelay: 0.2 }}
		>
			<img
				src="https://avatars.githubusercontent.com/u/129975940?v=4"
				alt="Avatar"
			/>
			<span className="badge success size-sm bottom-right"></span>
		</motion.div>
		<motion.div
			animate={{ y: [6, 0, 6] }}
			transition={{ ...transition, repeatDelay: 0.4 }}
			className="absolute left-80 bottom-12 sm:bottom-36"
		>
			<Button radius="full">Button</Button>
		</motion.div>
		<motion.code
			animate={{ y: [6, 0, 6] }}
			transition={{ ...transition, repeatDelay: 0.7 }}
			className="code absolute top-[calc(50%+1.5em)] md:top-1/2 -translate-y-1/2 -left-8 dark:text-zinc-300 dark:!bg-zinc-800"
		>
			npm i luxeyui@latest
		</motion.code>
		<motion.div
			animate={{ y: [6, 0, 6] }}
			transition={{ ...transition, repeatDelay: 0.6 }}
			className="radio-group prose absolute top-20 left-72"
		>
			<label className="radio-group-label dark:!text-zinc-300">
				Do you like it?
			</label>
			<div className="radios">
				<div className="radio primary">
					<input type="radio" name="radio" id="radio" />
					<label htmlFor="radio" className="radio-label dark:text-zinc-200">
						Yes I do
					</label>
				</div>
				<div className="radio" data-is-invalid>
					<input type="radio" name="radio" id="radio2" />
					<label htmlFor="radio2" className="radio-label dark:text-zinc-200">
						No I don't
					</label>
				</div>
			</div>
		</motion.div>
		<motion.div
			animate={{ y: [6, 0, 6] }}
			transition={{ ...transition, repeatDelay: 0.9 }}
			className="p-5 shadow rounded-lg bg-white flex flex-col gap-3 w-max absolute -top-10 -left-20 dark:bg-zinc-800"
		>
			<div className="skeleton w-40 h-24 rounded-md"></div>
			<div className="skeleton w-40 h-4 rounded-md"></div>
			<div className="skeleton w-32 h-4 rounded-md"></div>
		</motion.div>
		<motion.label
			animate={{ y: [6, 0, 6] }}
			transition={{ ...transition, repeatDelay: 0.45 }}
			htmlFor="checkbox"
			className="checkbox-wrapper primary dark:text-white absolute top-28 left-40 sm:top-32 sm:right-32"
		>
			<div className="checkbox-icon">
				<svg viewBox="0 0 17 18">
					<polyline
						fill="none"
						points="1 9 7 14 15 4"
						stroke="currentColor"
						strokeDasharray="22"
						strokeDashoffset="66"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						style={{ transition: "stroke-dashoffset 250ms linear 0.2s" }}
					></polyline>
				</svg>
				<input type="checkbox" id="checkbox" className="checkbox" />
			</div>
			<span className="checkbox-label">I love it</span>
		</motion.label>
		<motion.div
			animate={{ y: [6, 0, 6] }}
			transition={{ ...transition, repeatDelay: 1 }}
			className="flex items-center h-5 absolute bottom-28 left-32 dark:text-zinc-50"
		>
			<a className="link">Home</a>
			<div className="divider" data-orientation="vertical"></div>
			<a className="link">About</a>
			<div className="divider" data-orientation="vertical"></div>
			<a className="link">Docs</a>
		</motion.div>
		<motion.div
			animate={{ y: [6, 0, 6] }}
			transition={{ ...transition, repeatDelay: 0 }}
			className="card absolute left-36 w-max p-0 border-0 h-max"
		>
			<img
				src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lfGVufDB8fDB8fHww"
				alt="A Headset placed on a yellow floor"
				className="w-32 rounded"
			/>
			<div className="backdrop-blur text-xs absolute bottom-1 w-full px-2 flex items-center justify-between py-1 border border-zinc-300/30 text-white">
				<strong>$59.99</strong>
				<Button
					radius="full"
					variant="light"
					className="py-1 px-3 bg-zinc-300/30 text-[0.65rem]"
				>
					Buy
				</Button>
			</div>
		</motion.div>
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl w-12 h-12 grid place-items-center rounded border dark:bg-zinc-900/30 backdrop-blur dark:border-zinc-800">
			<img className="w-8" src="/logo.png" alt="Luxey UI" />
		</div>
	</>
);
