import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<LinkProps> & {
	variant?: "primary" | "secondary" | "ghost";
	size?: "sm" | "md" | "lg";
	endIcon?: React.ReactNode;
};

export const Button = ({
	variant = "primary",
	size = "md",
	endIcon = false,
	children,
	...props
}: ButtonProps) => {
	const variantClasses = {
		primary:
			"shadow-sm bg-amber-500 text-white hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600",
		secondary:
			"shadow-sm bg-white text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50",
		ghost: "leading-6 text-slate-900 hover:bg-amber-100",
	};

	const sizeClasses = {
		sm: "rounded px-2 py-1 text-xs",
		md: "rounded-md px-2.5 py-1.5 text-sm",
		lg: "rounded-md px-3.5 py-2.5 text-sm",
	};

	return (
		<Link
			className={clsx(
				"font-semibold transition-all duration-300",
				variantClasses[variant],
				sizeClasses[size],
				endIcon && "flex items-center justify-center"
			)}
			{...props}
		>
			{children}
			{endIcon && <span className="ml-1">{endIcon}</span>}
		</Link>
	);
};
