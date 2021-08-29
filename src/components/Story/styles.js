import styled from "styled-components";

export const StoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: inherit;

    .story-img {
        width: 100%;
        height: 135px;
    }

    .headline {
        font-size: 18px;
        margin: 16px 0 12px 0;
    }

    .topic {
        &--desktop {
            font-size: 14px;
            color: #ab7d36;
            margin: 20px 0 8px 0;
        }
    }

    .story-meta {
        align-items: baseline;
        display: flex;
        color: #656568;
        font-size: 12px;

        .topic {
            &:before {
                content: " - ";
            }
        }

        .link {
            font-size: 18px;
            margin-left: auto;
            text-align: center;
            text-decoration: none;
            color: #2257da;
        }
    }

    @media (min-width: 980px) {
        .story-img {
            height: 205px;
        }

        .story-meta {
            font-size: 14px;
        }
    }
`;
