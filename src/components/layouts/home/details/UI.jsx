import { TrendingUp, Sun, Moon, Search, Ellipsis } from "lucide-react";
import { Button } from "@/components";
import { useTheme, useToggleTheme } from "@/ThemeContext";
import { motion } from "framer-motion";
const transition = { duration: 3.25, ease: "easeInOut", repeat: Infinity };
export const UI = () => {
	const currentMode = useTheme();
	const toggle = useToggleTheme();
	return (
		<>
			<motion.div
				animate={{ y: [6, 0, 6] }}
				transition={{ ...transition, repeatDelay: 0.125 }}
				className="p-5 border shadow-md shadow-gray-100 dark:shadow-none border-gray-200 rounded-2xl w-48 dark:border-gray-700 backdrop-blur-xl bg-gray-100/40 dark:bg-gray-600/30 absolute top-16"
			>
				<h5 className="dark:text-gray-400 mb-3 tracking-widest">
					POPULARITY
				</h5>
				<TrendingUp className="text-success mb-2" />
				<strong className="text-3xl font-semibold">80%+</strong>
			</motion.div>
			<motion.div
				animate={{ y: [10, -5, 10] }}
				transition={{ ...transition, repeatDelay: 0.2 }}
			>
				<Button
					variant="light"
					className="border shadow-md shadow-gray-100 dark:shadow-none absolute top-14 left-28 border-gray-200 rounded-2xl dark:border-gray-700 backdrop-blur-xl bg-gray-100/40 dark:bg-gray-600/30 size-12 grid place-items-center"
					onClick={() => toggle()}
				>
					{currentMode ? <Moon /> : <Sun />}
				</Button>
			</motion.div>
			<motion.div
				className="flex -space-x-2 absolute bottom-8 left-3"
				animate={{ y: [9, -2, 9] }}
				transition={{ ...transition, repeatDelay: 0.2 }}
			>
				<img
					className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-black"
					src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				/>
				<img
					className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-black"
					src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				/>
				<img
					className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-black"
					src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
				/>
				<img
					className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-black"
					src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				/>
			</motion.div>
			<motion.input
				animate={{ y: [10, 0, 10] }}
				transition={{ ...transition, repeatDelay: 0.2 }}
				type="checkbox"
				className="switch shadow-md shadow-gray-100 dark:shadow-none primary size-lg !absolute top-44 left-10"
				onChange={() => toggle()}
			/>
			<motion.div
				animate={{ y: [7, 0, 7] }}
				transition={{ ...transition, repeatDelay: 0.3 }}
				className="chip success flat absolute right-8 top-20"
			>
				Succeed
			</motion.div>
			<motion.div
				animate={{ y: [-6, 4, -6] }}
				transition={{ ...transition, repeatDelay: 0.6 }}
			>
				<Button
					radius="full"
					variant="ghost"
					onClick={() => toggle()}
					className="absolute -bottom-16 -left-6 w-max"
				>
					Try Dark Mode
				</Button>
			</motion.div>
			<motion.div
				animate={{ y: [12, -4, 12] }}
				transition={{ ...transition, repeatDelay: 0.2 }}
				className="absolute shadow-md shadow-gray-100 dark:shadow-none left-8 top-0 flex items-center border border-gray-200 rounded-2xl dark:border-gray-700 backdrop-blur-xl bg-gray-100/40 dark:bg-gray-600/30 w-max py-2.5 px-4"
			>
				<input
					className="bg-transparent outline-none placeholder:text-black dark:placeholder:text-white placeholder:font-medium w-56 font-medium"
					id="tdm"
					placeholder="Search libraries"
				/>
				<label htmlFor="tdm">
					<Search />
				</label>
			</motion.div>

			<motion.img
				animate={{ y: [8, 2, 8] }}
				transition={{ ...transition, repeatDelay: 0.5 }}
				src="/Atif_Ali_Jaedi.jpg"
				alt="Atif Ali Jaedi"
				className="size-12 absolute left-4 top-24 !my-0 rounded-full object-cover"
			/>
			<motion.label
				animate={{ y: [9, 3, 1, 4, 9] }}
				transition={{ ...transition, repeatDelay: 0.45 }}
				htmlFor="checkbox2"
				className="checkbox-wrapper success dark:text-white absolute bottom-24 right-8"
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
						></polyline>
					</svg>
					<input
						type="checkbox"
						id="checkbox2"
						className="checkbox"
						defaultChecked
					/>
				</div>
			</motion.label>
		</>
	);
};
