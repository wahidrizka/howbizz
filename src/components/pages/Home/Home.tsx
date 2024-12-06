"use client";
import clsx from "clsx";
import styles from "./Home.module.css";
import React from "react";
import { ArrowLeft, ArrowRight, ArrowUp, Button, Stack } from "@/components";

export const Home = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-12 gap-12">
			{/* <>
				<div>
					<Stack direction="row" gap="72px">
						<Button size="small">Upload</Button>
						<Button>Upload</Button>
						<Button size="large">Upload</Button>
					</Stack>
				</div>

				<div>
					<Stack direction="row" gap="72px">
						<Button variant="howbizz">Upload</Button>
						<Button variant="secondary">Upload</Button>
						<Button variant="tertiary">Upload</Button>
						<Button variant="error">Upload</Button>
						<Button variant="warning">Upload</Button>
					</Stack>
				</div>

				<div>
					<Stack direction="row" gap="72px">
						<Button aria-label="Upload" shape="square" size="tiny" svgOnly>
							<ArrowUp/>
						</Button>
						<Button aria-label="Upload" shape="square" size="small" svgOnly>
							<ArrowUp/>
						</Button>
						<Button aria-label="Upload" shape="square" svgOnly>
							<ArrowUp/>
						</Button>
						<Button aria-label="Upload" shape="square" size="large" svgOnly>
							<ArrowUp/>
						</Button>
						<Button aria-label="Upload" shape="circle" size="tiny" svgOnly>
							<ArrowUp/>
						</Button>
						<Button aria-label="Upload" shape="circle" size="small" svgOnly>
							<ArrowUp/>
						</Button>
						<Button aria-label="Upload" shape="circle" svgOnly>
							<ArrowUp/>
						</Button>
						<Button aria-label="Upload" shape="circle" size="large" svgOnly>
							<ArrowUp/>
						</Button>
					</Stack>
				</div>

				<div>
					<Stack direction="row" gap="72px">
						<Button leadingVisual={<ArrowLeft/>}>Upload</Button>
						<Button trailingVisual={<ArrowRight/>}>Upload</Button>
						<Button leadingVisual={<ArrowLeft/>} trailingVisual={<ArrowRight/>}>Upload</Button>
					</Stack>
				</div>

				<div>
					<Stack direction="row" gap="72px">
						<Button shadow shape="rounded" size="small" variant="secondary">
							Upload
						</Button>
						<Button shadow shape="rounded" variant="secondary">
							Upload
						</Button>
						<Button shadow shape="rounded" size="large" variant="secondary">
							Upload
						</Button>
					</Stack>
				</div>

				<div>
					<Stack direction="row" gap="72px">
						<Button loading size="small">
							Upload
						</Button>
						<Button loading>
							Upload
						</Button>
						<Button loading size="large">
							Upload
						</Button>
					</Stack>
				</div>

				<div>
					<Stack direction="row" gap="72px">
						<Button disabled size="small">
							Upload
						</Button>
						<Button disabled>
							Upload
						</Button>
						<Button disabled size="large">
							Upload
						</Button>
					</Stack>
				</div>
			</> */}
		</div>
	);
};
