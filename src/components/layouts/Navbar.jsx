import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBox from "../ui/SearchBox";
import { navLinks, currentVersion } from "../../data/constants";
import Button from "../ui/Button";
import { useTheme, useToggleTheme } from "../../ThemeContext";
import sun from "../../assets/icons/sun.svg";
import moon from "../../assets/icons/moon.svg";
import github from "../../assets/icons/github.svg";
import search from "../../assets/icons/search.svg";

const Navbar = ({ togglerOnClick, sidebarToggle }) => {
	const [active, setActive] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const toggle = useToggleTheme();
	const currentMode = useTheme();

	const handleActive = () => {
		setActive(prev => !prev);
		document.body.classList.toggle("overflow-y-hidden");
	};

	window.addEventListener("scroll", () =>
		window.scrollY >= 5 ? setScrolled(true) : setScrolled(false)
	);

	return (
		<>
			<nav
				id="navbar"
				className={`backdrop-blur transition-all duration-300 px-5 py-3 flex sm:px-6 md:px-8 items-center justify-between sticky top-0 z-[2] dark:border-b-gray-950 ${
					scrolled &&
					"bg-white/95 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/50 border-b"
				}`}
			>
				<div className="flex items-center gap-2.5">
					<div className="md:hidden w-[1.15em] h-3" onClick={togglerOnClick}>
						{[1, 2, 3].map(i => (
							<div
								key={i}
								className={`${
									i === 1 ? "w-2.5" : i === 2 ? "w-3.5" : "w-full"
								} h-[1.5px] bg-gray-900 mb-[0.3em] rounded-sm dark:bg-gray-50`}
							></div>
						))}
					</div>
					<Link to="/" className="flex items-center gap-1 dark:text-gray-50">
						<img src="/luxeyui.png" width="28" />
						<h3 className="h3">Luxeyui</h3>
					</Link>
					<div className="bg-gray-100 dark:bg-zinc-700 px-3 pt-1.5 pb-1 dark:text-white rounded-full shadow-[0_4px_8px_rgba(5,10,15,0.05)] dark:shadow-[0_4px_8px_rgba(230,240,250,0.2)] text-xs">
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
					<Button className="p-1.5 rounded" onClick={handleActive}>
						<img src={search} className="w-5 dark:invert" />
					</Button>
					<Button
						className="p-1.5 rounded"
						onClick={() => {
							toggle();
						}}
					>
						<img src={currentMode ? sun : moon} className="w-5" />
					</Button>
					<Button className="p-1.5 rounded">
						<a
							rel="nofollow noreferrer"
							href="https://github.com/Atif-Ali-Jaedi/luxeyui"
							className="dark:invert"
							target="_blank"
						>
							<img src={github} />
						</a>
					</Button>
				</div>
			</nav>
			<div
				className={`fixed inset-0 z-[2] transition-all duration-300 md:z-[4] ${
					sidebarToggle || active
						? "bg-black/50 pointer-events-auto"
						: "bg-transparent pointer-events-none"
				}`}
				onClick={sidebarToggle ? togglerOnClick : handleActive}
			></div>
			<SearchBox active={active} onClose={handleActive} />
		</>
	);
};

export default Navbar;
