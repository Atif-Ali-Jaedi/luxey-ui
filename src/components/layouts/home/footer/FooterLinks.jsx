import { footerLinks } from "@/data/js/constants";
import { Link } from "react-router-dom";
export const FooterLinks = () => (
	<div className="grid sm:grid-cols-2 md:grid-cols-4 pt-8 gap-6">
		<Link
			to="/"
			className="flex dark:text-gray-50 no-underline w-max -translate-x-1 h-max"
		>
			<img src="/logo.png" className="w-8 !my-0 h-max" />
			<h3 className="!my-0 text-3xl">uxeyui</h3>
		</Link>
		{["Explore", "Resources"].map((category, index) => (
			<ul key={index} className="my-0 list-none pl-0">
				<h4 className="!mt-0 mb-4">{category}</h4>
				{footerLinks
					.slice(
						index === 0 ? 0 : index === 1 && 4,
						index === 0 ? 4 : index === 1 && 9
					)
					.map(l => (
						<li
							key={l.id}
							className="pl-0 text-base transition duration-200 hover:opacity-80 active:opacity-60"
						>
							<Link
								to={l.link}
								className="font-normal text-gray-600 dark:text-gray-400"
							>
								{l.name}
							</Link>
						</li>
					))}
			</ul>
		))}
		<div>
			<h4 className="!mt-0 mb-4">Contact</h4>
			<p className="text-base">
				Contact me at{" "}
				<a
					className="transition duration-200 hover:opacity-80 active:opacity-60"
					href="mailto:atifalijaedi@gmail.com"
				>
					atifalijaedi@gmail.com
				</a>
				.
			</p>
		</div>
	</div>
);
