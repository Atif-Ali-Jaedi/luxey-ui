import { Link } from "react-router-dom";
import { SquareArrowOutUpRight } from "lucide-react";
export const Blog = ({
	imgSrc,
	imgAlt,
	link,
	createdDate,
	title,
	avatar,
	name,
	profession,
	tag,
	className
}) => {
	return (
		<Link to={link} className={`no-underline ${className}`}>
			<div className="relative group border rounded-2xl border-neon-100/30 dark:[background-image:radial-gradient(circle_at_45%,transparent,rgba(97,87,255,0.15))] backdrop-blur hover:border-neon-100/40">
				<div className="p-1.5 relative">
					<img
						src={
							imgSrc
								? imgSrc
								: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmV0cm98ZW58MHx8MHx8fDA%3D"
						}
						alt={imgAlt && imgAlt}
						className="!my-0 rounded-xl border border-neon-200/30 w-full aspect-video object-cover"
					/>
					<div className="size-8 grid place-items-center rounded-full bg-gradient-to-br absolute top-1/2 left-1/2 -translate-x-1/2 shadow-xl opacity-0 transition-opacity pointer-events-none cursor-pointer -translate-y-1/2 group-hover:opacity-100 group-hover:pointer-events-auto from-accent-100 via-accent-200 to-accent-300 text-white">
						<SquareArrowOutUpRight size={16} />
					</div>
				</div>
				<div className="px-6 py-5">
					<div className="chip !my-0 bg-gradient-to-r from-neon-100 to-neon-200 text-white">
						{tag}
					</div>
					<h4 className="text-lg font-medium !my-4">{title}</h4>
					<div className="flex items-end justify-between">
						<div className="flex items-center gap-3">
							<img
								src={
									avatar
										? avatar
										: "https://avatars.githubusercontent.com/u/129975940?v=4"
								}
								className="size-8 !my-0 object-cover rounded-full"
							/>
							<div className="flex flex-col">
								<strong className="text-sm font-medium text-gray-600 dark:text-gray-300">
									{name ? name : "Atif Ali Jaedi"}
								</strong>
								<small className="text-gray-500 -my-0.5">
									{profession ? profession : "Frontend Dev"}
								</small>
							</div>
						</div>
						<small className="text-gray-500">{createdDate}</small>
					</div>
				</div>
			</div>
		</Link>
	);
};
