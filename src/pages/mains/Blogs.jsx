import { useState } from "react";
import { Blog } from "@/components";
import blogs from "@/pages/blogs";
const blogCategories = ["All Posts", "Changelog", "Announcement"];
import { Helmet } from "react-helmet-async";

const Blogs = () => {
	const [selectedCategory, setSelectedCategory] = useState("All Posts");

	const filteredBlogs =
		selectedCategory === "All Posts"
			? blogs
			: blogs.filter(blog => blog.tag === selectedCategory);
	return (
		<div className="flex flex-col items-center mb-20">
			<Helmet>
				<title>
					Blog | LuxeyUI - Elevate your design effortlessly and quickly
				</title>
				<meta name="description" content={blogs[0].description} />
			</Helmet>
			<section className="prose md:prose-lg dark:prose-invert md:px-3">
				<header className="flex items-center justify-center flex-col text-center">
					<h2 className="!mt-0 !mb-4">
						Discover the Latest Insights and Inspiration
					</h2>
					<p className="max-w-[65ch]">
						Latest Announcements, Changelog and more.
					</p>
				</header>
				<div className="flex items-center mt-4 pb-5 border-b border-gray-400 dark:border-gray-700/80">
					{blogCategories.map((category, index) => (
						<button
							key={index}
							className={`px-5 py-2 transition-colors duration-300 relative before:content-[''] before:absolute before:rounded-full before:inset-0 before:bg-gradient-to-br before:from-accent-100 before:via-accent-200 before:to-accent-300 before:z-[-1] before:opacity-0 before:transition-opacity before:duration-300 outline-0 after:content-[''] after:absolute after:-bottom-5 after:w-8 after:left-1/2 after:-translate-x-1/2 after:rounded-t-lg after:h-0.5 after:bg-black dark:after:bg-white after:opacity-0 after:transition-opacity after:duration-300 text-sm w-max ${
								selectedCategory === category
									? "before:opacity-100 after:opacity-100 text-white"
									: ""
							}`}
							onClick={() => setSelectedCategory(category)}
						>
							{category}
						</button>
					))}
				</div>
				<h2 className="!my-8 dark:text-gray-200">{selectedCategory}</h2>
				<div className="grid sm:grid-cols-2 gap-5">
					{filteredBlogs.length > 0 ? (
						filteredBlogs.map((blog, index) => (
							<Blog
								key={index}
								tag={blog.tag}
								title={blog.title}
								name={blog.author}
								createdDate={blog.date}
								link={`./${blog.name}`}
								imgSrc={blog.cover}
								imgAlt={blog.name}
							/>
						))
					) : (
						<p className="text-center">No posts available in this category.</p>
					)}
				</div>
			</section>
		</div>
	);
};

export default Blogs;
