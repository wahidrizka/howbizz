export const Developers = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" {...props}>
			<g
				transform="translate(4 4)"
				stroke={props.stroke || "currentColor"}
				strokeWidth="2"
				fill="none"
				fillRule="evenodd"
			>
				<g opacity=".504">
					<path
						d="M31.019 21.057a9.001 9.001 0 11-9.963 9.95M34 34c-.267-1.727-1.973-3-4-3-2.08 0-3.787 1.318-4 3m4-9a3 3 0 100 6 3 3 0 000-6z"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<circle cx="36" cy="12" r="3" />
					<circle cx="3" cy="3" r="3" />
					<path d="M43 38V9a6 6 0 00-6-6H6" strokeLinecap="round" />
					<path d="M36 9a6 6 0 00-6-6h-3" />
				</g>
				<g strokeLinecap="round" strokeLinejoin="round">
					<path d="M22 22c-.267-1.727-1.973-3-4-3-2.08 0-3.787 1.318-4 3m4-9a3 3 0 100 6 3 3 0 000-6z" />
					<path d="M18 9a9 9 0 110 18 9 9 0 110-18z" />
				</g>
				<circle cx="12" cy="36" r="3" />
				<circle cx="45" cy="45" r="3" />
				<path d="M5 10v29a6 6 0 006 6h31" strokeLinecap="round" />
				<path d="M12 38v1a6 6 0 006 6h3" />
			</g>
		</svg>
	);
};
