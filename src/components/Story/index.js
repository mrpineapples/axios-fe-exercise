import PropTypes from "prop-types";
import { useWindowSize } from "../../hooks/useWindowSize";
import { StoryContainer } from "./styles";

export const Story = ({
    altText,
    headline,
    imageURL,
    permaLink,
    publishedDate,
    topic,
}) => {
    const { isMobile } = useWindowSize();
    const formattedDate = new Date(publishedDate).toLocaleDateString("en-US", {
        dateStyle: "long",
    });

    return (
        <StoryContainer data-testid="story-container">
            <a href={permaLink} target="_blank" rel="noopener noreferrer">
                <img className="story-img" src={imageURL} alt={altText} />
            </a>
            <div className="info">
                {!isMobile && <p className="topic topic--desktop">{topic}</p>}
                <p className="headline">{headline}</p>
                <div className="story-meta">
                    <time className="date" dateTime={publishedDate}>
                        {formattedDate}
                    </time>
                    {isMobile && <span className="topic">{topic}</span>}
                    {!isMobile && (
                        <a
                            className="link"
                            data-testid="deep-link"
                            href={permaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Go deeper &#8594;
                        </a>
                    )}
                </div>
            </div>
        </StoryContainer>
    );
};

Story.propTypes = {
    altText: PropTypes.string,
    headline: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    permaLink: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
};
