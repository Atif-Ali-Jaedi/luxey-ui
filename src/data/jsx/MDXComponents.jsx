import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { ComponentsLinks } from "@/utils/ComponentsLinks";
import { Breadcrumbs } from "@/utils/Breadcrumbs";
import  CodePreview  from "@/utils/CodePreview";
import Highlight from "@/utils/Highlight";

export const mdxComponents = {
	h1(props) {
		return <h1 className="!my-4" {...props} />;
	},
	a(props) {
		return <Link className="link no-underline primary" to={props.href} {...props} />;
	},
	CodePreview({ lang, code, showLineNumbers }, props) {
		return (
			<CodePreview
				code={{ lang: lang, code: code, showLineNumbers: showLineNumbers }}
				{...props}
			/>
		);
	},
	SM(props) {
		return <small className="text-sm" {...props} />;
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
	Article(props) {
		return (
			<article className="prose lg:prose-lg dark:prose-invert" {...props} />
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
	}
};
