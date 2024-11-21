import React from "react";
import Link, { LinkProps } from "next/link";
import styles from "./Logo.module.css";
import clsx from "clsx";
import Image from "next/image";

export const Logo = ({ ...props }: LinkProps) => {
	const id = React.useId();
	return (
		<Link id={id} className={clsx(styles.link, styles.logoLink)} {...props}>
			<Image
				src="/static/howbizz.svg"
				alt="howbizz-logotype Logo"
				width={128}
				height={32}
				loading="eager"
				style={{ color: "transparent" }}
			/>
		</Link>
	);
};
