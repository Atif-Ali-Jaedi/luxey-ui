import React from "react";
import { Link, NavLink } from "react-router-dom";
import { sidebarLinks, components } from "../../data/constants";
import xmark from "../../assets/icons/xmark.svg";
import logo from "/luxeyui.png";

const Sidebar = ({ isActive, onClose }) => (
	<>
		<aside
			className={`z-[3] py-5 px-6 fixed left-0 top-0 h-full border-r overflow-y-scroll w-64 transition-all duration-300 bg-white dark:bg-black md:!bg-transparent backdrop-blur dark:border-r-zinc-600 md:sticky md:top-14 md:h-max md:translate-x-0 ${
				isActive ? "translate-x-0" : "-translate-x-full"
			} ${window.location.pathname === "/" && "md:hidden"}`}
		>
			<button
				tabIndex="-1"
				onClick={onClose}
				className="absolute top-4 right-4 w-6 h-6 dark:text-zinc-500 md:hidden"
			>
				<img src={xmark} />
			</button>
			<Link
				onClick={onClose}
				to="/"
				className="font-semibold mb-4 block flex items-center dark:text-white md:hidden"
			>
				<img src={logo} className="w-5 -translate-x-2" />
				&nbsp;<span className="-translate-x-2">LuxeyUI</span>
			</Link>
			{["Getting Started", "Components"].map((category, index) => (
				<React.Fragment key={index}>
					<strong className="font-semibold text-[0.925rem] ml-4 dark:text-gray-50">
						{category}
					</strong>
					<ul className="ml-4 mb-4 dark:text-zinc-400 text-gray-600 mt-3 flex flex-col gap-2.5 [&_a.active]:font-medium [&_a.active]:text-gray-800 dark:[&_a.active]:text-white">
						{index === 0
							? sidebarLinks.map(link => (
									<li
										onClick={window.innerWidth < 768 && onClose}
										key={link.id}
										className={link.id <= 4 && "md:hidden"}
									>
										<NavLink to={link.link} className="link size-sm w-full" end>
											{link.name}
										</NavLink>
									</li>
							  ))
							: components.map(link => (
									<li
										onClick={window.innerWidth < 768 && onClose}
										key={link.id}
									>
										<NavLink
											to={link.link}
											className="link size-sm gap-2 w-full"
											end
										>
											{link.name}
											{link.chip && (
												<div
													className={`chip size-sm flat ${
														link.chip === "New" ? "primary" : "default"
													}`}
												>
													{link.chip}
												</div>
											)}
										</NavLink>
									</li>
							  ))}
					</ul>
				</React.Fragment>
			))}
		</aside>
	</>
);

export default Sidebar;
