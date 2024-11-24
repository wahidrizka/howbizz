"use client";
import clsx from "clsx";
import React, { useState, useCallback } from "react";
import Link, { LinkProps } from "next/link";
import styles from "./Button.module.css";
import { Spinner } from "../Spinner";

export const ButtonSizes = ["tiny", "small", "large"] as const;
export const ButtonTypes = [
	"secondary",
	"tertiary",
	"error",
	"warning",
	"howbizz",
] as const;
export const ButtonShapes = ["square", "circle", "rounded"] as const;

type ButtonBaseProps = {
	as?: "button" | "link";
	size?: (typeof ButtonSizes)[number];
	type?: (typeof ButtonTypes)[number];
	shape?: (typeof ButtonShapes)[number];
	svgOnly?: boolean;
	leadingVisual?: React.ReactNode;
	trailingVisual?: React.ReactNode;
	shadow?: boolean;
	loading?: boolean;
	disabled?: boolean;
	className?: string;
	style?: React.CSSProperties;
	children?: React.ReactNode;
};

// Props tambahan untuk elemen `button`
type ButtonProps = ButtonBaseProps &
	React.ButtonHTMLAttributes<HTMLButtonElement>;

// Props tambahan untuk elemen `Link`
type LinkButtonProps = ButtonBaseProps &
	Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
	LinkProps;

export type Props = ButtonProps | LinkButtonProps;

export const Button: React.FC<Props> = (props) => {
	const [isHovered, setIsHovered] = useState(false);

	const {
		as = "button",
		size,
		type,
		shape,
		svgOnly = false,
		leadingVisual,
		trailingVisual,
		shadow = false,
		loading = false,
		disabled = false,
		className,
		children,
		style,
		...rest
	} = props;

	const spinnerSize = size === "large" ? 24 : 16;

	const buttonClasses = clsx(
		styles.reset,
		styles.base,
		styles.button,
		size && styles[size],
		type && (type === "error" || type === "warning" || type === "howbizz")
			? [
					styles["new-themed"],
					styles[`new-${type}`],
					styles[`new-${type}-fill`],
			  ]
			: type && styles[type],
		shape && shape !== "rounded" && styles.shape,
		shape === "circle" && styles.circle,
		shape === "rounded" && styles.rounded,
		shadow && styles.shadow,
		loading && styles.loading,
		isHovered && styles.invert,
		className
	);

	const handleMouseEnter = useCallback(() => setIsHovered(true), []);
	const handleMouseLeave = useCallback(() => setIsHovered(false), []);

	// Jika `as` adalah "link", gunakan `Link`
	if (as === "link" && "href" in props) {
		const { ...linkRest } = rest as LinkButtonProps;

		return (
			<Link
				{...linkRest}
				className={buttonClasses}
				style={style}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				data-button
				data-prefix={!!leadingVisual || loading}
				data-suffix={!!trailingVisual}
				data-hover={isHovered}
				disabled={disabled}
				{...linkRest}
			>
				{loading && (
					<div className={styles.prefix}>
						<Spinner size={spinnerSize} />
					</div>
				)}
				{leadingVisual && (
					<span className={styles.prefix}>{leadingVisual}</span>
				)}
				<span className={clsx(styles.content, svgOnly && styles.flex)}>
					{children}
				</span>
				{trailingVisual && (
					<span className={styles.suffix}>{trailingVisual}</span>
				)}
			</Link>
		);
	}

	// Jika `as` adalah "button", gunakan elemen `<button>`
	return (
		<button
			type="button"
			aria-disabled={disabled}
			className={buttonClasses}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			data-button
			data-prefix={!!leadingVisual || loading}
			data-suffix={!!trailingVisual}
			data-hover={isHovered}
			disabled={disabled}
			style={style}
			{...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
		>
			{loading && (
				<div className={styles.prefix}>
					<Spinner size={spinnerSize} />
				</div>
			)}
			{leadingVisual && <span className={styles.prefix}>{leadingVisual}</span>}
			<span className={clsx(styles.content, svgOnly && styles.flex)}>
				{children}
			</span>
			{trailingVisual && (
				<span className={styles.suffix}>{trailingVisual}</span>
			)}
		</button>
	);
};
