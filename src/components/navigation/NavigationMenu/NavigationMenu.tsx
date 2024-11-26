"use client";
import React from "react";
import clsx from "clsx";
import styles from "./NavigationMenu.module.css";
import Link from "next/link";
import { links } from "@/data";
import { usePathname } from "next/navigation";

export const NavigationMenu = ({
	className,
	style,
	children,
	...props
}: React.HTMLAttributes<HTMLElement>) => {
	const pathname = usePathname();
	const [highlightStyle, setHighlightStyle] =
		React.useState<React.CSSProperties>({
			opacity: 0,
			width: 0,
			transform: "translateX(0px)",
		});
	const [active, setActive] = React.useState<string>("open");

	const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
		setActive("closed");
		const target = e.currentTarget;
		const rect = target.getBoundingClientRect();

		const parentRect = target.parentElement!.getBoundingClientRect();

		setHighlightStyle({
			opacity: 1,
			width: `${rect.width}px`,
			transform: `translateX(${rect.left - parentRect.left}px)`,
		});
	};

	const handleMouseLeave = () => {
		setActive("open");
		setHighlightStyle((prev) => ({
			...prev,
			opacity: 0,
		}));
	};

	const navigationMenuStyles = {
		"--indicator-height": "10px",
		"--arrow-offset": "-10px",
		"--content-width": "-16px",
		"--left-offset": "calc(-1* var(--gap-between-logo-and-nav) - 98px)",
		"--pointer-x": "168.71875px",
		"--pointer-y": "30%",
	} as React.CSSProperties;

	const tabsHighlightStyles = {
		transitionDuration: "150ms",
	} as React.CSSProperties;
	return (
		<nav
			aria-label="Main"
			data-orientation="horizontal"
			dir="ltr"
			className={clsx(styles.menuRoot, className)}
			style={{ ...navigationMenuStyles, ...style }}
			{...props}
		>
			<div
				aria-hidden
				className={clsx(styles.tabsHighlight)}
				style={{ ...tabsHighlightStyles, ...highlightStyle }}
			/>
			<div style={{ position: "relative" }}>
				<ul
					data-orientation="horizontal"
					className={clsx(styles.menuList)}
					dir="ltr"
				>
					{links.map((link, index) => (
						<li
							key={index}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<Link
								className={clsx(styles.menuLink, styles.link)}
								href={link.href}
								data-active={pathname === link.href && active}
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
