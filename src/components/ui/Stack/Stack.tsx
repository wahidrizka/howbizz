import React from "react";
import styles from "./Stack.module.css";
import clsx from "clsx";

export const StackDirection = ["row", "column"] as const;
export const StackGap = [
	0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
] as const;
export const StackPadding = [
	0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
] as const;
export const StackAlign = [
	"start",
	"end",
	"center",
	"baseline",
	"stretch",
] as const;
export const StackJustify = [
	"normal",
	"start",
	"end",
	"center",
	"between",
	"around",
	"evenly",
	"stretch",
] as const;
export const StackFlex = ["initial", "1", "auto", "none"] as const;

export const DefaultStackDirection = StackDirection[1];
export const DefaultStackGap = StackGap[0];
export const DefaultStackPadding = StackPadding[0];
export const DefaultStackAlign = StackAlign[4];
export const DefaultStackJustify = StackJustify[1];
export const DefaultStackFlex = StackFlex[0];

export type ResponsiveDirectionMap = {
	sm?: (typeof StackDirection)[number];
	md?: (typeof StackDirection)[number];
	lg?: (typeof StackDirection)[number];
	xl?: (typeof StackDirection)[number];
};
export type ResponsiveAlignMap = {
	sm?: (typeof StackAlign)[number];
	md?: (typeof StackAlign)[number];
	lg?: (typeof StackAlign)[number];
	xl?: (typeof StackAlign)[number];
};
export type ResponsiveJustifyMap = {
	sm?: (typeof StackJustify)[number];
	md?: (typeof StackJustify)[number];
	lg?: (typeof StackJustify)[number];
	xl?: (typeof StackJustify)[number];
};
export type ResponsiveFlexMap = {
	sm?: (typeof StackFlex)[number];
	md?: (typeof StackFlex)[number];
	lg?: (typeof StackFlex)[number];
	xl?: (typeof StackFlex)[number];
};
export type ResponsiveGapMap = {
	sm?: (typeof StackGap)[number];
	md?: (typeof StackGap)[number];
	lg?: (typeof StackGap)[number];
	xl?: (typeof StackGap)[number];
};
export type ResponsivePaddingMap = {
	sm?: (typeof StackPadding)[number];
	md?: (typeof StackPadding)[number];
	lg?: (typeof StackPadding)[number];
	xl?: (typeof StackPadding)[number];
};

export type StackProps = {
	direction?: (typeof StackDirection)[number] | ResponsiveDirectionMap;
	align?: (typeof StackAlign)[number] | ResponsiveAlignMap;
	justify?: (typeof StackJustify)[number] | ResponsiveJustifyMap;
	flex?: (typeof StackFlex)[number] | ResponsiveFlexMap;
	gap?: (typeof StackGap)[number] | ResponsiveGapMap;
	padding?: (typeof StackPadding)[number] | ResponsivePaddingMap;
} & React.HTMLAttributes<HTMLDivElement>;

export const Stack: React.FC<StackProps> = ({
	direction = DefaultStackDirection,
	align = DefaultStackAlign,
	justify = DefaultStackJustify,
	flex = DefaultStackFlex,
	gap = DefaultStackGap,
	padding = DefaultStackPadding,
	className,
	style,
	children,
	...props
}) => {
	const directionClasses = React.useMemo(() => {
		if (!direction) return null;

		return typeof direction === "string"
			? styles[`direction-${direction}`]
			: Object.entries(direction)
					.map(([viewport, value]) => styles[`direction-${viewport}-${value}`])
					.join(" ");
	}, [direction]);

	const alignClasses = React.useMemo(() => {
		if (!align) return null;

		return typeof align === "string"
			? styles[`align-${align}`]
			: Object.entries(align)
					.map(([viewport, value]) => styles[`align-${viewport}-${value}`])
					.join(" ");
	}, [align]);

	const justifyClasses = React.useMemo(() => {
		if (!justify) return null;

		return typeof justify === "string"
			? styles[`justify-${justify}`]
			: Object.entries(justify)
					.map(([viewport, value]) => styles[`justify-${viewport}-${value}`])
					.join(" ");
	}, [justify]);

	const flexClasses = React.useMemo(() => {
		if (!flex) return null;

		return typeof flex === "string"
			? styles[`flex-${flex}`]
			: Object.entries(flex)
					.map(([viewport, value]) => styles[`flex-${viewport}-${value}`])
					.join(" ");
	}, [flex]);

	const gapClasses = React.useMemo(() => {
		if (gap === null || gap === undefined) return null;

		return typeof gap === "number"
			? styles[`gap-${gap}`]
			: Object.entries(gap)
					.map(([viewport, value]) => styles[`gap-${viewport}-${value}`])
					.join(" ");
	}, [gap]);

	const paddingClasses = React.useMemo(() => {
		if (padding === null || padding === undefined) return null;

		return typeof padding === "number"
			? styles[`padding-${padding}`]
			: Object.entries(padding)
					.map(([viewport, value]) => styles[`padding-${viewport}-${value}`])
					.join(" ");
	}, [padding]);

	return (
		<div
			className={clsx(
				styles.stack,
				directionClasses,
				alignClasses,
				justifyClasses,
				flexClasses,
				gapClasses,
				styles.padding,
				paddingClasses,
				className
			)}
			style={style}
			{...props}
		>
			{children}
		</div>
	);
};
