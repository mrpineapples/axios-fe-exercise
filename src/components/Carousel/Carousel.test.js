import { render, screen, fireEvent } from "@testing-library/react";
import { Carousel } from ".";
import { resizeWindow } from "../../../test/utils";

const mockItems = [...Array(10).keys()].map((num) => (
    <p key={num}>Item {num}</p>
));

describe("<Carousel />", () => {
    describe("On desktop", () => {
        test("Should render previous & next buttons", () => {
            render(<Carousel children={mockItems} />);
            expect(screen.getByTestId("prev-button")).toBeInTheDocument();
            expect(screen.getByTestId("next-button")).toBeInTheDocument();
        });

        test("Clicking next button should move to next item", () => {
            render(<Carousel children={mockItems} />);
            const nextBtn = screen.getByTestId("next-button");
            const firstItem = screen.getByTestId("slot-1");
            const secondItem = screen.getByTestId("slot-2");

            // The first visible item in the carousel should have order set to 1
            expect(firstItem).toHaveStyle("order: 1");
            expect(secondItem).toHaveStyle("order: 2");

            fireEvent.click(nextBtn);
            expect(firstItem).toHaveStyle("order: 0");
            expect(secondItem).toHaveStyle("order: 1");
        });

        test("Clicking previous button should move to previous item", () => {
            render(<Carousel children={mockItems} />);
            const prevBtn = screen.getByTestId("prev-button");
            const firstItem = screen.getByTestId("slot-1");
            const lastItem = screen.getByTestId("slot-10");

            // The first visible item in the carousel should have order set to 1
            expect(firstItem).toHaveStyle("order: 1");
            expect(lastItem).toHaveStyle("order: 0");

            fireEvent.click(prevBtn);
            expect(lastItem).toHaveStyle("order: 1");
            expect(firstItem).toHaveStyle("order: 2");
        });
    });

    describe("On mobile", () => {
        test("Should not render previous & next buttons", () => {
            resizeWindow(375, 812);
            render(<Carousel children={mockItems} />);
            expect(screen.queryByTestId("prev-button")).toBeNull();
            expect(screen.queryByTestId("next-button")).toBeNull();
        });
    });
});
