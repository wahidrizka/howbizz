import type { Metadata } from "next";
import "@/styles/globals.css";

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
		<html lang="en" className="font-sans antialiased">
			<body>{children}</body>
		</html>
	);
}
