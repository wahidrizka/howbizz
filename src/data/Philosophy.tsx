import { Developers, DreamLifter, Ideas } from "@/components";
import { PhilosophyType } from "@/types";

export const Philosophies: PhilosophyType[] = [
	{
		icon: <Ideas stroke="var(--ds-amber-800)" className="mb-6" />,
		title: "Opportunity.",
		description:
			"Peluang melalui proyek nyata dan pengalaman langsung di industri.",
	},
	{
		icon: <DreamLifter stroke="var(--ds-amber-800)" className="mb-6" />,
		title: "Growth.",
		description:
			"Pengembangan keterampilan teknis dan profesional sesuai kebutuhan industri.",
	},
	{
		icon: <Developers stroke="var(--ds-amber-800)" className="mb-6" />,
		title: "Connection.",
		description:
			"Jaringan dengan mentor, profesional industri, dan komunitas relevan.",
	},
];
