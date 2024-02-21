import { createContext, useContext, useEffect, useState } from "react";

const Theme = createContext();
const ToggleTheme = createContext();

const useTheme = () => useContext(Theme);
const useToggleTheme = () => useContext(ToggleTheme);

const ThemeProvider = ({ children }) => {
	const [mode, setMode] = useState(
		localStorage.getItem("mode") === "dark" || !localStorage.getItem("mode")
	);

	useEffect(() => {
		if (!mode) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("mode", "light");
			return;
		}
		document.documentElement.classList.add("dark");
		localStorage.setItem("mode", "dark");
		
	}, [mode]);

	const toggleTheme = () => setMode(prev => !prev);
	return (
		<Theme.Provider value={mode}>
			<ToggleTheme.Provider value={toggleTheme}>
				{children}
			</ToggleTheme.Provider>
		</Theme.Provider>
	);
};

export { useTheme, useToggleTheme };
export default ThemeProvider;
