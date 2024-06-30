import { Button } from "@/components";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTA = () => (
	<section className="prose md:prose-lg dark:prose-invert max-w-none px-6 md:px-3 mb-16">
		<article className="flex flex-col text-center items-center">
			<h2 className="!mt-0 !mb-6">
				Ready to Transform Your Next Design Project?
			</h2>
			<p className="max-w-[65ch]">
				Enhance your applications with our versatile UI components seamlessly to
				elevate your designs.
			</p>
			<div className="flex items-center gap-4 flex-wrap justify-center">
				<Link to="/docs/components/avatar">
					<Button size="sm">
						Explore Components <ArrowRight size={18} />
					</Button>
				</Link>
				<Link to="/docs">
					<Button size="sm" variant="bordered" className="py-1.5">
						Get Started Now
					</Button>
				</Link>
			</div>
		</article>
	</section>
);
