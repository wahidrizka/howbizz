"use client";
import { Header } from "@/components";
import { useAppContext } from "@/context/AppContext";

export const LayoutContent = ({ children }: { children: React.ReactNode }) => {
	const { is404 } = useAppContext();

	return (
		<>
			{!is404 && <Header />}
			{children}
			{/* {!is404 && <Footer variant="subtle" />} */}
		</>
	);
};
