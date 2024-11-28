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
			className={clsx(styles.gridPage)}
			style={stackStyles}
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
									weight={{
										xs: "600",
										sm: "600",
										smd: "600",
										md: "600",
										lg: "600",
									}}
									letterSpacing={{
										xs: "-2.4px",
										sm: "-2.4px",
										smd: "-3.84px",
										md: "-3.84px",
										lg: "-4.32px",
									}}
									className={clsx(styles.simpleHeroHeading)}
								>
									We Are Howbizz
								</Text>
							</Stack>
							<Text
								as="div"
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
								weight={{
									xs: "400",
									sm: "400",
									smd: "400",
									md: "400",
									lg: "400",
								}}
								letterSpacing={{
									xs: "0px",
									sm: "0px",
									smd: "0px",
									md: "0px",
									lg: "0px",
								}}
								className={clsx(styles.simpleHeroDescription)}
							>
								Howbizz hadir sebagai platform modern yang menghubungkan
								mahasiswa dengan dunia industri, membantu mereka tumbuh menjadi
								talenta yang siap menghadapi masa depan.
							</Text>
						</Stack>
					</Grid.Cell>
				</Grid>

				<Grid
					rows={1}
					columns={{ sm: 2, lg: 3 }}
					height={{ sm: "16px" }}
					hasGuide={false}
				/>

				<Grid.System lazy_content>
					{/* Marketing Section Alternating Feature Column */}
					<Grid
						as="div"
						rows={1}
						columns={{ sm: 2, lg: 3 }}
						height={{ sm: "var(--grid-divider-gap)" }}
						style={{ borderBottom: "none" }}
					></Grid>
					<Grid
						rows={{ sm: 6, lg: 3 }}
						columns={{ sm: 2, lg: 3 }}
						height={{ sm: "fit-content" }}
					>
						<Grid.Cell
							gridRow={{ sm: "2 / span 1", lg: "1 / span 1" }}
							gridColumn={{ sm: "1 / 3" }}
							cellRows={{ sm: 1 }}
							cellColumns={{ sm: 2 }}
							className={clsx(styles.contentCell)}
						>
							<Stack justify="center" gap="16px">
								<Text
									as="h3"
									size={{
										xs: "1.5rem",
										sm: "1.5rem",
										smd: "1.5rem",
										md: "1.5rem",
										lg: "2rem",
									}}
									lineHeight={{
										xs: "2rem",
										sm: "2rem",
										smd: "2rem",
										md: "2rem",
										lg: "2.5rem",
									}}
									weight={{
										xs: "600",
										sm: "600",
										smd: "600",
										md: "600",
										lg: "600",
									}}
									letterSpacing={{
										xs: "-0.96px",
										sm: "-0.96px",
										smd: "-0.96px",
										md: "-0.96px",
										lg: "-1.28px",
									}}
								>
									Connecting Talents with Industries.
								</Text>
								<Text
									as="div"
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
									weight={{
										xs: "400",
										sm: "400",
										smd: "400",
										md: "400",
										lg: "400",
									}}
									letterSpacing={{
										xs: "0px",
										sm: "0px",
										smd: "0px",
										md: "0px",
										lg: "0px",
									}}
								>
									Kami percaya bahwa setiap individu memiliki potensi luar biasa
									untuk berkembang. Misi kami adalah menjembatani mahasiswa dan
									lulusan baru dengan dunia industri melalui peluang yang nyata.
								</Text>
							</Stack>
						</Grid.Cell>

						<Grid.Cell
							gridRow={{ sm: "1 / span 1" }}
							gridColumn={{ sm: "1 / 3", lg: "3 / 4" }}
							cellRows={{ sm: 1 }}
							cellColumns={{ sm: 2, lg: 1 }}
							className={clsx(styles.visualCell)}
						></Grid.Cell>

						<Grid.Cell
							gridRow={{ sm: "4 / span 1", lg: "2 / span 1" }}
							gridColumn={{ sm: "1 / 3", lg: "2 / 4" }}
							cellRows={{ sm: 1 }}
							cellColumns={{ sm: 2 }}
							className={clsx(styles.contentCell)}
						>
							<Stack justify="center" gap="16px">
								<Text
									as="h3"
									size={{
										xs: "1.5rem",
										sm: "1.5rem",
										smd: "1.5rem",
										md: "1.5rem",
										lg: "2rem",
									}}
									lineHeight={{
										xs: "2rem",
										sm: "2rem",
										smd: "2rem",
										md: "2rem",
										lg: "2.5rem",
									}}
									weight={{
										xs: "600",
										sm: "600",
										smd: "600",
										md: "600",
										lg: "600",
									}}
									letterSpacing={{
										xs: "-0.96px",
										sm: "-0.96px",
										smd: "-0.96px",
										md: "-0.96px",
										lg: "-1.28px",
									}}
								>
									Our Vision.
								</Text>
								<Text
									as="div"
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
									weight={{
										xs: "400",
										sm: "400",
										smd: "400",
										md: "400",
										lg: "400",
									}}
									letterSpacing={{
										xs: "0px",
										sm: "0px",
										smd: "0px",
										md: "0px",
										lg: "0px",
									}}
								>
									Mempercepat pertumbuhan talenta digital berkualitas Indonesia
									untuk Industri 4.0 untuk mencapai visi Indonesia menjadi
									negara ekonomi digital terbesar pada tahun 2030.
								</Text>
							</Stack>
						</Grid.Cell>

						<Grid.Cell
							gridRow={{ sm: "3 / span 1", lg: "2 / span 1" }}
							gridColumn={{ sm: "1 / 3", lg: "1 / 2" }}
							cellRows={{ sm: 1 }}
							cellColumns={{ sm: 2, lg: 1 }}
						></Grid.Cell>

						<Grid.Cell
							gridRow={{ sm: "6 / span 1", lg: "3 / span 1" }}
							gridColumn={{ sm: "1 / 3" }}
							cellRows={{ sm: 1 }}
							cellColumns={{ sm: 2 }}
							className={clsx(styles.contentCell)}
						>
							<Stack justify="center" gap="16px">
								<Text
									as="h3"
									size={{
										xs: "1.5rem",
										sm: "1.5rem",
										smd: "1.5rem",
										md: "1.5rem",
										lg: "2rem",
									}}
									lineHeight={{
										xs: "2rem",
										sm: "2rem",
										smd: "2rem",
										md: "2rem",
										lg: "2.5rem",
									}}
									weight={{
										xs: "600",
										sm: "600",
										smd: "600",
										md: "600",
										lg: "600",
									}}
									letterSpacing={{
										xs: "-0.96px",
										sm: "-0.96px",
										smd: "-0.96px",
										md: "-0.96px",
										lg: "-1.28px",
									}}
								>
									Our Mission.
								</Text>
								<Text
									as="div"
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
									weight={{
										xs: "400",
										sm: "400",
										smd: "400",
										md: "400",
										lg: "400",
									}}
									letterSpacing={{
										xs: "0px",
										sm: "0px",
										smd: "0px",
										md: "0px",
										lg: "0px",
									}}
								>
									Membantu mahasiswa dan industri mengisi kesenjangan di antara
									mereka melalui inkubasi bakat.
								</Text>
							</Stack>
						</Grid.Cell>

						<Grid.Cell
							gridRow={{ sm: "5 / span 1", lg: "3 / span 1" }}
							gridColumn={{ sm: "1 / 3", lg: "3 / 4" }}
							cellRows={{ sm: 1 }}
							cellColumns={{ sm: 2, lg: 1 }}
							className={clsx(styles.visualCell)}
						></Grid.Cell>
					</Grid>
				</Grid.System>
			</Grid.System>
		</Stack>
	);
};
