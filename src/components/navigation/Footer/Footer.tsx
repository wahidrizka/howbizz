"use client";
import React from "react";
import clsx from "clsx";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/data";
import { ThemeSwitcher } from "./ThemeSwitcher";

export type FooterType = {
	variant?: "subtle";
} & React.HTMLAttributes<HTMLElement>;

export const Footer = ({
	variant = "subtle",
	className,
	style,
	...props
}: FooterType) => {
	const footerLinkStyles = {
		fontFeatureSettings: "ss05",
	} as React.CSSProperties;

	const currentYear = new Date().getFullYear();

	return (
		<footer
			className={clsx(
				styles.footer,
				styles.marketingFooterContainer,
				className
			)}
			data-variant={variant}
			{...props}
		>
			<nav aria-label="Howbizz Directory">
				<div className={clsx(styles.marketingFooter)}>
					{footerLinks.map((footerLink, footerLinkIndex) => (
						<div
							key={footerLinkIndex}
							className={clsx(styles.geistFootergroup)}
						>
							<h2 className={clsx(styles.geistFooterHeader)}>
								{footerLink.header}
							</h2>
							<ul className={clsx(styles.geistFooterList)}>
								{footerLink?.links?.map((link, linkIndex) => (
									<li key={linkIndex} className={clsx(styles.geistFooterItem)}>
										<Link
											href={link.href}
											className={clsx(styles.link, styles.linkSecondary)}
											style={footerLinkStyles}
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}

					<Link href="/" className={clsx(styles.link, styles.logoHowbizz)}>
						<Image
							src="/static/howbizz.svg"
							alt="howbizz-logotype Logo"
							width={128}
							height={32}
							loading="eager"
							style={{ color: "transparent" }}
						/>
					</Link>
				</div>

				<div className={clsx(styles.statusRow)}>
					<p>© {currentYear} Howbizz, Inc.</p>
					<ThemeSwitcher className={clsx("ml-auto")} />
				</div>
			</nav>
		</footer>
	);
};
