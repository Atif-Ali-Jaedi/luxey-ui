import { socialMedia } from "@/data/js/constants";
import { Link } from "react-router-dom";
import { Button } from "@/components";
import { FooterLinks } from "./FooterLinks";
import { ArrowRight } from "lucide-react";
export const Footer = () => (
	<footer className="[&_a]:no-underline prose prose-lg max-w-full px-6 md:px-10 dark:prose-invert pb-8">
		<hr className="my-0" />
		<FooterLinks />
		<div className="flex mt-4 justify-center gap-4 items-center">
			{socialMedia.map(l => (
				<a
					key={l.id}
					href={l.link}
					target="_blank"
					className="transition-all duration-300 active:opacity-80 active:opacity-60 w-12 h-12 border-2 rounded-full !grid place-items-center dark:border-zinc-600"
					rel="noreferrer"
				>
					<l.Icon />
				</a>
			))}
		</div>
		<hr className="mt-6" />
	</footer>
);
