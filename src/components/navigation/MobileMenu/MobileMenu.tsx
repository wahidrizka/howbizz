"use client";
import React from "react";
import styles from "./MobileMenu.module.css";
import clsx from "clsx";
import { Button, Link, ThemeSwitcher } from "@/components";
import { links } from "@/data";
import { useTheme } from "next-themes";

export const MobileMenu = () => {
	const [mounted, setMounted] = React.useState<boolean>(false);

	const { theme, systemTheme } = useTheme();
	const activeTheme = theme === "system" ? systemTheme : theme;

	const [openMenu, setOpenMenu] = React.useState<boolean>(false);

	React.useEffect(() => {
		setMounted(true);

		return () => {
			setMounted(false);
		};
	}, []);

	const handleOpenMenu = () => {
		setOpenMenu(!openMenu);
	};

	const toggleStyles = {
		opacity: 1,
	} as React.CSSProperties;

	const scrollWrapperStyles = {
		"--background-color": activeTheme === "dark" ? "#000000" : "#FAFAFA",
	} as React.CSSProperties;
	return (
		<div className={clsx(styles.toggle, styles.root)}>
			<button
				aria-label={openMenu ? "Close menu" : "Open menu"}
				className={clsx(styles.mobileMenuToggle)}
				data-expanded={openMenu}
				style={toggleStyles}
				type="button"
				onClick={handleOpenMenu}
			>
				<div className={clsx(styles.bar)} data-position="top" />
				<div className={clsx(styles.bar)} data-position="bottom" />
			</button>

			{openMenu && (
				<div className={clsx(styles["popover_scrollWrapper"])} style={scrollWrapperStyles}>
					<nav className={clsx(styles["popover_wrapper"])}>
						{/* CTAs */}
						<section className={clsx(styles["popover_ctas"])}>
							<Button as="a" href="/signup">
								Sign Up
							</Button>
							<Button as="a" href="/login" variant="secondary">
								Log In
							</Button>
						</section>

						{/* Navigation List Item Link */}
						<section>
							<ul>
								{links.map((link, index) => (
									<li key={index}>
										<Link
											href={link.href}
											className={clsx(styles["popover_navigationListItemLink"])}
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</section>

						{/* Theme Switcher */}
						<section>
							<ul>
								<li className={clsx(styles["popover_themeSwitcher"])}>
									<p>Theme</p>
									<ThemeSwitcher className={clsx(styles["popover_themeSwitcherComponent"])} />
								</li>
							</ul>
						</section>
					</nav>
				</div>
			)}
		</div>
	);
};
