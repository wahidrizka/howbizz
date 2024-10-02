import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
	it("should have a heading", () => {
		render(<Home />); // ARRANGE

		const myElement = screen.getByRole("heading", {
			name: /Coming soon/i,
		}); // ACT

		expect(myElement).toBeInTheDocument(); // ASSERT
	});
});
