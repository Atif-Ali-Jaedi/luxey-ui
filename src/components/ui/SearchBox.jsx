import { useState } from "react";
import { Link } from "react-router-dom";
import { sidebarLinks, components } from "../../data/constants";
import search from "../../assets/icons/search.svg";
import xmark from "../../assets/icons/xmark.svg";

const SearchBox = ({ active, onClose }) => {
	const [searchQuery, setSearchQuery] = useState("");

	const filterLinks = links =>
		links.filter(l => l.name.toLowerCase().includes(searchQuery.toLowerCase()));

	return (
		<div
			className={`w-[min(100%-2em,450px)] py-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-[3] md:z-[5] rounded-lg shadow-lg transition-all dark:bg-zinc-950 duration-300 border dark:border-zinc-800 ${
				active
					? "scale-100 opacity-100 pointer-events-auto"
					: "scale-75 opacity-0 pointer-events-none"
			}`}
		>
			<div className="flex items-center gap-2 border-b dark:border-zinc-800 pb-1 px-4">
				<label htmlFor="search">
					<img src={search} className="w-5 dark:invert" alt="Search Icon" />
				</label>
				<input
					id="search"
					placeholder="Search..."
					className="w-full p-1.5 outline-none bg-transparent dark:text-white"
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				/>
				<button
					onClick={() => {
						onClose();
						setSearchQuery("");
					}}
				>
					<img src={xmark} className="w-5 dark:invert" alt="Close Icon" />
				</button>
			</div>
			<div className="max-h-[250px] overflow-y-scroll [&_a]:block px-4">
				<ul>
					<span className="text-xs text-zinc-400 font-medium">
						Getting Started
					</span>
					{filterLinks(sidebarLinks).map(l => (
						<li
							key={l.id}
							className="text-sm relative hover:bg-zinc-100 py-2.5 pr-2 pl-8 rounded mr-1 before:content-[''] before:w-4 before:h-4 before:absolute before:rounded-full before:border-2 before:border-zinc-500 before:left-2 before:top-1/2 before:-translate-y-1/2 dark:before:border-gray-200 dark:text-gray-200 dark:hover:bg-zinc-800"
						>
							<Link
								to={l.link}
								onClick={() => {
									setSearchQuery("");
									onClose();
								}}
							>
								{l.name}
							</Link>
						</li>
					))}
					{filterLinks(sidebarLinks).length === 0 && (
						<li className="text-sm text-gray-500 text-center">
							No results found.
						</li>
					)}
				</ul>
				<ul>
					<span className="text-xs text-zinc-400 font-medium">Components</span>
					{filterLinks(components).map(l => (
						<li
							key={l.id}
							className="text-sm relative hover:bg-zinc-100 py-2.5 pr-2 pl-8 rounded mr-1 before:content-[''] before:w-4 before:h-4 before:absolute before:rounded-full before:border-2 before:border-zinc-500 before:left-2 before:top-1/2 before:-translate-y-1/2 dark:before:border-gray-200 dark:text-gray-200 dark:hover:bg-zinc-800"
						>
							<Link
								to={l.link}
								onClick={() => {
									setSearchQuery("");
									onClose();
								}}
							>
								{l.name}
							</Link>
						</li>
					))}
					{filterLinks(components).length === 0 && (
						<li className="text-sm text-gray-500 text-center">
							No results found.
						</li>
					)}
				</ul>
			</div>
		</div>
	);
};

export default SearchBox;
