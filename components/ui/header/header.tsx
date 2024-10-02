"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	function openMenu() {
		setIsMenuOpen(true);
	}
	function closeMenu() {
		setIsMenuOpen(false);
	}
	const links = [
		{
			title: "Home",
			href: "#",
		},
		{
			title: "About",
			href: "#",
		},
		{
			title: "Benefits",
			href: "#",
		},
	];
	return (
		<header className="bg-white">
			<nav
				aria-label="Global navigation"
				className={clsx(
					"mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
				)}
			>
				<div className={clsx("flex lg:flex-1")}>
					<Link href="/" className={clsx("-m-1.5 p-1.5")}>
						<span className={clsx("sr-only")}>Howbizz</span>
						<Image
							src="/images/favicon.png"
							alt="Howbizz Logo"
							className={clsx("h-8 w-auto")}
							width={32}
							height={32}
						/>
					</Link>
				</div>

				<div className={clsx("hidden lg:flex lg:gap-x-12")}>
					{links.map((link, linkIdx) => (
						<Link
							key={linkIdx}
							href={link.href}
							className={clsx(
								"text-sm font-semibold leading-6 text-slate-900",
								"hover:text-amber-400",
								"transition-all duration-300"
							)}
						>
							{link.title}
						</Link>
					))}
				</div>

				<div className={clsx("flex flex-1 items-center justify-end gap-x-6")}>
					<Link
						href="#"
						className={clsx(
							"rounded-md bg-amber-400 px-3 py-2 text-sm font-semibold text-white shadow-sm",
							"hover:bg-amber-500",
							"transition-all duration-300"
						)}
					>
						Contact us
					</Link>
				</div>

				<div className={clsx("flex lg:hidden")}>
					<button
						type="button"
						className={clsx(
							"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
						)}
						onClick={openMenu}
					>
						<span className={clsx("sr-only")}>Open main menu</span>
						<Bars3Icon className={clsx("w-6 h-6")} />
					</button>
				</div>

				<div
					aria-label="Mobile menu"
					className={clsx(
						"fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-96 sm:ring-1 sm:ring-slate-900/10",
						"ease-in-out duration-300",
						isMenuOpen ? "translate-x-0" : "translate-x-full"
					)}
				>
					<div className={clsx("flex items-center gap-x-6")}>
						<Link href="#" className={clsx("-m-1.5 p-1.5")}>
							<span className={clsx("sr-only")}>Howbizz</span>
							<Image
								src="/images/favicon.png"
								alt="Howbizz Logo"
								className={clsx("h-8 w-auto")}
								width={32}
								height={32}
							/>
						</Link>
						<button
							type="button"
							className={clsx(
								"ml-auto  -m-2.5 rounded-md p-2.5 text-slate-700"
							)}
							onClick={closeMenu}
						>
							<span className={clsx("sr-only")}>Close menu</span>
							<XMarkIcon className={clsx("h-6 w-6")} />
						</button>
					</div>

					<div className={clsx("mt-6 flow-root")}>
						<div className={clsx("-my-6 divide-y divide-slate-500/10")}>
							<div className={clsx("py-6 space-y-2")}>
								{links.map((link, linkIdx) => (
									<Link
										key={linkIdx}
										href={link.href}
										className={clsx(
											"-m-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900"
										)}
									>
										{link.title}
									</Link>
								))}
							</div>

							<div className={clsx("py-6")}>
								<Link
									href="#"
									className={clsx(
										"rounded-md bg-amber-400 px-3 py-2 text-sm font-semibold text-white shadow-sm"
									)}
								>
									Contact us
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};
