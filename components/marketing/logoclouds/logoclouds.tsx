import { Button } from "@/components/ui";
import { PartnerTypes } from "@/data/partners";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";

export const LogoClouds = ({ data }: { data: PartnerTypes[] }) => {
	return (
		<div className={clsx("bg-white py-24 sm:px-32")}>
			<div className={clsx("mx-auto max-w-7xl px-6 lg:px-8")}>
				<div
					className={clsx(
						"grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2"
					)}
				>
					<div className={clsx("mx-auto w-full max-w-xl lg:mx-0")}>
						<h2 className={clsx("text-3xl font-bold text-slate-900")}>
							Our partners
						</h2>
						<p className={clsx("mt-6 text-lg leading-8 text-slate-600")}>
							We collaborate with industry-leading partners to deliver
							innovative solutions and exceptional value. Together, we drive
							positive change and push the boundaries of excellence. Our
							partnerships are the foundation of our success.
						</p>
						<div className={clsx("mt-8 flex items-center gap-x-6")}>
							<Button href="#" size="lg">
								Create account
							</Button>
							<Button
								href="#"
								variant="ghost"
								size="lg"
								endIcon={<ArrowRightIcon className={clsx("size-4")} />}
							>
								Contact us
							</Button>
						</div>
					</div>

					<div
						className={clsx(
							"mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8"
						)}
					>
						{data.map((partner, partnerIdx) => (
							<Image
								key={partnerIdx}
								alt={partner.name}
								src={partner.logo}
								width={105}
								height={48}
								className={clsx("max-h-20 w-full object-contain object-left")}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
