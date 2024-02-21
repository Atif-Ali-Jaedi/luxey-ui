import { useRef, useEffect } from "react";

const Button = ({ className, children, rippleClasses, onClick }) => {
	const btn = useRef(null);
	useEffect(() => {
		btn.current.addEventListener("click", e => {
			const ripple = document.createElement("span");
			const rect = btn.current.getBoundingClientRect();
			const size = Math.max(rect.width, rect.height);
			const x = e.clientX - rect.left - size / 2;
			const y = e.clientY - rect.top - size / 2;
			Object.assign(ripple.style, {
				width: `${size}px`,
				height: `${size}px`,
				left: `${x}px`,
				top: `${y}px`
			});
			ripple.className = `ripple bg-black/5 dark:bg-white/10 ${rippleClasses}`;
			btn.current.appendChild(ripple);
			ripple.addEventListener("animationend", () => ripple.remove());
		});
	}, [btn.current, rippleClasses]);
	return (
		<button
			onClick={onClick}
			ref={btn}
			className={`relative overflow-hidden ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
