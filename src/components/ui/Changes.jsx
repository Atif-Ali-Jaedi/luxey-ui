export const Changes = ({ children, version, date, heading, text }) => (
	<div className="my-12">
		<div className="chip primary">v {version}</div>
		<br />
		<br />
		<time className="text-zinc-500">{date}</time>
		<h3 className="h3 mt-3 mb-2">{heading}</h3>
		<p className="text-zinc-600 mb-2 dark:text-zinc-300">{text}</p>
		{children}
	</div>
);
