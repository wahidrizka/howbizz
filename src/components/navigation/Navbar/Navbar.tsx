"use client";
import React from "react";
import styles from "./Navbar.module.css";
import clsx from "clsx";
import { Logo } from "../Logo";
import { NavigationMenu } from "../NavigationMenu";
import { Button, Stack } from "@/components";

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
							className={clsx(styles["morphing-button-linkGhostCta"])}
						>
							{hasScrolled ? "Get a Demo" : "Sign Up"}
						</Button>
						<Button
							as="link"
							href={hasScrolled ? "/contact/sales" : "/signup"}
							size="small"
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

				<div
					className={clsx(
						styles["mobile-menu-toggle"],
						styles["mobile-menuRoot"]
					)}
				></div>
			</div>
		</div>
	);
};
