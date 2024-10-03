import { Button } from "@/components/ui";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";

export const Hero = () => {
	return (
		<div
			className={clsx(
				"relative isolate overflow-hidden bg-gradient-to-b from-amber-100/20 pt-14"
			)}
		>
			<div
				aria-hidden
				className={clsx(
					"absolute inset-y-0 right-1/2 -z-10 mr-96 w-[200%] origin-top-right -skew-x-[30deg] bg-white shadow-xl shadow-amber-600/10 ring-1 ring-amber-50 sm:mr-80 lg:-mr-96"
				)}
			/>

			<div className={clsx("mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8")}>
				<div
					className={clsx(
						"mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
					)}
				>
					<h1
						className={clsx(
							"max-w-2xl text-3xl font-bold -tracking-tight text-slate-900 sm:text-5xl lg:col-span-2 xl:col-auto"
						)}
					>
						Bootstrap your early professional career!
					</h1>
					<div
						className={clsx(
							"mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1"
						)}
					>
						<p className={clsx("text-lg leading-8 text-slate-600")}>
							Howbizz is a digital incubation platform designed to guide IT
							students in becoming skilled digital talents, ready to meet the
							demands of today&apos;s industrial revolution.
						</p>
						<div className={clsx("mt-10 flex items-center gap-x-6")}>
							<Button size="lg" href="#">
								Get started
							</Button>
							<Button
								variant="ghost"
								size="lg"
								href="#"
								endIcon={<ArrowRightIcon className={clsx("size-4")} />}
							>
								Learn more
							</Button>
						</div>
					</div>
					<Image
						alt="Howbizz Hero"
						src="/images/illustrations/howbizz-hero.svg"
						className={clsx(
							"mt-10 aspect-[6_/_5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
						)}
						width={512}
						height={512}
					/>
				</div>
			</div>
		</div>
	);
};
