import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useWindowSize } from "../hooks/useWindowSize";
import { Carousel } from "../components/Carousel";
import { HomeButton } from "../components/HomeButton";
import { Story } from "../components/Story";
import { GlobalStyles } from "../styles";

const Index = () => {
    const [stories, setStories] = useState(null);
    const { isMobile } = useWindowSize();

    useEffect(() => {
        (async () => {
            const { data: streamData } = await axios.get(
                "https://api.axios.com/api/render/stream/content/"
            );
            const { results } = streamData;
            const storiesToGet = results.map((id) =>
                axios.get(`https://api.axios.com/api/render/content/${id}`)
            );
            const storiesData = await Promise.all(storiesToGet);
            setStories(storiesData);
        })();
    }, []);

    return (
        <div>
            <GlobalStyles />
            <Header>
                <h1>More from Axios.com</h1>
                {!isMobile && <HomeButton />}
            </Header>
            {stories && (
                <Carousel>
                    {stories?.map(({ data }) => {
                        const {
                            id,
                            headline,
                            topics,
                            published_date,
                            permalink,
                            primary_image,
                        } = data;
                        const { alt_text, base_image_url } = primary_image;

                        return (
                            <Story
                                key={id}
                                altText={alt_text}
                                headline={headline}
                                topic={topics?.[0]?.name}
                                permaLink={permalink}
                                publishedDate={published_date}
                                imageURL={base_image_url}
                            />
                        );
                    })}
                </Carousel>
            )}
            {isMobile && stories && <HomeButton />}
        </div>
    );
};

const Header = styled.nav`
    display: flex;
    align-items: center;

    h1 {
        color: #000000;
        font-size: 32px;
        margin-left: 20px;
    }

    #home-link {
        margin-left: auto;
    }

    @media (min-width: 980px) {
        h1 {
            font-size: 48px;
            margin-left: 40px;
        }
    }
`;

export default Index;
