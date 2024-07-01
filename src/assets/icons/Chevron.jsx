export const Chevron = ({position}) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 24 24"
		fill="none"
		stroke="url(#grad1)"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className={position === "left"?  "-rotate-180" : position === "top"?  "-rotate-90" : position === "bottom"?  "rotate-90" : ""}
	>
		<defs>
			<linearGradient id="grad1" gradientTransform="rotate(90)">
				<stop offset="0%" stopColor="#7153EB" />
				<stop offset="100%" stopColor="#ee49fd" />
			</linearGradient>
		</defs>
		<path d="m9 18 6-6-6-6" />
	</svg>
);
