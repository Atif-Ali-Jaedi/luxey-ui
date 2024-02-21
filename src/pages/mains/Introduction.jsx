import { Breadcrumbs } from "../../utils/Breadcrumbs";
import { Accordion } from "../../components/ui/Accordion";
import { faqs } from "../../data/constants";
import { Link } from "react-router-dom";
import chevronRight from "../../assets/icons/chevron-right.svg";
import Button from "../../components/ui/Button";

const Introduction = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Introduction"]} />
			<article>
				<h1 className="h1 !font-bold mt-4 mb-2 dark:text-white">
					Introduction
				</h1>
				<p className="max-w-[60ch] dark:text-zinc-400 text-gray-500 leading-7">
					Easily create stunning user interfaces using our Tailwind CSS and
					TypeScript UI library. Best for websites, challenges, and more.
				</p>
			</article>
			<br />
			<article className="dark:text-zinc-50">
				<small className="small">
					This UI library is under <strong>Development</strong>. It will take
					some time to finish builidng the whole library and this website. Note
					that, this is an early access. There is only 10 components I've added
					in the latest version.
				</small>
			</article>
			<br />
			<article className="text-sm dark:text-zinc-50">
				<h4 className="h4">Well, then why and what is it for?</h4>
				<br />
				<p className="leading-7">
					I've made this UI library because, nowadays almost every good and
					modern UI library is for react, vue etc. They don't support basic
					uses, like for challenges or normal web desigining purposes.
				</p>
				<br />
				<p className="leading-7">
					To use the components, use the CDN for now, because it is not
					optimized for installing the library yet. Also huge thanks to{" "}
					<a href="https://nextui.org" className="link primary">
						NextUI
					</a>{" "}
					and{" "}
					<a href="https://ui.shadcn.com" className="link primary">
						Shadcn/UI
					</a>{" "}
					for inspiring me to make this library. I would highly recommend you to
					check those out if you're looking for UI libraries for especially like
					react.
				</p>
			</article>
			<article>
				<br />
				<h3 className="h3 dark:text-white">FAQS</h3>
				<br />
				<Accordion data={faqs} />
			</article>
			<br />
			<Button className="py-1.5 text-sm border-2 border-zinc-300 dark:text-white flex rounded-lg items-center gap-1.5 px-3 [&_img]:pointer-events-none my-4 ml-auto">
				<Link to="./installation">Installation</Link>
				<img src={chevronRight} />
			</Button>
		</>
	);
};

export default Introduction;
