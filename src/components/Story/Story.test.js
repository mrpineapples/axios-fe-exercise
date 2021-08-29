import { render, screen } from "@testing-library/react";
import { Story } from ".";
import { resizeWindow } from "../../../test/utils";

const data = {
    id: "57a186a3-7547-45bf-852a-83019849d8d5",
    headline: "Coronavirus dashboard",
    published_date: "2021-08-29T19:07:12.354000Z",
    permalink:
        "https://www.axios.com/coronavirus-latest-news-quick-highlights-57a186a3-7547-45bf-852a-83019849d8d5.html",
    primary_image: {
        alt_text: "Some alt text",
        base_image_url:
            "https://images.axios.com/pzV7Tj0m2AhS4XN8XsvWP2ot8Vo=/fit-in/1366x1366/2021/08/27/1630088719253.jpg",
    },
    topics: [
        {
            id: "651f9439-6eb5-4d4f-a6fc-2587ecf17eeb",
            slug: "politics-policy",
            name: "Politics & Policy",
            description:
                "President Biden has made the COVID-19 crisis and a post-Trump return to national unity and traditional democratic ideals his top priorities. From vaccinations to stimulus to schools, Biden is seeking bipartisan compromise while showing a willingness to use executive authority and bare Democratic majorities in the U.S. House and Senate to implement his policies. Republican leaders are navigating deep party divisions over if and how to move beyond former President Trump.",
            nav_position: 10,
            show_in_nav: true,
            show_in_eden: true,
        },
    ],
};

const mockStory = {
    key: data.id,
    altText: data.altText,
    headline: data.headline,
    topic: data.topics[0].name,
    permaLink: data.permalink,
    publishedDate: data.published_date,
    imageURL: data.primary_image.base_image_url,
};

describe("<Story />", () => {
    test("Should render correctly", () => {
        const { container } = render(<Story {...mockStory} />);
        expect(container).toMatchSnapshot();
    });

    describe("On desktop", () => {
        test("Should render deep link", () => {
            render(<Story {...mockStory} />);
            expect(screen.getByTestId("deep-link")).toBeInTheDocument();
        });

        test("Should render topic as a separate element", () => {
            render(<Story {...mockStory} />);
            expect(screen.getByTestId("topic-desktop")).toBeInTheDocument();
        });
    });

    describe("On mobile", () => {
        test("Should not render deep link", () => {
            resizeWindow(375, 812);
            render(<Story {...mockStory} />);
            expect(screen.queryByTestId("deep-link")).toBeNull();
        });

        test("Should render topic alongside date", () => {
            resizeWindow(375, 812);
            render(<Story {...mockStory} />);
            expect(screen.getByTestId("topic-mobile")).toBeInTheDocument();
        });
    });
});
