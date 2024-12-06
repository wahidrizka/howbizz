import React from "react";
import clsx from "clsx";
import styles from './Spinner.module.css';

export type SpinnerTypes = {
  size?: number | undefined;
} & React.HTMLAttributes<HTMLDivElement>;

export const Spinner: React.FC<SpinnerTypes> = ({size, className, style, ...props}) => {
  const spinnerStyles = {
    "--spinner-size": `${size ?? 20}px`,
		"--spinner-color": `var(--color-primary)`,
  } as React.CSSProperties;

  const bars = Array.from({ length: 12 }).map((_, index) => (
		<div key={index} className={clsx(styles["bar"])} />
	));
  return (
    <div
			className={clsx(styles.wrapper, className)}
			style={{ ...spinnerStyles, ...style }}
			{...props}
		>
			<div className={clsx(styles.spinner)}>{bars}</div>
		</div>
  )
}