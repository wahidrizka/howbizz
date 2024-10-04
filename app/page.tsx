import { Header, Hero, LogoClouds } from "@/components";
import { partners } from "@/data";

export default function Home() {
	return (
		<div className="bg-white min-h-screen">
			<Header />
			<Hero />
			<LogoClouds data={partners} />
		</div>
	);
}
