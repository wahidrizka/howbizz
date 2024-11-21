import React from "react";
import styles from "./Stack.module.css";
import clsx from "clsx";

export const StackDirection = ["row", "column"] as const;
export const StackGap = [
	0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 13, 14, 15, 16, 17, 18, 19, 20,
] as const;
export const StackPadding = [
	0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 13, 14, 15, 16, 17, 18, 19, 20,
] as const;

export const DefaultStackDirection = StackDirection[1];
export const DefaultStackGap = StackGap[0];
export const DefaultStackPadding = StackPadding[0];

export type ResponsiveDirectionMap = {
	sm?: (typeof StackDirection)[number];
	md?: (typeof StackDirection)[number];
	lg?: (typeof StackDirection)[number];
	xl?: (typeof StackDirection)[number];
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
	gap?: (typeof StackGap)[number] | ResponsiveGapMap;
	padding?: (typeof StackPadding)[number] | ResponsivePaddingMap;
} & React.HTMLAttributes<HTMLDivElement>;

export const Stack: React.FC<StackProps> = ({
	direction = DefaultStackDirection,
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

	const gapClasses = React.useMemo(() => {
		if (!gap) return null;

		return typeof gap === "number"
			? styles[`gap-${gap}`]
			: Object.entries(gap)
					.map(([viewport, value]) => styles[`gap-${viewport}-${value}`])
					.join(" ");
	}, [gap]);

	const paddingClasses = React.useMemo(() => {
		if (!padding) return null;

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
