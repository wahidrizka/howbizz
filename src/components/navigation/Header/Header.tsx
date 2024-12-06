"use client";
import clsx from "clsx";
import styles from "./Header.module.css";
import React from "react";
import { Link, NavigationMenu, Stack, Button } from "@/components";
import { MobileMenu } from "..";
import { useTheme } from "next-themes";

export const Header = () => {
	const [mounted, setMounted] = React.useState<boolean>(false);

	const { theme, systemTheme } = useTheme();
	const activeTheme = theme === "system" ? systemTheme : theme;

	const [hasScrolled, setHasScrolled] = React.useState<boolean>(false);

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

	const headerWrapperBackground = {
		background: activeTheme === "dark" ? "rgb(0, 0, 0)" : "rgb(250, 250, 250)",
	} as React.CSSProperties;

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
			style={headerWrapperBackground}
		>
			<header className={clsx(styles.header)}>
				<div className={clsx(styles.left)}>
					<Link href="/" isLogoLink />
					<div className={clsx(styles.main)}>
						<NavigationMenu aria-label="Main" orientation="horizontal" dir="ltr" />
					</div>
				</div>

				{/* right section */}
				<Stack
					direction="row"
					align="center"
					gap="12px"
					className={clsx(
						styles["right-section_content"],
						mounted && styles["right-section_loaded"]
					)}
				>
					<Stack
						className={clsx(styles["right-section_nonPrimaryContent"])}
						style={{ opacity: 1, filter: "blur(0px)" }}
					>
						<Button as="a" href="/login" size="small" variant="secondary">
							Log In
						</Button>
						<Button as="a" href="/login" size="small" variant="secondary">
							Contact
						</Button>
					</Stack>

					<div className={clsx(styles["morphing-button-link_morphing"])}>
						<Button
							as="a"
							size="small"
							href={hasScrolled ? "/contact/sales" : "signup"}
							className={clsx(styles["morphing-button-link_ghostCta"])}
						>
							{hasScrolled ? "Get a Demo" : "Sign Up"}
						</Button>
						<Button
							as="a"
							href={hasScrolled ? "/contact/sales" : "/signup"}
							size="small"
							type="howbizz"
							className={clsx(styles["morphing-button-link_displayCta"])}
							style={hasScrolled ? { width: "100.656px" } : { width: "74.7969px" }}
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

				{/* mobile menu */}
				<MobileMenu />
			</header>
		</div>
	);
};
