import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, SearchModal } from "@/components";
import { navLinks, currentVersion } from "@/data/js/constants";
import { useTheme, useToggleTheme } from "@/ThemeContext";
import { Search, Sun, Moon, Github } from "lucide-react";

export const Navbar = ({ togglerOnClick, sidebarToggle }) => {
	const [active, setActive] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const toggle = useToggleTheme();
	const currentMode = useTheme();

	const handleActive = () => {
		setActive(prev => !prev);
		document.body.classList.toggle("overflow-y-hidden");
	};

	window.addEventListener("scroll", () =>
		window.scrollY >= 2.5 ? setScrolled(true) : setScrolled(false)
	);

	return (
		<>
			<nav
				id="navbar"
				className={`backdrop-blur-[20px] px-6 py-3 flex sm:px-6 md:px-8 items-center justify-between sticky top-0 z-[3] md:z-[5] dark:border-b-gray-950 ${
					scrolled &&
					"bg-white/70 dark:bg-black/60 duration-0 border-b lg:rounded-2xl"
				}`}
			>
				<div className="flex items-center gap-2.5">
					<div className="md:hidden w-[1.15em] h-3" onClick={togglerOnClick}>
						{[1, 2, 3].map(i => (
							<div
								key={i}
								className={`${
									i === 1 ? "w-full" : i === 2 ? "w-3" : "w-4"
								} h-[1.5px] bg-gray-900 mb-[0.3em] rounded-sm dark:bg-gray-50`}
							></div>
						))}
					</div>
					<Link to="/" className="flex items-end dark:text-gray-50 link">
						<img src="/logo.png" width="24" />
						<h3 className="text-2xl font-semibold">uxeyUI</h3>
					</Link>
					<div className="hidden md:block bg-gray-100 dark:bg-zinc-700 px-3 pt-1.5 pb-1 dark:text-white rounded-full shadow-[0_4px_8px_rgba(5,10,15,0.05)] dark:shadow-[0_4px_8px_rgba(230,240,250,0.1)] text-xs">
						v {currentVersion}
					</div>
				</div>
				<ul className="hidden md:flex items-center gap-6 ml-3 [&_a.active]:font-medium [&_a.active]:text-black dark:[&_a.active]:text-zinc-200">
					{navLinks.map(n => (
						<li key={n.id}>
							<NavLink
								to={n.link}
								end
								className="link text-gray-600 size-sm dark:text-zinc-400"
							>
								{n.name}
							</NavLink>
						</li>
					))}
				</ul>
				<div className="flex items-center translate-x-2">
					<Button
						onClick={handleActive}
						variant="light"
						className="p-1.5 md:px-3 md:py-2 md:bg-zinc-200 md:flex md:rounded-xl dark:md:bg-zinc-800"
					>
						<Search
							className="w-5 dark:stroke-white md:dark:stroke-zinc-500"
							absoluteStrokeWidth
						/>
						<span className="hidden md:block text-gray-400 text-xs pr-6 dark:text-zinc-600">
							Search...
						</span>
						<span className="absolute md:flex items-center justify-center text-xs bg-white w-6 h-5 rounded-lg shadow right-2 hidden dark:bg-zinc-700/50 dark:text-zinc-500">
							<span className="text-[0.5rem] -translate-y-0.5">^</span>K
						</span>
					</Button>
					<Button variant="light" className="p-1.5" onClick={() => toggle()}>
						{currentMode ? (
							<Sun width="20" absoluteStrokeWidth />
						) : (
							<Moon width="20" absoluteStrokeWidth />
						)}
					</Button>
					<a
						rel="nofollow noreferrer"
						href="https://github.com/Atif-Ali-Jaedi/luxeyui"
						target="_blank"
					>
						<Button variant="light" className="p-1.5 rounded">
							<Github width="20" absoluteStrokeWidth />
						</Button>
					</a>
				</div>
			</nav>
			<div
				className={`fixed inset-0 z-[3] transition-all duration-300 md:z-[5] ${
					sidebarToggle || active
						? "bg-black/40 dark:bg-black/60 pointer-events-auto"
						: "bg-transparent pointer-events-none"
				}`}
				onClick={sidebarToggle ? togglerOnClick : handleActive}
			></div>
			<SearchModal active={active} onClose={handleActive} />
		</>
	);
};
