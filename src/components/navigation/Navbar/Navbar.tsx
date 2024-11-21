"use client";
import React from "react";
import styles from "./Navbar.module.css";
import clsx from "clsx";
import { Logo } from "../Logo";
import { NavigationMenu } from "../NavigationMenu";

export const Navbar: React.FC = () => {
	const [hasScrolled, setHasScrolled] = React.useState<boolean>(false);

	React.useEffect(() => {
		const handleScroll = () => {
			setHasScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<div
			id="navbar-wrapper"
			className={clsx(
				styles.wrapper,
				styles.sticky,
				styles.transparentUntilScroll,
				hasScrolled && styles.hasScrolled
			)}
			data-navigation-header
			data-scrolled={hasScrolled}
		>
			<div className={clsx(styles.navbar)}>
				<div className={clsx(styles.left)}>
					<Logo href="#" />
					<div className={clsx(styles.main)}>
						<NavigationMenu></NavigationMenu>
					</div>
				</div>
			</div>
		</div>
	);
};
