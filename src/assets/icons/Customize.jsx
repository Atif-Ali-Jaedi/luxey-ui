export const Customize = ({className, size}) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={size? size : "24px"} height={size? size:"24px"} viewBox="0 0 24 24" className={className}>
		<path
			fill="currentColor"
			stroke="currentColor"
			strokeWidth="0.25"
			d="M3.5 3.5h7v7h-7zm1 1v5zm9-1h7v7h-7zm1 1v5zm-11 9h7v7h-7zm1 1v5zm12-1h1v3h3v1h-3v3h-1v-3h-3v-1h3zm-2-9v5h5v-5zm-10 0v5h5v-5zm0 10v5h5v-5z"
		></path>
	</svg>
);
