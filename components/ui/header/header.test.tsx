import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "./header";

describe("Header", () => {
	it("should render the header", () => {
		render(<Header />);

		expect(screen.getByRole("navigation")).toBeInTheDocument();
	});

	it("should open the sidebar menu when the open menu button is clicked (mobile view)", () => {
		render(<Header />);

		// Awalnya tombol open menu harus ada di dokumen
		const openMenuButton = screen.getByRole("button", {
			name: /open main menu/i,
		});
		expect(openMenuButton).toBeInTheDocument();

		// Sidebar menu awalnya tersembunyi, dipilih dengan `aria-label="Mobile menu"`
		const mobileMenu = screen.getByLabelText("Mobile menu");
		expect(mobileMenu).toHaveClass("translate-x-full");

		// Simulasikan klik pada tombol open menu
		fireEvent.click(openMenuButton);

		// Setelah diklik, pastikan sidebar menu terbuka (class `translate-x-0` menandakan menu terbuka)
		expect(mobileMenu).toHaveClass("translate-x-0");
	});
});
