import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;

    .carousel-wrapper {
        width: 100%;
        overflow: scroll;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    button {
        border: none;
        margin: auto;
        padding: 5px;
        width: auto;
        overflow: visible;
        background: transparent;
        color: inherit;
        font: inherit;
        line-height: normal;
        cursor: pointer;
    }

    .next {
        margin-left: 20px;
    }

    @media (min-width: 980px) {
        .carousel-wrapper {
            overflow: hidden;
        }
    }
`;

export const CarouselContainer = styled.div`
    display: flex;
    margin: 0 0 20px 20px;

    @media (min-width: 980px) {
        transition: ${({ isSliding }) =>
            isSliding ? "none" : "transform 1.25s ease"};
        transform: ${({ isSliding, direction }) => {
            if (!isSliding) {
                return "translateX(-430px)"; // slot width + margin
            } else if (direction === "prev") {
                return "translateX(-860px)"; // double the above because we're moving two cards
            }
        }};
    }
`;

export const CarouselSlot = styled.div`
    margin-right: 20px;
    order: ${({ order }) => order};
    width: 220px;
    position: relative;

    @media (min-width: 980px) {
        margin-right: 100px;
        width: 330px;

        &:after {
            background: #e9e9ee;
            content: "";
            position: absolute;
            top: 0;
            right: -50px;
            z-index: 10000;
            width: 1px;
            height: 100%;
        }
    }
`;
