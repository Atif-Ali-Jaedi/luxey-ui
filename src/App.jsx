import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import Home from "./pages/mains/Home";
const Introduction = lazy(() => import("./pages/mains/Introduction.jsx"));
const Installation = lazy(() => import("./pages/mains/Installation.jsx"));
const Theme = lazy(() => import("./pages/mains/Theme.jsx"));
const Changelog = lazy(() => import("./pages/mains/Changelog.jsx"));
const Typography = lazy(() => import("./pages/mains/Typography.jsx"));
const Examples = lazy(() => import("./pages/mains/Examples.jsx"));

import Navbar from "./components/layouts/Navbar";
import Sidebar from "./components/layouts/Sidebar";

import { GoToTopBtn } from "./utils/GoToTopBtn";
import { components } from "./pages";
import ThemeProvider from "./ThemeContext";

const App = () => {
	const navigate = useNavigate();
	const [toggle, setToggle] = useState(false);
	useEffect(() => {
		if (
			window.location.pathname === "/docs/components" ||
			window.location.pathname === "/docs/components/"
		)
			navigate("/docs/components/avatar");
	}, [navigate]);
	const handleToggle = () => {
		setToggle(prev => !prev);
		document.body.classList.toggle("overflow-y-hidden");
	};
	return (
		<ThemeProvider>
			<Navbar sidebarToggle={toggle} togglerOnClick={handleToggle} />
			<main
				className={
					window.location.pathname !== "/" &&
					"md:grid md:grid-cols-[16em_calc(100%-16em)] min-h-[100svh]"
				}
			>
				<Sidebar isActive={toggle} onClose={handleToggle} />
				<section className="pt-8 px-6">
					<Routes>
						<Route
							path="/"
							element={
								<Suspense
									fallback={
										<p className="dark:text-zinc-300 mt-4 ml-5">Loading...</p>
									}
								>
									<Outlet />
								</Suspense>
							}
						>
							<Route path="/" element={<Home />} />
							<Route path="docs">
								<Route index element={<Introduction />} />
								<Route path="installation" element={<Installation />} />
								<Route path="theme" element={<Theme />} />
								<Route path="typography" element={<Typography />} />
								<Route path="examples" element={<Examples />} />
								<Route path="changelog" element={<Changelog />} />
								<Route path="components">
									{components.map(c => (
										<Route key={c.id} path={c.path} element={<c.element />} />
									))}
								</Route>
							</Route>
						</Route>
					</Routes>
					{window.location.pathname !== "/" && <article className="author text-sm dark:text-gray-300 text-gray-500 pt-2 pb-8 leading-6 flex justify-center">
						<p className="w-[40ch] text-center">
							Built by{" "}
							<a
								rel="nofollow noreferrer"
								target="_blank"
								href="https://twitter.com/atif_ali_jaedi"
								className="block link underline underline-always"
							>
								Atif Ali Jaedi
							</a>
							. Note that this project & website is under development.
						</p>
					</article>
					}
				</section>
			</main>
			<GoToTopBtn />
		</ThemeProvider>
	);
};

export default App;
