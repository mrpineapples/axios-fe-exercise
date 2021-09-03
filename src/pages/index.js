import axios from "axios";
import { useWindowSize } from "../hooks/useWindowSize";
import { Carousel } from "../components/Carousel";
import { HomeButton } from "../components/HomeButton";
import { Header } from "../components/Header";
import { Story } from "../components/Story";
import { GlobalStyles } from "../styles";

const Index = ({ storiesData }) => {
    const { isMobile } = useWindowSize();

    return (
        <>
            <GlobalStyles />
            <Header />
            {storiesData && (
                <>
                    <Carousel>
                        {storiesData?.map(
                            ({
                                id,
                                headline,
                                topics,
                                published_date,
                                permalink,
                                primary_image,
                                social_image, // fallback in case of no primary
                            }) => {
                                const { alt_text, base_image_url } =
                                    primary_image || social_image || {};

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
                            }
                        )}
                    </Carousel>
                    {isMobile && <HomeButton />}
                </>
            )}
        </>
    );
};

export async function getServerSideProps(context) {
    const { data: streamData } = await axios.get(
        "https://api.axios.com/api/render/stream/content/"
    );
    const { results } = streamData;
    const storiesToGet = results.map((id) =>
        axios.get(`https://api.axios.com/api/render/content/${id}`)
    );
    const rawStoriesData = await Promise.all(storiesToGet);
    const storiesData = rawStoriesData.map((result) => result.data);

    if (!streamData && !storiesData) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            storiesData,
        },
    };
}

export default Index;
