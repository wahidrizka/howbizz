export const Ideas = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width={props.width || "56"}
			height={props.height || "56"}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g
				stroke={props.stroke || "currentColor"}
				strokeWidth="2"
				fill="none"
				fillRule="evenodd"
			>
				<g opacity=".502">
					<path
						d="M6.7 15c.316 1.122.572 1.372 1.71 1.678-1.136.314-1.39.566-1.7 1.69-.317-1.121-.573-1.372-1.71-1.679 1.135-.313 1.389-.566 1.7-1.689zm42 0c.316 1.122.572 1.372 1.71 1.678-1.136.314-1.39.566-1.7 1.69-.317-1.121-.573-1.372-1.71-1.679 1.135-.313 1.389-.566 1.7-1.689zM27.977 8V5M38.969 9.549l2.028-2.543M15.954 10.021L14 7.576"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path d="M21 23h3.394m7.03 0H35" strokeLinecap="round" />
					<path d="M28 26.375a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75z" />
				</g>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M24.002 48.011h8M25.002 51.011h6M28 44h3.84c0-2 .214-5.172 1.154-6.957 1.104-2.097 3.098-4.092 3.944-5.035A11.955 11.955 0 0040 24c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 3.067 1.15 5.865 3.043 7.986.843.945 2.833 2.93 3.933 5.021C23.92 38.798 24.14 42 24.14 44H28z"
				/>
			</g>
		</svg>
	);
};
