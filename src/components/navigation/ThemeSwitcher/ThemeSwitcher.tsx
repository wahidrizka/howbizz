import clsx from "clsx";
import React from "react";
import styles from "./ThemeSwitcher.module.css";
import { themes } from "@/data";
import { useTheme } from "next-themes";

export type ThemeSwitcherProps = {
	size?: "small" | "large";
} & React.HTMLAttributes<HTMLFieldSetElement>;

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
	size,
	className,
	style,
	...props
}) => {
	const [mounted, setMounted] = React.useState<boolean>(false);
	const { theme, setTheme } = useTheme();

	React.useEffect(() => {
		setMounted(true);

		return () => {
			setMounted(false);
		};
	}, []);

	return mounted ? (
		<fieldset
			data-small={size === "small" ? true : false}
			className={clsx(styles.root, className)}
			style={style}
			{...props}
		>
			<legend className="sr-only">Select a display theme: </legend>
			{themes.map((item, index) => (
				<span key={index} style={{ height: "100%" }}>
					<input
						aria-label={item.label}
						id={item.id}
						type="radio"
						value={item.value}
						checked={theme === item.value}
						onChange={() => setTheme(item.value)}
					/>
					<label htmlFor={item.id}>
						<span className="sr-only">{item.label}</span>
						{item.icon}
					</label>
				</span>
			))}
		</fieldset>
	) : null;
};
