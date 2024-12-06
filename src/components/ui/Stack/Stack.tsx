"use client";
import React from "react";
import clsx from "clsx";
import styles from "./Stack.module.css";
import { ResponsiveMap } from "@/types";
import { generateResponsiveComponentStyles } from "@/utils";

const StackFlex = ["initial", "1 1 0%", "1 1 auto", "none"] as const;
const StackDirection = ["column", "row"] as const;
const StackAlign = ["stretch", "center", "start", "end", "baseline"] as const;
const StackJustify = [
	"normal",
	"flex-start",
	"flex-end",
	"center",
	"space-between",
	"space-around",
	"space-evenly",
	"stretch",
] as const;

export type StackType = {
	flex?: string | ResponsiveMap<string>;
	direction?: string | ResponsiveMap<string>;
	align?: string | ResponsiveMap<string>;
	justify?: string | ResponsiveMap<string>;
	padding?: string | ResponsiveMap<string>;
	gap?: string | ResponsiveMap<string>;
} & React.HTMLAttributes<HTMLDivElement>;

export const Stack: React.FC<StackType> = ({
	flex = StackFlex[0],
	direction = StackDirection[0],
	align = StackAlign[0],
	justify = StackJustify[1],
	padding = "0px",
	gap = "0px",
	children,
	className,
	style,
	...props
}) => {
	const stackStyles = {
		...generateResponsiveComponentStyles("stack", "flex", flex),
		...generateResponsiveComponentStyles("stack", "direction", direction),
		...generateResponsiveComponentStyles("stack", "align", align),
		...generateResponsiveComponentStyles("stack", "justify", justify),
		...generateResponsiveComponentStyles("stack", "padding", padding),
		...generateResponsiveComponentStyles("stack", "gap", gap),
	} as React.CSSProperties;

	return (
		<div
			className={clsx(styles.stack, className)}
			data-version={`v${process.env.npm_package_version}`}
			style={{ ...style, ...stackStyles }}
			{...props}
		>
			{children}
		</div>
	);
};
