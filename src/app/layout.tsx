import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components";
import clsx from "clsx";
import { LayoutContent } from "./layout-content";
import { AppProvider } from "@/context/AppContext";

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
					<AppProvider>
						<LayoutContent>{children}</LayoutContent>
					</AppProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
