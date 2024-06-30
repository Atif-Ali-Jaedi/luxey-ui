import { Link } from "react-router-dom";
import { Button, Blog } from "@/components";
import { ArrowRight } from "lucide-react";
import blogs from "@/data/blogs/blogs";

export const Blogs = () => {
	return (
		<section className="prose md:prose-lg dark:prose-invert max-w-none md:px-3">
			<header className="flex items-center justify-center flex-col text-center">
				<h2 className="!mt-0 !mb-4">
					Discover the Latest Insights and Inspiration{" "}
				</h2>
				<p className="max-w-[65ch]">
					Explore topics ranging from Latest Announcements, Changelog and more.
				</p>
			</header>
			<div className="grid grid-cols-[repeat(auto-fill,minmax(285px,1fr))] my-8 gap-8 md:gap-5">
				{blogs.slice(0, 3).map((blog, i) => (
					<Blog
						key={i}
						tag={blog.tag}
						title={blog.title}
						name={blog.author}
						createdDate={blog.date}
						link={`./blog/${blog.name}`}
						imgSrc={blog.cover}
						imgAlt={blog.name}
					/>
				))}
			</div>
			<Link to="/blog" className="no-underline flex w-max ml-auto">
				<Button className="font-medium">
					Read All Blogs <ArrowRight />
				</Button>
			</Link>
		</section>
	);
};
