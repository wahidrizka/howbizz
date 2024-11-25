"use client";

import { DailyExperience, Grid, Stack, Text } from "@/components";
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

				<Grid
					rows={{ sm: 3, md: 1 }}
					columns={{ sm: 1, md: 3 }}
					height={{ sm: "fit-content" }}
				>
					<div
						className={clsx(
							"absolute bottom-0 left-1/2 top-0 ml-[-0.5px] w-px -translate-x-1/2 bg-gray-200 md:hidden"
						)}
					/>
					<Grid.Cell
						gridRow={{ sm: "1 / span 1" }}
						gridColumn={{ sm: "auto" }}
						cellRows={{ sm: 1 }}
						cellColumns={{ sm: "auto" }}
						className={clsx(
							"relative flex flex-col items-center py-6 text-center md:items-start md:py-[90px] md:text-left"
						)}
						style={{ overflow: "visible" }}
					>
						<DailyExperience
							stroke="var(--ds-amber-800)"
							className={clsx("mb-6")}
						/>
						<Text
							color="gray-900"
							size={{
								xs: "1rem",
								sm: "1rem",
								smd: "1.25rem",
								md: "1.25rem",
								lg: "1.5rem",
							}}
							lineHeight={{
								xs: "1.5rem",
								sm: "1.5rem",
								smd: "1.625rem",
								md: "1.625rem",
								lg: "2rem",
							}}
							weight={{
								xs: "500",
								sm: "500",
								smd: "500",
								md: "500",
								xl: "500",
							}}
							letterSpacing={{
								xs: "-0.32px",
								sm: "-0.32px",
								smd: "-0.4px",
								md: "-0.4px",
								lg: "-0.96px",
							}}
						>
							<b style={{ color: "var(--ds-gray-1000)", fontWeight: 600 }}>
								Connect.{" "}
							</b>
							Menghubungkan mahasiswa dengan mentor, profesional industri, dan
							sesama mahasiswa untuk memperluas jaringan dan mendapatkan wawasan
							langsung dari dunia kerja.
						</Text>
					</Grid.Cell>

					<Grid.Cell
						gridRow={{ sm: "1 / span 1" }}
						gridColumn={{ sm: "auto" }}
						cellRows={{ sm: 1 }}
						cellColumns={{ sm: "auto" }}
						className={clsx(
							"relative flex flex-col items-center py-6 text-center md:items-start md:py-[90px] md:text-left"
						)}
						style={{ overflow: "visible" }}
					>
						<DailyExperience
							stroke="var(--ds-amber-800)"
							className={clsx("mb-6")}
						/>
						<Text
							color="gray-900"
							size={{
								xs: "1rem",
								sm: "1rem",
								smd: "1.25rem",
								md: "1.25rem",
								lg: "1.5rem",
							}}
							lineHeight={{
								xs: "1.5rem",
								sm: "1.5rem",
								smd: "1.625rem",
								md: "1.625rem",
								lg: "2rem",
							}}
							weight={{
								xs: "500",
								sm: "500",
								smd: "500",
								md: "500",
								xl: "500",
							}}
							letterSpacing={{
								xs: "-0.32px",
								sm: "-0.32px",
								smd: "-0.4px",
								md: "-0.4px",
								lg: "-0.96px",
							}}
						>
							<b style={{ color: "var(--ds-gray-1000)", fontWeight: 600 }}>
								Grow.{" "}
							</b>
							Membantu mahasiswa mengembangkan keterampilan dan kemampuan mereka
							dengan tujuan yang jelas, mendukung mereka dalam perjalanan untuk
							mencapai karier yang sukses di industri digital.
						</Text>
					</Grid.Cell>

					<Grid.Cell
						gridRow={{ sm: "1 / span 1" }}
						gridColumn={{ sm: "auto" }}
						cellRows={{ sm: 1 }}
						cellColumns={{ sm: "auto" }}
						className={clsx(
							"relative flex flex-col items-center py-6 text-center md:items-start md:py-[90px] md:text-left"
						)}
						style={{ overflow: "visible" }}
					>
						<DailyExperience
							stroke="var(--ds-amber-800)"
							className={clsx("mb-6")}
						/>
						<Text
							color="gray-900"
							size={{
								xs: "1rem",
								sm: "1rem",
								smd: "1.25rem",
								md: "1.25rem",
								lg: "1.5rem",
							}}
							lineHeight={{
								xs: "1.5rem",
								sm: "1.5rem",
								smd: "1.625rem",
								md: "1.625rem",
								lg: "2rem",
							}}
							weight={{
								xs: "500",
								sm: "500",
								smd: "500",
								md: "500",
								xl: "500",
							}}
							letterSpacing={{
								xs: "-0.32px",
								sm: "-0.32px",
								smd: "-0.4px",
								md: "-0.4px",
								lg: "-0.96px",
							}}
						>
							<b style={{ color: "var(--ds-gray-1000)", fontWeight: 600 }}>
								Work.{" "}
							</b>
							Memberikan peluang bagi mahasiswa untuk bekerja pada proyek nyata,
							baik secara individu maupun tim, serta mendapatkan pengalaman
							kerja yang berharga untuk meningkatkan daya saing di pasar kerja.
						</Text>
					</Grid.Cell>
				</Grid>
			</Grid.System>
		</Stack>
	);
};
