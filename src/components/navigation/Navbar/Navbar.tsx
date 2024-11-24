"use client";
import React from "react";
import styles from "./Navbar.module.css";
import clsx from "clsx";
import { Logo } from "../Logo";
import { NavigationMenu } from "../NavigationMenu";
import { Button, MobileMenu, Stack } from "@/components";
import { useTheme } from "next-themes";

export const Navbar: React.FC = () => {
	const { theme, systemTheme } = useTheme();
	const [hasScrolled, setHasScrolled] = React.useState<boolean>(false);

	const activeTheme = theme === "system" ? systemTheme : theme;

	React.useEffect(() => {
		const handleScroll = () => {
			setHasScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const navbarWrapperBackground = {
		background: activeTheme === "dark" ? "rgb(0, 0, 0)" : "rgb(250, 250, 250)",
	} as React.CSSProperties;

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
			style={navbarWrapperBackground}
		>
			<div className={clsx(styles.navbar)}>
				<div className={clsx(styles.left)}>
					<Logo href="#" />
					<div className={clsx(styles.main)}>
						<NavigationMenu></NavigationMenu>
					</div>
				</div>

				<Stack
					id="navbar-content"
					direction="row"
					align="center"
					gap={3}
					className={clsx(
						styles["navbar-content"],
						styles["right-sectionContent"],
						styles["right-sectionLoaded"]
					)}
				>
					<Stack
						className={clsx(styles["right-section-nonPrimaryContent"])}
						style={{ opacity: hasScrolled ? 0 : 1 }}
					>
						<Button as="link" href="/login" type="secondary" size="small">
							Login
						</Button>
						<Button as="link" href="/contact" type="secondary" size="small">
							Contact
						</Button>
					</Stack>
					<div className={clsx(styles["morphing-button-linkMorphing"])}>
						<Button
							as="link"
							href={hasScrolled ? "/contact/sales" : "/signup"}
							size="small"
							type="howbizz"
							className={clsx(styles["morphing-button-linkGhostCta"])}
						>
							{hasScrolled ? "Get a Demo" : "Sign Up"}
						</Button>
						<Button
							as="link"
							href={hasScrolled ? "/contact/sales" : "/signup"}
							size="small"
							type="howbizz"
							className={clsx(styles["morphing-button-linkDisplayCta"])}
							style={
								hasScrolled ? { width: "100.656px" } : { width: "74.7969px" }
							}
						>
							<div
								data-display-children
								style={{
									opacity: 1,
									filter: "blur(0px)",
									transitionDuration: "400ms",
									transform: "translateX(0px)",
								}}
							>
								{hasScrolled ? "Get a Demo" : "Sign Up"}
							</div>
						</Button>
					</div>
				</Stack>

				<MobileMenu />
			</div>
		</div>
	);
};
