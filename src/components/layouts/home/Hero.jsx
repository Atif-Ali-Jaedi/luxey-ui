import { Link } from "react-router-dom";
import { Github, ArrowRight, Command } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroExample } from "@/data/jsx/HeroExample";

export const Hero = () => (
	<div className="mb-28 md:mb-40 grid items-center md:grid-cols-2 px-0 md:px-3 gap-28">
		<article className="prose lg:prose-lg dark:prose-invert text-center md:text-start">
			<span className="rounded-full py-2 px-3 !bg-zinc-100 dark:!bg-zinc-800 dark:text-white flex items-center w-max mx-auto md:mx-0 gap-2">
				<Command size={18} />{" "}
				<span className="text-zinc-400 dark:text-zinc-600">|</span>
				<Link
					to="/blog/Introduction to dark mode"
					className="no-underline flex items-center gap-2"
				>
					Introducing Dark Mode 🎉 <ArrowRight size={18} />
				</Link>
			</span>
			<h1 className="!mt-6">
				Create Stunning{" "}
				<span className="bg-gradient-to-br from-accent-100 via-accent-200 to-accent-300 bg-clip-text text-transparent">
					Websites
				</span>{" "}
				Regardless of Your Level of Design Expertise.
			</h1>
			<p>A simpilistic and beautiful TailwindCSS UI component library.</p>

			<div className="flex justify-center flex-col sm:flex-row gap-4 md:justify-start">
				<Link to="/docs" className="no-underline">
					<Button className="w-full sm:px-8 gap-2" strokeWidth="1">
						Get Started
						<ArrowRight />
					</Button>
				</Link>
				<a
					className="no-underline"
					href="https://github.com/Atif-Ali-Jaedi/luxeyui"
				>
					<Button variant="bordered" className="w-full sm:px-8 py-2 gap-2">
						<Github width="20" />
						Github
					</Button>
				</a>
			</div>
		</article>
		<div className="relative min-h-[375px] hidden md:block">
			<HeroExample />
		</div>
	</div>
);
