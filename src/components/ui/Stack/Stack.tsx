import React from "react";
import styles from "./Stack.module.css";
import clsx from "clsx";
import { getResponsiveValue } from "@/utils";
import { ResponsiveMap } from "@/types";

export const StackDirection = ["row", "column"] as const;
export const StackAlign = [
	"start",
	"end",
	"center",
	"baseline",
	"stretch",
] as const;
export const StackJustify = [
	"normal",
	"flex-start",
	"flex-end",
	"center",
	"space-between",
	"space-around",
	"space-evenly",
	"stretch",
] as const;
export const StackFlex = ["initial", "1 1 0%", "1 1 auto", "none"] as const;

export const DefaultStackDirection = StackDirection[1];
export const DefaultStackAlign = StackAlign[4];
export const DefaultStackJustify = StackJustify[1];
export const DefaultStackFlex = StackFlex[0];

export type StackProps = {
	direction?:
		| (typeof StackDirection)[number]
		| ResponsiveMap<(typeof StackDirection)[number]>;
	align?:
		| (typeof StackAlign)[number]
		| ResponsiveMap<(typeof StackAlign)[number]>;
	justify?:
		| (typeof StackJustify)[number]
		| ResponsiveMap<(typeof StackJustify)[number]>;
	flex?: (typeof StackFlex)[number] | ResponsiveMap<(typeof StackFlex)[number]>;
	gap?: string | number | ResponsiveMap<string | number>;
	padding?: string | number | ResponsiveMap<string | number>;
} & React.HTMLAttributes<HTMLDivElement>;

export const Stack: React.FC<StackProps> = ({
	direction = DefaultStackDirection,
	align = DefaultStackAlign,
	justify = DefaultStackJustify,
	flex = DefaultStackFlex,
	gap = "0px",
	padding = "0px",
	className,
	style,
	children,
	...props
}) => {
	const isResponsivePadding = typeof padding === "object";
	const isResponsiveGap = typeof gap === "object";

	// Responsive values
	const xsPadding = isResponsivePadding
		? getResponsiveValue(padding, "xs")
		: undefined;
	const smPadding = isResponsivePadding
		? getResponsiveValue(padding, "sm")
		: undefined;
	const mdPadding = isResponsivePadding
		? getResponsiveValue(padding, "md")
		: undefined;
	const lgPadding = isResponsivePadding
		? getResponsiveValue(padding, "lg")
		: undefined;
	const xlPadding = isResponsivePadding
		? getResponsiveValue(padding, "xl")
		: undefined;

	const xsGap = isResponsiveGap ? getResponsiveValue(gap, "xs") : undefined;
	const smGap = isResponsiveGap ? getResponsiveValue(gap, "sm") : undefined;
	const mdGap = isResponsiveGap ? getResponsiveValue(gap, "md") : undefined;
	const lgGap = isResponsiveGap ? getResponsiveValue(gap, "lg") : undefined;
	const xlGap = isResponsiveGap ? getResponsiveValue(gap, "xl") : undefined;

	// Styles
	const stackStyles = {
		...style,
		"--stack-flex": flex,
		"--stack-direction":
			typeof direction === "object" ? DefaultStackDirection : direction,
		"--stack-align": typeof align === "object" ? DefaultStackAlign : align,
		"--stack-justify":
			typeof justify === "object" ? DefaultStackJustify : justify,

		// Responsive styles
		"--xs-stack-padding": xsPadding,
		"--sm-stack-padding": smPadding,
		"--md-stack-padding": mdPadding,
		"--lg-stack-padding": lgPadding,
		"--xl-stack-padding": xlPadding,
		"--xs-stack-gap": xsGap,
		"--sm-stack-gap": smGap,
		"--md-stack-gap": mdGap,
		"--lg-stack-gap": lgGap,
		"--xl-stack-gap": xlGap,
		// Fallback to global value if not responsive
		"--stack-padding": !isResponsivePadding ? padding : undefined,
		"--stack-gap": !isResponsiveGap ? gap : undefined,
	} as React.CSSProperties;

	return (
		<div
			className={clsx(
				styles.stack,
				padding !== "0px" && styles.padding,
				className
			)}
			style={stackStyles}
			{...props}
		>
			{children}
		</div>
	);
};
