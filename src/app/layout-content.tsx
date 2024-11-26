"use client";
import { Footer, Navbar } from "@/components";
import { useAppContext } from "@/context/AppContext";

export const LayoutContent = ({ children }: { children: React.ReactNode }) => {
	const { is404 } = useAppContext();

	return (
		<>
			{!is404 && <Navbar />}
			<div>{children}</div>
			{!is404 && <Footer variant="subtle" />}
		</>
	);
};
