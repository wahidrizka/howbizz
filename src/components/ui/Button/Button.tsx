"use client";
import clsx from "clsx";
import React, { useState, useMemo, useCallback } from "react";
import styles from "./Button.module.css";
import { Spinner } from "../Spinner";

export const ButtonSizes = ["tiny", "small", "large"] as const;
export const ButtonTypes = [
	"secondary",
	"tertiary",
	"error",
	"warning",
] as const;
export const ButtonShapes = ["square", "circle", "rounded"] as const;

export type ButtonBaseProps = {
	size?: (typeof ButtonSizes)[number];
	type?: (typeof ButtonTypes)[number];
	shape?: (typeof ButtonShapes)[number];
	svgOnly?: boolean;
	leadingVisual?: React.ReactNode;
	trailingVisual?: React.ReactNode;
	shadow?: boolean;
	loading?: boolean;
	disabled?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonBaseProps> = ({
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
	...props
}) => {
	const [isHovered, setIsHovered] = useState(false);

	const spinnerSize = size === "large" ? 24 : 16;

	const buttonClasses = clsx(
		styles.reset,
		styles.base,
		styles.button,
		size && styles[size],
		type && styles[type],
		type &&
			(type === "error" || type === "warning") && [
				styles["new-themed"],
				styles[`new-${type}`],
				styles[`new-${type}-fill`],
			],
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
			{...props}
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
