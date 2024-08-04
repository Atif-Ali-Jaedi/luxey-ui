import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { sidebarLinks } from "@/data/js/constants";
import { X } from "lucide-react";
import logo from "/logo.png";

export const Sidebar = ({ isActive, onClose, onSpecificLocations }) => {
	return (
		<>
			<aside
				className={`z-[4] pb-16 mb:pb-8 pt-8 pl-10 fixed left-0 top-0 h-[100dvh] border-r w-[260px] transition-all duration-300 bg-white/80 dark:bg-black/60 md:!bg-transparent backdrop-blur-[20px] dark:border-r-gray-800 md:sticky md:top-14 md:translate-x-0 grid ${
					isActive ? "translate-x-0" : "-translate-x-full"
				} ${onSpecificLocations ? "md:hidden" : ""}`}
			>
				<Link
					onClick={onClose}
					to="/"
					className="font-bold flex items-center dark:text-white text-[1.075em] md:hidden"
				>
					<img src={logo} className="w-5" />
					&nbsp;<span className="-translate-x-1">uxeyUI</span>
				</Link>
				<button
					tabIndex="-1"
					onClick={onClose}
					className="focus:outline absolute top-4 right-4 dark:text-white size-5 grid place-items-center rounded-lg md:hidden"
				>
					<X size={18} />
				</button>
				<div className="overflow-y-auto mt-4">
					{["Getting Started", "Guide", "Others", "Components"].map(
						(category, index) => (
							<Fragment key={index}>
								<strong className="font-semibold text-[0.925rem] text-[1em] text-gray-900 dark:text-gray-100">
									{category}
								</strong>
								<ul className="mb-4 dark:text-zinc-400 text-gray-600 mt-3 flex flex-col gap-2.5 [&_a.active]:font-medium [&_a.active]:text-gray-700 dark:[&_a.active]:text-gray-200">
									{sidebarLinks
										.slice(
											index === 0 ? 0 : index === 1 ? 3 : index === 2 ? 6 : 11,
											index === 0 ? 3 : index === 1 ? 6 : index === 2 ? 11 : 34
										)
										.map((link, i) => (
											<li
												onClick={window.innerWidth < 768 ? onClose : null}
												key={i}
											>
												<NavLink
													to={link.link}
													className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
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
							</Fragment>
						)
					)}
				</div>
			</aside>
		</>
	);
};
