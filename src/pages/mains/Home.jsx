import { Link } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../../components/ui/Button";
import github from "../../assets/icons/github.svg";
const Home = () => {
	const container = useRef(null);
	const fadeFromTop = [
		{ y: 4, opacity: 0 },
		{ y: 0, opacity: 1, duration: 0.5 }
	];
	useGSAP(
		() => {
			var tl = gsap.timeline();
			tl.fromTo(
				"#latest-version",
				{ y: 4, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.5, delay: 0.5 }
			);
			tl.fromTo("h1", ...fadeFromTop);
			tl.fromTo("p", ...fadeFromTop);
			tl.fromTo("button", ...fadeFromTop);
			tl.fromTo(".author", ...fadeFromTop);
		},
		{ scope: container }
	);
	return (
		<div ref={container} className="mt-16 mb-24">
			<article className="flex flex-col items-center">
				<div
					id="latest-version"
					className="chip dot primary pr-0 dark:!text-white mb-2 dark:!border-zinc-500"
				>
					<span>Luxey 0.2.1 is here! 🚀</span>
				</div>
				<h1 className="text-4xl md:text-5xl font-bold text-center mb-3 dark:text-gray-100">
					Make Websites{" "}
					<div className="relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-0.5 before:h-2 before:w-full before:rounded-sm before:bg-gradient-to-r before:from-accent-100 before:to-accent-200 before:z-[-1] before:opacity-90">
						quickly
					</div>{" "}
					{window.innerWidth > 960 && <br />}and effortlessly
				</h1>
				<p
					className="max-w-[66ch] text-center text-gray-500 dark:text-gray-300"
					style={{ textWrap: "pretty" }}
				>
					A simplistic and beautiful tailwindCSS UI component library.
				</p>
				<div className="flex items-center gap-4 mt-4">
					<Button
						rippleClasses="!bg-white/10"
						className="px-5 py-2.5 bg-gradient-to-l from-accent-100 to-accent-200 text-white rounded-full"
					>
						<Link to="/docs/">Get Started</Link>
					</Button>
					<a
						target="_blank"
						rel="nofollow noreferrer"
						href="https://github.com/Atif-Ali-Jaedi/luxeyui"
					>
						<Button className="py-2 border-2 border-zinc-300 dark:text-white flex rounded-full items-center gap-1.5 px-5">
							<img src={github} className="dark:invert" />
							Github
						</Button>
					</a>
				</div>
			</article>
			<article className="author text-sm dark:text-gray-300 text-gray-500 pt-8 leading-6 flex justify-center">
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
		</div>
	);
};

export default Home;
