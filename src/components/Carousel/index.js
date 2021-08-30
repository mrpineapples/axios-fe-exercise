import { useState } from "react";
import { CarouselContainer, Wrapper, CarouselSlot } from "./styles";
import { useWindowSize } from "../../hooks/useWindowSize";

export const Carousel = ({ children }) => {
    const numItems = children.length;
    const { isMobile } = useWindowSize();
    const [currentPosition, setCurrentPosition] = useState(numItems - 1);
    const [direction, setDirection] = useState("next");
    const [isSliding, setIsSliding] = useState(false);

    const slide = (direction, position) => {
        setIsSliding(true);
        setDirection(direction);
        setCurrentPosition(position);

        setTimeout(() => {
            setIsSliding(false);
        }, 50);
    };

    const getOrder = (itemPosition) => {
        if (itemPosition - currentPosition < 0) {
            return numItems - Math.abs(itemPosition - currentPosition);
        }

        return itemPosition - currentPosition;
    };

    const nextSlide = () => {
        const isLastItem = currentPosition === numItems - 1;
        slide("next", isLastItem ? 0 : currentPosition + 1);
    };

    const prevSlide = () => {
        const lastItem = numItems - 1;
        slide("prev", currentPosition === 0 ? lastItem : currentPosition - 1);
    };

    const nextKeyDown = (e) => {
        if (e.shiftKey && e.key === "Tab") {
            e.preventDefault();
            document.querySelector("[order='1'] a").focus();
        }
    };

    const prevKeyDown = (e) => {
        if (!e.shiftKey && e.key === "Tab") {
            e.preventDefault();
            document.querySelector("button.next").focus();
        }
    };

    return (
        <Wrapper>
            {!isMobile && (
                <button
                    className="prev"
                    data-testid="prev-button"
                    onClick={prevSlide}
                    onKeyDown={prevKeyDown}
                >
                    &#5176;
                </button>
            )}
            <div className="carousel-wrapper">
                <CarouselContainer
                    direction={direction}
                    isSliding={isSliding}
                    numSlides={numItems}
                >
                    {children.map((child, index) => {
                        return (
                            <CarouselSlot
                                data-testid={`slot-${index + 1}`}
                                key={`slot - ${child.key}`}
                                numSlides={numItems}
                                order={getOrder(index)}
                            >
                                {child}
                            </CarouselSlot>
                        );
                    })}
                </CarouselContainer>
            </div>
            {!isMobile && (
                <button
                    className="next"
                    data-testid="next-button"
                    onClick={nextSlide}
                    onKeyDown={nextKeyDown}
                >
                    &#5171;
                </button>
            )}
        </Wrapper>
    );
};
