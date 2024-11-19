"use client";
import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import styles from "./Text.module.css";

export const TextSizes = [10, 12, 14, 16, 20, 24, 32, 48] as const;
export const TextVariants = [
	"heading-72",
	"heading-64",
	"heading-56",
	"heading-48",
	"heading-40",
	"heading-32",
	"heading-24",
	"heading-20",
	"heading-16",
	"button-16",
	"button-14",
	"button-12",
	"label-20",
	"label-18",
	"label-16",
	"label-14",
	"label-13",
	"label-12",
	"copy-24",
	"copy-20",
	"copy-18",
	"copy-16",
	"copy-14",
	"copy-13",
];
export const TextTags = [
	"p",
	"span",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
] as const;
export const TextAligns = ["left", "center", "right"] as const;
export const TextTransforms = ["uppercase", "lowercase", "capitalize"] as const;

export const defaultTextSize = TextSizes[3];
export const defaultTextTag = TextTags[0];

export type ResponsiveSizeMap = {
	sm?: (typeof TextSizes)[number];
	md?: (typeof TextSizes)[number];
	lg?: (typeof TextSizes)[number];
};

export type ResponsiveVariantMap = {
	sm?: (typeof TextVariants)[number];
	md?: (typeof TextVariants)[number];
	lg?: (typeof TextVariants)[number];
};

export type TextProps = {
	as?: (typeof TextTags)[number];
	/**
	 * Specify the text size
	 */
	size?: (typeof TextSizes)[number] | ResponsiveSizeMap;
	/**
	 * Specify alternative text appearance
	 */
	variant?: (typeof TextVariants)[number] | ResponsiveVariantMap;
	color?: string;
	truncate?: boolean | number;
	align?: (typeof TextAligns)[number];
	monospace?: boolean;
	transform?: (typeof TextTransforms)[number];
	className?: string;
	style?: React.CSSProperties;
} & Omit<React.HTMLAttributes<HTMLElement>, "size">;

export const Text: React.FC<PropsWithChildren<TextProps>> = ({
	as = defaultTextTag,
	size = defaultTextSize,
	variant,
	color = "gray-1000",
	truncate = false,
	align,
	monospace = false,
	transform,
	className,
	children,
	style,
	...props
}) => {
	const truncateStyles = React.useMemo(() => {
		if (!truncate) return null;

		if (typeof truncate === "number") {
			return {
				display: "-webkit-box",
				overflow: "hidden",
				textOverflow: "ellipsis",
				WebkitLineClamp: truncate,
				WebkitBoxOrient: "vertical",
			};
		}
	}, [truncate]);

	const sizeClasses = React.useMemo(() => {
		if (!size) return null;

		return typeof size === "number"
			? styles[`size--${size}`]
			: Object.entries(size)
					.map(([viewport, value]) => styles[`size--${viewport}-${value}`])
					.join(" ");
	}, [size]);

	const variantClasses = React.useMemo(() => {
		if (!variant) return null;

		return typeof variant === "string"
			? styles[`variant--${variant}`]
			: Object.entries(variant)
					.map(([viewport, value]) => styles[`variant--${viewport}-${value}`])
					.join(" ");
	}, [variant]);

	const textClasses = clsx(
		sizeClasses,
		variantClasses,
		color && color,
		truncate && styles.truncate,
		align && styles[`align--${align}`],
		monospace && styles.monospace,
		transform && styles[`transform--${transform}`],
		className
	);

	return React.createElement(
		as,
		{
			className: textClasses,
			style: { ...truncateStyles, ...style },
			...props,
		},
		children
	);
};
