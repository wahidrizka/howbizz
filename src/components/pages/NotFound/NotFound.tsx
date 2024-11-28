import React from "react";
import clsx from "clsx";
import styles from "./NotFound.module.css";
import { Button, Text } from "@/components";

export const NotFound = () => {
	return (
		<div className={clsx("relative")}>
			<div style={{ opacity: 1 }}>
				<main className={clsx(styles.container, styles.withinScreen)}>
					<section className={clsx(styles.wrapper)}>
						<Text
							as="h1"
							size="3rem"
							lineHeight="3.5rem"
							letterSpacing="-0.066875rem"
							weight="700"
							style={{ margin: "12px 0 8px" }}
						>
							404
						</Text>
						<Text
							as="p"
							color="gray-900"
							size="1rem"
							lineHeight="1.5rem"
							letterSpacing="initial"
							weight="400"
							style={{
								height: "48px",
								width: "380px",
								maxWidth: "100%",
								margin: "12px 0px",
							}}
						>
							This page doesn&apos;t exist
						</Text>
						<Button
							as="link"
							href="/"
							size="large"
							style={{ margin: "12px 0 24px" }}
						>
							Go to Homepage
						</Button>
					</section>
				</main>
			</div>
		</div>
	);
};
