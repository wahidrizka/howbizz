'use client';
import clsx from "clsx";
import styles from "./Header.module.css";
import React from "react";
import { Link, NavigationMenu, Stack } from "@/components";

export const Header = () => {
	const [hasScrolled, setHasScrolled] = React.useState<boolean>(false);
	const [mounted, setMounted] = React.useState<boolean>(false);

	React.useEffect(() => {
		setMounted(true);

		return () => {
			setMounted(false);
		};
	}, []);

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
			className={clsx(
				styles.wrapper,
				{ [styles.hasScrolled]: hasScrolled },
				styles.sticky,
				styles.canGrow,
				styles.transparentUntilScroll
			)}
			data-navigation-header
			data-scrolled={hasScrolled}
			id="header-wrapper"
		>
			<header className={clsx(styles.header)}>
					<div className={clsx(styles.left)}>
						<Link href="/" isLogoLink/>
						<div className={clsx(styles.main)}>
							<NavigationMenu 
								aria-label="Main" 
								orientation="horizontal" 
								dir="ltr"
							/>
						</div>
					</div>

					<Stack 
						direction="row" 
						align="center"
						gap="12px"
						className={clsx(
							styles['right-section_content'],
							mounted && styles['right-section_loaded']
						)}
					>
						<Stack
							className={clsx(styles['right-section_nonPrimaryContent'])}
							style={{ opacity: 1, filter: "blur(0px)" }}
						>

						</Stack>
					</Stack>
				</header>
		</div>
	);
};
