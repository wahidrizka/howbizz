"use client";
import React from "react";
import clsx from "clsx";
import styles from "./About.module.css";
import { Grid, Stack, Text } from "@/components";

export const About = () => {
	const stackStyles = {
		"--banner-padding-t-lg": "29px",
		"--banner-padding-b-lg": "29px",
		"--banner-padding-t": "16px",
		"--banner-padding-b": "24px",
	} as React.CSSProperties;
	return (
		<Stack
			padding={{
				sm: "16px 0px",
				md: "32px 0px",
				lg: "90px 0px",
				xl: "90px 0px",
			}}
			style={{ ...stackStyles }}
			className={clsx(styles.gridPage)}
		>
			<Grid.System minWidth="250px">
				{/* Marketing Section Simple Hero */}
				<Grid
					rows={1}
					columns={1}
					height={{ sm: "fit-content" }}
					className={clsx(styles.simpleHeroVertical)}
				>
					<Grid.Cross />
					<Grid.Cell
						gridRow={{ sm: "auto" }}
						gridColumn={{ sm: "auto" }}
						cellRows={{ sm: "auto" }}
						cellColumns={{ sm: "auto" }}
						style={{ padding: "0px" }}
					>
						<Stack
							align="center"
							justify="center"
							padding={{
								sm: "48px 24px",
								md: "80px 40px",
								lg: "96px 180px",
								xl: "96px 180px",
							}}
							gap={{ sm: "16px", md: "24px", lg: "32px", xl: "32px" }}
						>
							<Stack align="center" justify="center">
								<Text
									as="h1"
									size={{
										xs: "2.5rem",
										sm: "2.5rem",
										smd: "4rem",
										md: "4rem",
										lg: "4.5rem",
									}}
									lineHeight={{
										xs: "3rem",
										sm: "3rem",
										smd: "4rem",
										md: "4rem",
										lg: "4.5rem",
									}}
									weight={600}
									letterSpacing={{
										xs: "-2.4px",
										sm: "-2.4px",
										smd: "-3.84px",
										md: "-3.84px",
										lg: "-4.32px",
									}}
									className={clsx(styles.simpleHeroHeading)}
								>
									We Are Howbizz.
								</Text>
							</Stack>
							<Text
								color="gray-900"
								size={{
									xs: "1rem",
									sm: "1rem",
									smd: "1.125rem",
									md: "1.125rem",
									lg: "1.25rem",
								}}
								lineHeight={{
									xs: "1.5rem",
									sm: "1.5rem",
									smd: "1.75rem",
									md: "1.75rem",
									lg: "2.25rem",
								}}
								weight="400"
								letterSpacing="0px"
								className={clsx(styles.simpleHeroDescription)}
							>
								Howbizz hadir sebagai platform modern yang menghubungkan
								mahasiswa dengan dunia industri, membantu mereka tumbuh menjadi
								talenta yang siap menghadapi masa depan.
							</Text>
						</Stack>
					</Grid.Cell>
				</Grid>

				{/* Marketing Section About, Vision, Mission */}
				<Grid
					hasGuide={false}
					rows={1}
					columns={{ sm: 2, lg: 3 }}
					height={{ sm: "16px" }}
				></Grid>

				<Grid.System lazy_content>
					{/* Marketing Section Alternating Feature Column */}
					<Grid
						rows={1}
						columns={{ sm: 2, lg: 3 }}
						height={{ sm: "var(--grid-divider-gap)" }}
						style={{ borderBottom: "none" }}
					></Grid>
				</Grid.System>
			</Grid.System>
		</Stack>
	);
};
