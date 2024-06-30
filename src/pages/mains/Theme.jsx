import { Breadcrumbs } from "../../utils/Breadcrumbs";
import Highlight from "../../utils/Highlight";
const Theme = () => {
	return (
		<>
			<Breadcrumbs data={["Docs", "Theme"]} />
			<article className="prose lg:prose-lg dark:prose-invert">
				<h1 className="my-4">Theme</h1>
				<p className="max-w-[60ch]">
					The theme that is used to build this library comes from{" "}
					<a
						href="https://nextui.org"
						rel="nofollow noreferrer"
						className="link primary no-underline"
						target="_blank"
					>
						NextUI.org
						<svg
							width="14px"
							height="14px"
							viewBox="0 0 16 16"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
						>
							<g fill="currentColor" strokeWidth="0.1">
								<path d="M9 .75A.75.75 0 019.75 0h4.5c.206 0 .393.083.529.218l.001.002.002.001A.748.748 0 0115 .75v4.5a.75.75 0 01-1.5 0V2.56L7.28 8.78a.75.75 0 01-1.06-1.06l6.22-6.22H9.75A.75.75 0 019 .75z"></path>
								<path d="M3.25 3.5a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0110.75 14h-7.5A2.25 2.25 0 011 11.75v-7.5A2.25 2.25 0 013.25 2h4a.75.75 0 010 1.5h-4z"></path>
							</g>
						</svg>
					</a>
					. Their base theme is used.
				</p>
				<ul>
					{[
						"foreground",
						"primary",
						"secondary",
						"success",
						"warning",
						"danger"
					].map((c, i) => (
						<li key={i}>{c}</li>
					))}
				</ul>
				<p>
					Use this <code className="code radius-sm">tailwind.config</code> code
					to use the theme.
				</p>
				<br />
			</article>
			<Highlight
				showLineNumbers
				language="javascript"
				code={`/** @type {import('tailwindcss').Config} */
/* Use tailwind.config instead of module.exports
or export default if you are using tailwindcss cdn */
module.exports = {
// No need to use this line when using tailwindcss cdn
	content: ["./index.html"],
	theme: {
		extend: {
			colors: {
				layout: {
					background: "#FFFFFF",
					foreground: "#11181C",
					divider: "rgba(17, 17, 17, 0.15)",
					focus: "#006FEE"
				},
				content: {
					1: "#FFFFFF",
					2: "#f4f4f5",
					3: "#e4e4e7",
					4: "#d4d4d8"
				},
				base: {
					default: "#d4d4d8",
					foreground: "#18181A",
					foreground_light: "#2F2F31",
					primary: "#006FEE",
					secondary: "#7828c8",
					success: "#17c964",
					warning: "#f5a524",
					danger: "#f31260"
				},
				default: {
					50: "#fafafa",
					100: "#f4f4f5",
					200: "#e4e4e7",
					300: "#d4d4d8",
					400: "#a1a1aa",
					500: "#71717a",
					600: "#52525b",
					700: "#3f3f46",
					800: "#27272a",
					900: "#18181b"
				},
				primary: {
					50: "#e6f1fe",
					100: "#cce3fd",
					200: "#99c7fb",
					300: "#66aaf9",
					400: "#338ef7",
					500: "#006FEE",
					600: "#005bc4",
					700: "#004493",
					800: "#002e62",
					900: "#001731"
				},
				secondary: {
					50: "#f2eafa",
					100: "#e4d4f4",
					200: "#c9a9e9",
					300: "#ae7ede",
					400: "#9353d3",
					500: "#7828c8",
					600: "#6020a0",
					700: "#481878",
					800: "#301050",
					900: "#180828"
				},
				success: {
					50: "#e8faf0",
					100: "#d1f4e0",
					200: "#a2e9c1",
					300: "#74dfa2",
					400: "#45d483",
					500: "#17c964",
					600: "#12a150",
					700: "#0e793c",
					800: "#095028",
					900: "#052814"
				},
				warning: {
					50: "#fefce8",
					100: "#fdedd3",
					200: "#fbdba7",
					300: "#f9c97c",
					400: "#f7b750",
					500: "#f5a524",
					600: "#c4841d",
					700: "#936316",
					800: "#62420e",
					900: "#312107"
				},
				danger: {
					50: "#fee7ef",
					100: "#fdd0df",
					200: "#faa0bf",
					300: "#f871a0",
					400: "#f54180",
					500: "#f31260",
					600: "#c20e4d",
					700: "#920b3a",
					800: "#610726",
					900: "#310413"
				}
			}
		}
	},
	plugins: []
};
`}
			/>
		</>
	);
};

export default Theme;
