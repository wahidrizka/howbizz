"use client";
import React from "react";
import clsx from "clsx";
import styles from "./ToggleTheme.module.css";
import { themes } from "@/data";
import { useTheme } from "next-themes";

export const ToggleTheme = () => {
	const themeId = React.useId();
	const [mount, setMount] = React.useState<boolean>(false);
	const { theme, setTheme } = useTheme();

	React.useEffect(() => {
		setMount(true);
	}, []);
	return mount ? (
		<>
			<p>Theme</p>
			<fieldset
				className={clsx(
					"tailwind",
					styles["switcher-root"],
					styles["themeSwitcherComponent"]
				)}
			>
				<legend className={clsx("sr-only")}>Select a display theme:</legend>

				{themes.map((item, index) => (
					<span key={index} style={{ height: "100%" }}>
						<input
							aria-label={item.label}
							id={`${item.id}${themeId}`}
							type="radio"
							value={item.value}
							checked={theme === item.value}
							onChange={() => setTheme(item.value)}
						/>
						<label htmlFor={`${item.id}${themeId}`}>
							<span className={clsx("sr-only")}>{item.label}</span>
							{item.icon}
						</label>
					</span>
				))}
			</fieldset>
		</>
	) : null;
};
