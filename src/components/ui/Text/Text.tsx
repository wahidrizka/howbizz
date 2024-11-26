"use client";
import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import styles from "./Text.module.css";
import { ResponsiveMap } from "@/types";
import { getResponsiveValue } from "@/utils";

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
	"div",
] as const;
export const TextAligns = ["left", "center", "right"] as const;
export const TextTransforms = ["uppercase", "lowercase", "capitalize"] as const;

export const defaultTextTag = TextTags[0];

export type TextProps = {
	as?: (typeof TextTags)[number];
	size?: string | ResponsiveMap<string>;
	lineHeight?: string | ResponsiveMap<string>;
	letterSpacing?: string | ResponsiveMap<string>;
	weight?: string | number | ResponsiveMap<string>;
	variant?:
		| (typeof TextVariants)[number]
		| ResponsiveMap<(typeof TextVariants)[number]>;
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
	size,
	lineHeight,
	letterSpacing,
	weight,
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
	const isResponsiveSize = typeof size === "object";
	const isResponsiveLineHeight = typeof lineHeight === "object";
	const isResponsiveLetterSpacing = typeof letterSpacing === "object";
	const isResponsiveWeight = typeof weight === "object";

	// small
	const smSize = isResponsiveSize ? getResponsiveValue(size, "sm") : undefined;
	const smLineHeight = isResponsiveLineHeight
		? getResponsiveValue(lineHeight, "sm")
		: undefined;
	const smWeight = isResponsiveWeight
		? getResponsiveValue(weight, "sm")
		: undefined;
	const smLetterSpacing = isResponsiveLetterSpacing
		? getResponsiveValue(letterSpacing, "sm")
		: undefined;

	// medium
	const mdSize = isResponsiveSize ? getResponsiveValue(size, "md") : undefined;
	const mdLineHeight = isResponsiveLineHeight
		? getResponsiveValue(lineHeight, "md")
		: undefined;
	const mdWeight = isResponsiveWeight
		? getResponsiveValue(weight, "md")
		: undefined;
	const mdLetterSpacing = isResponsiveLetterSpacing
		? getResponsiveValue(letterSpacing, "md")
		: undefined;

	// large
	const lgSize = isResponsiveSize ? getResponsiveValue(size, "lg") : undefined;
	const lgLineHeight = isResponsiveLineHeight
		? getResponsiveValue(lineHeight, "lg")
		: undefined;
	const lgWeight = isResponsiveWeight
		? getResponsiveValue(weight, "lg")
		: undefined;
	const lgLetterSpacing = isResponsiveLetterSpacing
		? getResponsiveValue(letterSpacing, "lg")
		: undefined;

	const textWrapperStyles = {
		"--text-color": `var(--ds-${color || "gray-1000"})`,

		"--sm-text-size": smSize,
		"--sm-text-line-height": smLineHeight,
		"--sm-text-weight": smWeight,
		"--sm-text-letter-spacing": smLetterSpacing,

		"--md-text-size": mdSize,
		"--md-text-line-height": mdLineHeight,
		"--md-text-weight": mdWeight,
		"--md-text-letter-spacing": mdLetterSpacing,

		"--lg-text-size": lgSize,
		"--lg-text-line-height": lgLineHeight,
		"--lg-text-weight": lgWeight,
		"--lg-text-letter-spacing": lgLetterSpacing,

		"--text-size": !isResponsiveSize ? size : undefined,
		"--text-line-height": !isResponsiveLineHeight ? lineHeight : undefined,
		"--text-letter-spacing": !isResponsiveLetterSpacing
			? letterSpacing
			: undefined,
		"--text-weight": !isResponsiveWeight ? weight : undefined,
	};

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

	const variantClasses = React.useMemo(() => {
		if (!variant) return null;

		return typeof variant === "string"
			? styles[`variant--${variant}`]
			: Object.entries(variant)
					.map(([viewport, value]) => styles[`variant--${viewport}-${value}`])
					.join(" ");
	}, [variant]);

	const textClasses = clsx(
		styles.textWrapper,
		variantClasses,
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
			style: { ...textWrapperStyles, ...truncateStyles, ...style },
			...props,
		},
		children
	);
};
