import { HardDriveDownload, Palette, CircleGauge, Blocks} from "lucide-react";
import { Customize } from "@/assets";
const processes = [
	{ icon: HardDriveDownload, process: "Installation" },
	{ icon: Palette, process: "Configuration" },
	{ icon: CircleGauge, process: "Optimization" },
	{ icon:Blocks, process: "Integration" },
	{ icon: Customize, process: "Customization" }
];
export { processes };
