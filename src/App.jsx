import {
	Routes,
	Route,
	Outlet,
	useNavigate,
	useLocation
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense, useEffect, useState } from "react";
import Home from "./pages/mains/Home";
import Blogs from "./pages/mains/Blogs";

import { Footer, Navbar, Sidebar, BlogPost, CTA } from "@/components";

import { GoToTopBtn } from "./utils/GoToTopBtn";
import { components, docs } from "./pages/pages";
import ThemeProvider from "./ThemeContext";
import { mdxComponents } from "@/data/jsx/MDXComponents";

const App = () => {
	const navigate = useNavigate();
	const location = useLocation();
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

	const checkSpecificLocations = () => {
		const specificRoutes = ["/", "/blog"];
		return specificRoutes.some(
			route =>
				new RegExp(`^${route.replace(/:\w+/, "\\w+")}$`).test(
					location.pathname
				) || location.pathname.startsWith("/blog")
		);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);
	return (
		<HelmetProvider>
			<ThemeProvider>
				<Navbar sidebarToggle={toggle} togglerOnClick={handleToggle} />
				<main
					className={
						checkSpecificLocations()
							? "main"
							: "md:grid md:grid-cols-[16em_calc(100%-16em)]"
					}
				>
					<Sidebar
						isActive={toggle}
						onClose={handleToggle}
						onSpecificLocations={checkSpecificLocations()}
					/>
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
								<Route path="blog">
									<Route index element={<Blogs />} />
									<Route path=":name" element={<BlogPost />} />
								</Route>
								<Route path="docs">
									{docs.map(d => (
										<Route
											key={d.id}
											path={d.path}
											index={d.index}
											element={<d.element components={mdxComponents} />}
										/>
									))}
									<Route path="components">
										{components.map((c, i) => (
											<Route key={i} path={c.path} element={<c.element components={mdxComponents} />} />
										))}
									</Route>
								</Route>
							</Route>
						</Routes>
					</section>
				</main>
				{checkSpecificLocations() && (
					<>
						<CTA /> <Footer />
					</>
				)}
				<div className="flex items-center flex-wrap text-gray-400 justify-center text-center sm:justify-between mb-6 px-6 md:px-10">
					<small>Copyright © LuxeyUI 2024 All rights reserved.</small>
					<small className="flex">
						Built by&nbsp;
						<a
							rel="nofollow noreferrer"
							target="_blank"
							href="https://twitter.com/atif_ali_jaedi"
							className="block link no-underline !text-gray-500 dark:!text-gray-300"
						>
							Atif Ali Jaedi
						</a>
						.
					</small>
				</div>
				<GoToTopBtn />
			</ThemeProvider>
		</HelmetProvider>
	);
};

export default App;
