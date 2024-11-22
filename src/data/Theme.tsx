import { DeviceAlternate, Moon, Sun } from "@/components";
import { ThemeTypes } from "@/types";

export const themes: ThemeTypes[] = [
	{
		id: `theme-switch-system-`,
		value: "system",
		label: "system",
		icon: <DeviceAlternate />,
	},
	{
		id: `theme-switch-light-`,
		value: "light",
		label: "light",
		icon: <Sun />,
	},
	{
		id: `theme-switch-dark-`,
		value: "dark",
		label: "dark",
		icon: <Moon />,
	},
];
