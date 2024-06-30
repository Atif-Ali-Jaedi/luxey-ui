import { Hero, Details, Features, Blogs } from "@/components";

const Divider = () => (
	<div className="h-px my-16 w-3/4 md:w-2/4 mx-auto bg-gradient-to-r from-transparent via-neon-200 opacity-60 to-transparent"></div>
);
const Home = () => {
	return (
		<>
			<Hero />
			<Divider />
			<Features />
			<Divider />
			<Details />
			<Divider />
			<Blogs />
			<Divider />
		</>
	);
};

export default Home;
