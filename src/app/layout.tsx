import type { Metadata } from "next";
import "@/styles/globals.css";
import { Footer, Navbar, ThemeProvider } from "@/components";
import clsx from "clsx";
import { useTheme } from "next-themes";

export const metadata: Metadata = {
	title: "Howbizz",
	description: "Bootstrap your early professional career",
	icons: [
		{
			rel: "icon",
			url: "/favicon.ico",
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={clsx("font-sans antialiased")}
			suppressHydrationWarning
		>
			<body>
				<ThemeProvider attribute="class" enableSystem={true}>
					<Navbar></Navbar>
					<div>{children}</div>
					<Footer variant="subtle"></Footer>
				</ThemeProvider>
			</body>
		</html>
	);
}
