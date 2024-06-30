import { useRef, useEffect } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
	`relative overflow-hidden transition-all duration-300 active:scale-97 inline-flex items-center justify-center gap-3`,
	{
		variants: {
			size: {
			  xs: "px-4 py-1.5 rounded-sm",
				sm: "px-5 py-2 rounded",
				md: "px-6 py-2.5 rounded-md",
				lg: "px-8 py-3 rounded-lg"
			},
			variant: {
				gradient:
					"bg-gradient-to-br from-accent-100 via-accent-200 to-accent-300 text-white",
				bordered: "border-2 border-current",
				light: "dark:text-white",
				white: "text-white bg-dark dark:bg-gray-100 dark:text-black",
				ghost:
					"border-2 border-black hover:bg-black hover:text-white dark:border-gray-100 dark:hover:bg-gray-100 dark:hover:text-black"
			},
			radius: {
			  xs: "rounded-sm",
				sm: "rounded",
				md: "rounded-md",
				lg: "rounded-lg",
				none: "rounded-none",
				full: "rounded-full"
			}
		},
		defaultVariants: {
			size: "md",
			radius: "md",
			variant: "gradient"
		}
	}
);

export const Button = ({
	className,
	children,
	size,
	variant,
	radius,
	onClick,
	...props
}) => {
	const btn = useRef(null);
	useEffect(() => {
		btn.current.addEventListener("click", e => {
			const ripple = document.createElement("span");
			const rect = btn.current.getBoundingClientRect();
			const size = Math.max(rect.width, rect.height);
			const x = e.clientX - rect.left - size / 2;
			const y = e.clientY - rect.top - size / 2;
			const originalColor = window.getComputedStyle(btn.current).color;
			Object.assign(ripple.style, {
				width: `${size}px`,
				height: `${size}px`,
				left: `${x}px`,
				top: `${y}px`,
				background: originalColor.replace("rgb", "rgba").replace(")", ",0.1)")
			});
			ripple.className = "ripple";
			btn.current.appendChild(ripple);
			ripple.addEventListener("animationend", () => ripple.remove());
		});
	}, [btn.current]);
	return (
		<button
			onClick={onClick && onClick}
			ref={btn}
			className={cn(buttonVariants({ variant, size, radius, className }))}
			{...props}
		>
			{children}
		</button>
	);
};
