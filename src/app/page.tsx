import { ArrowLeft, ArrowRight, ArrowUp, Button, Text } from "@/components";

export default function Home() {
	return (
		<div className="flex items-center flex-col justify-center">
			<Text variant="heading-72">Coming Soon!</Text>

			<div className="my-2 flex flex-row gap-4">
				<Button size="small">Upload</Button>
				<Button>Upload</Button>
				<Button size="large">Upload</Button>
			</div>

			<div className="my-2 flex flex-row gap-4">
				<Button type="secondary">Upload</Button>
				<Button type="tertiary">Upload</Button>
				<Button type="error">Upload</Button>
				<Button type="warning">Upload</Button>
			</div>

			<div className="my-2 flex flex-row gap-4">
				<Button aria-label="Upload" shape="square" size="tiny" svgOnly>
					<ArrowUp />
				</Button>
				<Button aria-label="Upload" shape="square" size="small" svgOnly>
					<ArrowUp />
				</Button>
				<Button aria-label="Upload" shape="square" svgOnly>
					<ArrowUp />
				</Button>
				<Button aria-label="Upload" shape="square" size="large" svgOnly>
					<ArrowUp />
				</Button>
				<Button aria-label="Upload" shape="circle" size="tiny" svgOnly>
					<ArrowUp />
				</Button>
				<Button aria-label="Upload" shape="circle" size="small" svgOnly>
					<ArrowUp />
				</Button>
				<Button aria-label="Upload" shape="circle" svgOnly>
					<ArrowUp />
				</Button>
				<Button aria-label="Upload" shape="circle" size="large" svgOnly>
					<ArrowUp />
				</Button>
			</div>

			<div className="my-2 flex flex-row gap-4">
				<Button leadingVisual={<ArrowLeft />}>Upload</Button>
				<Button trailingVisual={<ArrowRight />}>Upload</Button>
				<Button leadingVisual={<ArrowLeft />} trailingVisual={<ArrowRight />}>
					Upload
				</Button>
			</div>

			<div className="my-2 flex flex-row gap-4">
				<Button shadow shape="rounded" size="small" type="secondary">
					Upload
				</Button>
				<Button shadow shape="rounded" type="secondary">
					Upload
				</Button>
				<Button shadow shape="rounded" size="large" type="secondary">
					Upload
				</Button>
			</div>

			<div className="my-2 flex flex-row gap-4">
				<Button loading size="small">
					Upload
				</Button>
				<Button loading>Upload</Button>
				<Button loading size="large">
					Upload
				</Button>
			</div>

			<div className="my-2 flex flex-row gap-4">
				<Button disabled size="small">
					Upload
				</Button>
				<Button disabled>Upload</Button>
				<Button disabled size="large">
					Upload
				</Button>
			</div>
		</div>
	);
}
