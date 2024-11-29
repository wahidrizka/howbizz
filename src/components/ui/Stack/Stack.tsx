import React from "react";
import clsx from "clsx";
import styles from "./Stack.module.css";
import { ResponsiveMap } from "@/types";

export type StackType = {
	flex?: string;
	direction?: string;
	align?: string;
	justify?: string;
	padding?: string | ResponsiveMap<string>;
	gap?: string | ResponsiveMap<string>;
} & React.HTMLAttributes<HTMLDivElement>;

export const Stack: React.FC<StackType> = ({ children }) => {
	const stackStyles = {
		"--stack-flex": "initial",
		"--stack-direction": "column",
		"--stack-align": "stretch",
		"--stack-justify": "flex-start",
		"--stack-padding": "0px",
		"--stack-gap": "12px",
	} as React.CSSProperties;
	return (
		<div className={clsx(styles.stack)} style={{ ...stackStyles }}>
			{children}
		</div>
	);
};
