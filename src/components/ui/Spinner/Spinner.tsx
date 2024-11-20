import React from "react";
import clsx from "clsx";
import styles from "./Spinner.module.css";

export const SpinnerSizes = [10, 12, 14, 16, 20, 24, 32, 48] as const;

export const defaultSpinnerSize = SpinnerSizes[4];

export type SpinnerProps = {
	/**
	 * Specify the text size
	 */
	size?: (typeof SpinnerSizes)[number];
} & React.HTMLAttributes<HTMLDivElement>;

export const Spinner = ({ size, className, style, ...props }: SpinnerProps) => {
	const spinnerStyles = {
		"--spinner-size": `${size ?? defaultSpinnerSize}px`,
		"--spinner-color": `var(--color-primary)`,
	} as React.CSSProperties;

	const bars = Array.from({ length: 12 }).map((_, index) => (
		<div key={index} className={clsx(styles["bar"])} />
	));
	return (
		<div
			className={clsx(styles["wrapper"], className)}
			style={{ ...spinnerStyles, ...style }}
			{...props}
		>
			<div className={clsx(styles["spinner"])}>{bars}</div>
		</div>
	);
};
