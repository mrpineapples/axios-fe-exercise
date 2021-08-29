import { useState } from "react";
import { CarouselContainer, Wrapper, CarouselSlot } from "./styles";
import { useWindowSize } from "../../hooks/useWindowSize";

export const Carousel = ({ children }) => {
    const { isMobile } = useWindowSize();
    const [currentPosition, setCurrentPosition] = useState(0);
    const [direction, setDirection] = useState("next");
    const [isSliding, setIsSliding] = useState(false);
    const numItems = children.length;

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

    return (
        <Wrapper>
            {!isMobile && (
                <button className="prev" onClick={prevSlide}>
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
                <button className="next" onClick={nextSlide}>
                    &#5171;
                </button>
            )}
        </Wrapper>
    );
};
