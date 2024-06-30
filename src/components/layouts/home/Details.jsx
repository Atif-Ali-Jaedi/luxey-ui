import { Fragment } from "react";
import { Link } from "react-router-dom";
import { details } from "@/data/js/constants";
import { Button } from "@/components";
import { ArrowRight } from "lucide-react";
import { Showcase } from "@/data/Showcase";
export const Details = () => (
	<section className="prose md:prose-lg dark:prose-invert max-w-none md:px-3">
		<div className="grid sm:grid-cols-2 gap-x-20 gap-y-16 items-center">
			{details.map(d => (
				<Fragment key={d.id}>
					<div
						className={`relative
							${d.id === 1 ? "sm:order-1" : d.id == 2 ? "sm:order-3" : "sm:order-4"}
						`}
					>
						<Showcase id={d.id} />
					</div>
					<article
						className={
							d.id === 1
								? "sm:order-1"
								: d.id === 2
								? "sm:order-2"
								: "sm:order-4"
						}
					>
						<span className="text-accent-300 text-base tracking-wider uppercase">
							{d.title}
						</span>
						<h3 className="!mt-2">{d.heading}</h3>
						<p>{d.text}</p>
						{d.cta && d.link && (
							<Link to={d.link} className="no-underline">
								<Button className="text-white bg-gradient-to-br from-[#9430EE] via-[#5C36EE] to-[#7153EB] font-medium px-6 py-2 flex items-center gap-2.5">
									{d.cta}
									<ArrowRight size={20} />
								</Button>
							</Link>
						)}
					</article>
				</Fragment>
			))}
		</div>
	</section>
);
