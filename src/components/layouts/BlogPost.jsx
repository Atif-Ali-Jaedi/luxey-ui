import { useParams, Link } from "react-router-dom";
import blogs from "@/pages/blogs";
import { mdxComponents } from "@/data/jsx/MDXComponents";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

export const BlogPost = () => {
	const { name } = useParams();
	const blog = blogs.find(blog => blog.name === name);
	if (!blog)
		return (
			<h1 className="text-center font-bold dark:text-white">Blog not found</h1>
		);
	return (
		<article className="prose lg:prose-lg dark:prose-invert mx-auto mb-20 [&_:is(ul,ol)>li>strong]:text-pink-500 [&_:is(ul,ol)>li>strong]:font-medium dark:[&_:is(ul,ol)>li>strong]:text-cyan-500">
			<Helmet>
				<title>
					{blog.name} | LuxeyUI - Elevate your design effortlessly and quickly
				</title>
				<meta name="description" content={blog.description} />
			</Helmet>
			<Link
				to="/blog"
				className="flex font-normal items-center gap-2 text-sm no-underline text-gray-800 dark:text-gray-200"
			>
				<ArrowLeft size={18} /> Go Back
			</Link>
			<img
				src={blog.cover}
				alt={blog.title}
				className="!my-8 rounded-xl border border-neon-200/20 w-full aspect-video object-cover shadow"
			/>
			<div className="chip !my-0 bg-gradient-to-r from-neon-100 to-neon-200 text-white">
				{blog.tag}
			</div>
			<h2 className="!my-3 dark:text-gray-200">{blog.title}</h2>
			<p className="mb-6">{blog.description}</p>
			<div className="flex items-end justify-between">
				<div className="flex items-center gap-3">
					<img
						src={
							blog.avatar
								? blog.avatar
								: "https://avatars.githubusercontent.com/u/129975940?v=4"
						}
						alt={
							blog.author
								? blog.author
								: "Atif Ali Jaedi's Profile Picture - Creator of LuxeyUI"
						}
						className="!my-0 avatar"
					/>
					<div className="flex flex-col">
						<strong className="text-sm font-medium text-gray-600 dark:text-gray-300">
							{blog.author ? blog.author : "Atif Ali Jaedi"}
						</strong>
						<small className="text-gray-400/80 -my-0.5">
							{blog.profession ? blog.profession : "Frontend Dev"}
						</small>
					</div>
				</div>
				<small className="text-gray-500">{blog.date}</small>
			</div>
			<blog.content components={mdxComponents} />
		</article>
	);
};
