import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { sidebarLinks } from "@/data/js/constants";
import { Search, X, FileCode, File, ChevronRight } from "lucide-react";
import { Button } from "@/components";

export const SearchModal = ({ active, onClose }) => {
	const searchInput = useRef(null);
	const [searchQuery, setSearchQuery] = useState("");
	const [viewportHeight, setViewportHeight] = useState(null);

	const filterLinks = links =>
		links.filter(l => l.name.toLowerCase().includes(searchQuery.toLowerCase()));

	useEffect(() => {
		active ? searchInput.current.focus() : searchInput.current.blur();
	}, [active]);

	window.addEventListener("load", () => setViewportHeight(window.innerHeight));
	window.addEventListener("resize", () =>
		setViewportHeight(window.innerHeight)
	);
	return (
		<div
			className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/60 backdrop-blur-xl z-[3] md:z-[5] w-[min(100%-1em,450px)] rounded-xl transition-all duration-300 border border-zinc-100 dark:border-zinc-800 flex flex-col ${
				active
					? "opacity-100 pointer-events-auto"
					: "opacity-0 pointer-events-none"
			}`}
			style={{ height: viewportHeight - 100, maxHeight: 400 }}
		>
			<header className="flex items-center justify-between px-4 py-3 border-b border-zinc-400 dark:border-zinc-800">
				<label className="flex items-center gap-3">
					<Search className="stroke-zinc-500" />
					<input
						ref={searchInput}
						type="text"
						placeholder="Search Docs"
						className="bg-transparent text-lg placeholder:text-zinc-500 text-zinc-600 dark:text-zinc-400 w-64 outline-none"
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
					/>
				</label>
				<Button
					onClick={() => {
						if (searchQuery === "") return onClose();
						setSearchQuery("");
						searchInput.current.focus();
					}}
					variant="light"
					className="size-8 border border-zinc-400 dark:border-zinc-800 rounded-full p-0"
				>
					<X size={12} />
				</Button>
			</header>
			<div
				className={`p-4 overflow-y-scroll ${
					filterLinks(sidebarLinks).length === 0
						? "flex items-center justify-center h-full"
						: ""
				}`}
			>
				{filterLinks(sidebarLinks).map((l, i) => (
					<Link
						key={i}
						to={l.link}
						onClick={() => {
							setSearchQuery("");
							onClose();
						}}
						className="outline-none"
					>
						<div
							className={`p-4 mt-3 rounded-lg bg-white/50 dark:bg-zinc-700/30 flex items-center justify-between group w-[calc(100%+0.5em)] active:opacity-90 active:scale-[0.97] transition-all duration-300 ${
								i === 0
									? "!bg-primary [&_svg]:!stroke-white [&_*]:text-white !mt-0"
									: ""
							}`}
						>
							<div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-200">
								{l.type === "normal" ? (
									<File
										strokeWidth={1.25}
										className="stroke-zinc-500 dark:stroke-zinc-400"
									/>
								) : (
									<FileCode
										strokeWidth={1.25}
										className="stroke-zinc-500 dark:stroke-zinc-400"
									/>
								)}

								{l.name}
							</div>
							<ChevronRight
								size={12}
								className="group-hover:translate-x-0.5 transition-transform dark:text-white duration-300"
							/>
						</div>
					</Link>
				))}
				{filterLinks(sidebarLinks).length === 0 && (
					<div className="flex flex-col items-center justify-center gap-1 dark:text-white">
						No results for "{searchQuery}"
						<span className="block text-zinc-400 dark:text-zinc-500">
							Try searching for something else.
						</span>
					</div>
				)}
			</div>
		</div>
	);
};
