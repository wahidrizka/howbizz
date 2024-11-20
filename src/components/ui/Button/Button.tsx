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
	/**
	 * The size variations available in Button
	 */
	size?: (typeof ButtonSizes)[number];
	/**
	 * The styling variations available in Button
	 */
	type?: (typeof ButtonTypes)[number];
	/**
	 * The shape variations available in Button
	 */
	shape?: (typeof ButtonShapes)[number];
	/**
	 * Icon-only buttons
	 */
	svgOnly?: boolean;
	/**
	 * The prefix suffix icons for the button
	 */
	leadingVisual?: React.ReactNode;
	/**
	 * The suffix for icons for the button
	 */
	trailingVisual?: React.ReactNode;
	/**
	 * The shadow effect for the button
	 */
	shadow?: boolean;
	/**
	 * The loading state for the button
	 */
	loading?: boolean;
	/**
	 * The disabled state for the button
	 */
	disabled?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

export const Button = ({
	size,
	type,
	shape,
	svgOnly = false,
	leadingVisual: prefix,
	trailingVisual: suffix,
	shadow = false,
	loading = false,
	disabled = false,
	className,
	children,
	...props
}: ButtonBaseProps) => {
	const [isHovered, setIsHovered] = useState(false);

	const themedClasses = useMemo(() => {
		if (type === "error" || type === "warning") {
			return clsx(
				styles["new-themed"],
				styles[`new-${type}`],
				styles[`new-${type}-fill`]
			);
		}
		return null;
	}, [type]);

	const handleMouseEnter = useCallback(() => setIsHovered(true), []);
	const handleMouseLeave = useCallback(() => setIsHovered(false), []);

	const spinnerSize = useMemo(() => {
		if (size === "large") return 24;
		return 16;
	}, [size]);

	return (
		<button
			type="button"
			aria-disabled={disabled && true}
			className={clsx(
				styles["reset"],
				styles["base"],
				styles["button"],
				size && styles[size],
				type && styles[type],
				themedClasses,
				shape && shape !== "rounded" && styles["shape"],
				shape === "circle" && styles["circle"],
				shape === "rounded" && styles["rounded"],
				shadow && styles["shadow"],
				loading && styles["loading"],
				isHovered && styles["invert"],
				className
			)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			data-button
			data-prefix={!!prefix || loading}
			data-suffix={!!suffix}
			data-hover={isHovered}
			disabled={disabled}
			{...props}
		>
			{loading && (
				<div className={clsx(styles["prefix"])}>
					<Spinner size={spinnerSize} />
				</div>
			)}
			{prefix && <span className={styles["prefix"]}>{prefix}</span>}
			<span className={clsx(styles["content"], svgOnly && styles["flex"])}>
				{children}
			</span>
			{suffix && <span className={styles["suffix"]}>{suffix}</span>}
		</button>
	);
};
