import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { ComponentsLinks } from "@/utils/ComponentsLinks";
import { Breadcrumbs } from "@/utils/Breadcrumbs";
import CodePreview from "@/utils/CodePreview";
import Highlight from "@/utils/Highlight";
import { twMerge } from "tailwind-merge";

export const mdxComponents = {
	h1(props) {
		return <h1 className="!my-4" {...props} />;
	},
	a(props) {
		return (
			<Link className="link no-underline primary" to={props.href} {...props} />
		);
	},
	CodePreview({ lang, code, showLineNumbers }, props) {
		return (
			<CodePreview
				code={{ lang: lang, code: code, showLineNumbers: showLineNumbers }}
				{...props}
			/>
		);
	},
	Chip({ notTranslate, color, variant, size, radius, className, children }) {
		return (
			<div
				className={twMerge(
					`chip ${color || "primary"} ${variant || "solid"} ${
						size || "size-md"
					} ${radius || "radius-full"} ${notTranslate || "translate-y-8"}`,
					className
				)}
			>
				{children}
			</div>
		);
	},
	SM(props) {
		return <small className="text-sm font-medium" {...props} />;
	},
	ELink({ hideExternalIcon, text, href }, props) {
		return (
			<a
				href={href}
				className="link primary no-underline"
				target="_blank"
				rel="nooopener noreferrer"
				{...props}
			>
				{text}{" "}
				{!hideExternalIcon && <ExternalLink strokeWidth={1.75} size={18} />}
			</a>
		);
	},
	BCrumbs({ data }) {
		return <Breadcrumbs data={data} />;
	},
	CompsLinks({ last, next }) {
		return <ComponentsLinks last={last} next={next} />;
	},
	HL(props) {
		return (
			<span
				className="text-pink-500 font-medium dark:text-sky-500"
				{...props}
			/>
		);
	},
	blockquote(props) {
		return (
			<blockquote
				className="not-italic my-6 rounded-xl border border-zinc-200 dark:border-zinc-800 backdrop-blur-xl bg-zinc-200/20 dark:bg-zinc-700/40 !py-3 !px-4 [&>p]:!m-0 [&>p::before]:content-[''] font-normal [&_strong]:font-medium text-[0.95rem]"
				{...props}
			/>
		);
	},
	Article({ className, children }) {
		return (
			<article className={`prose lg:prose-lg dark:prose-invert ${className}`}>
				{children}
			</article>
		);
	},
	code(props) {
		return props.className ? (
			<Highlight
				code={props.children}
				language={props.className.split("-")[1]}
				{...props}
			/>
		) : (
			<code
				className="code before:content-[''] after:content-['']"
				{...props}
			/>
		);
	},
	Time(props) {
		return (
			<time
				className="block mt-4 text-lg text-gray-600 dark:text-gray-400 translate-y-8"
				{...props}
			/>
		);
	}
};
