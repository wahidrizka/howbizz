"use client";
import React from "react";
import styles from "./MobileMenu.module.css";
import clsx from "clsx";
import { Button, ToggleTheme } from "@/components";
import { links } from "@/data";
import Link from "next/link";
import { useTheme } from "next-themes";

export const MobileMenu = () => {
	const { theme, systemTheme } = useTheme();
	const [openMenu, setOpenMenu] = React.useState<boolean>(false);

	const handleOpenMenu = () => {
		setOpenMenu(!openMenu);
	};

	const activeTheme = theme === "system" ? systemTheme : theme;

	const popoverWrapperBackground = {
		"--background-color": activeTheme === "dark" ? "#000000" : "#FAFAFA",
	} as React.CSSProperties;

	return (
		<div className={clsx(styles["toggle"], styles["root"])}>
			<button
				aria-label="Open menu"
				className={clsx(styles["mobileMenuToggle"])}
				data-expanded={openMenu}
				style={{ opacity: 1 }}
				onClick={handleOpenMenu}
			>
				<div className={clsx(styles["bar"])} data-position="top" />
				<div className={clsx(styles["bar"])} data-position="bottom" />
			</button>

			{openMenu && (
				<div
					className={clsx(styles["popover-scrollWrapper"])}
					style={popoverWrapperBackground}
				>
					<nav className={clsx(styles["popover-wrapper"])}>
						<section className={clsx(styles["popover-ctas"])}>
							<Button as="link" href="/sign-up">
								Sign Up
							</Button>
							<Button as="link" href="#" type="secondary">
								Log In
							</Button>
						</section>

						<section>
							<ul>
								{links.map((link, index) => (
									<li key={index}>
										<Link
											className={clsx(
												styles["popover-navigationListItemLink"],
												styles["link"]
											)}
											href={link.href}
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</section>

						<section>
							<ul>
								<li className={clsx(styles["popover-themeSwitcher"])}>
									<ToggleTheme />
								</li>
							</ul>
						</section>
					</nav>
				</div>
			)}
		</div>
	);
};
