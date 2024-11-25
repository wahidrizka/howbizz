"use client";

import { Grid, Stack, Text } from "@/components";
import clsx from "clsx";
import styles from "./Home.module.css";
import React from "react";

export const Home = () => {
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
			className={clsx(styles.gridPage)}
			style={stackStyles}
		>
			<Grid.System>
				<Grid
					columns={1}
					rows={1}
					height="fit-content"
					className={clsx(styles.simpleHeroVertical)}
				>
					<Grid.Cross />
					<Grid.Cell
						gridRow="auto"
						gridColumn="auto"
						cellRows="auto"
						cellColumns="auto"
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
									size={{ sm: "2.5rem", md: "3rem", lg: "3.5rem" }}
									lineHeight={{ sm: "3rem", md: "3.5rem", lg: "3.5rem" }}
									weight={{ sm: "600", md: "600", lg: "600" }}
									letterSpacing={{
										sm: "-2.4px",
										md: "-2.88px",
										lg: "-3.36px",
									}}
									className={clsx(styles.simpleHeroHeading)}
								>
									Bootstrap your early professional career.
								</Text>
							</Stack>
							<Text
								as="div"
								color="gray-900"
								size={{ sm: "1rem", md: "1.125rem", lg: "1.25rem" }}
								lineHeight={{ sm: "1.5rem", md: "1.75rem", lg: "2.25rem" }}
								className={clsx(styles.simpleHeroDescription)}
							>
								<p>
									Howbizz adalah <b>platform inkubasi digital</b> revolusioner
									yang dirancang khusus <b>untuk mahasiswa IT</b>, membimbing
									Anda <b>menjadi talenta digital</b> unggulan yang siap
									bersaing di <b>era revolusi industri modern!</b>
								</p>
							</Text>
						</Stack>
					</Grid.Cell>
				</Grid>
			</Grid.System>
		</Stack>
	);
};
