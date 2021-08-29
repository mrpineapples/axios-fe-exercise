import { render } from "@testing-library/react";
import { Header } from ".";
import { resizeWindow } from "../../../test/utils";

describe("<Header />", () => {
    describe("On desktop", () => {
        test("Should render home page link", () => {
            const { container } = render(<Header />);
            const homeLink = container.querySelector("#home-link");
            expect(homeLink).toBeInTheDocument();
        });
    });

    describe("On mobile", () => {
        test("Should not render home page link", () => {
            resizeWindow(375, 812);
            const { container } = render(<Header />);
            const homeLink = container.querySelector("#home-link");
            expect(homeLink).toBeNull();
        });
    });
});
