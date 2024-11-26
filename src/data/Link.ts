import { LinkGroupTypes, LinkTypes } from "@/types";

export const links: LinkTypes[] = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Partners", href: "/partners" },
	{ label: "Benefits", href: "/benefits" },
];

export const footerLinks: LinkGroupTypes[] = [
	{
		header: "Resources",
		links: [
			{ label: "Students", href: "#" },
			{ label: "Industries", href: "#" },
		],
	},
	{
		header: "Company",
		links: [
			{ label: "About", href: "#" },
			{ label: "Changelog", href: "#" },
			{ label: "Contact Us", href: "#" },
			{ label: "Partners", href: "#" },
		],
	},
	{
		header: "Social",
		links: [
			{ label: "GitHub", href: "#" },
			{ label: "Instagram", href: "#" },
		],
	},
	{
		header: "Legal",
		links: [
			{ label: "Privacy Policy", href: "#" },
			{ label: "Terms Of Service", href: "#" },
		],
	},
];
