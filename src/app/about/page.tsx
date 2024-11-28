import { About } from "@/components";

export async function generateMetadata() {
	return {
		title: "About — Howbizz",
		description: "Learn more about Howbizz.",
	};
}

export default function AboutPage() {
	return <About />;
}
