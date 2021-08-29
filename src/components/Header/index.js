import { useWindowSize } from "../../hooks/useWindowSize";
import { HomeButton } from "../HomeButton";
import { HeaderContainer } from "./styles";

export const Header = () => {
    const { isMobile } = useWindowSize();

    return (
        <HeaderContainer>
            <h1>More from Axios.com</h1>
            {!isMobile && <HomeButton />}
        </HeaderContainer>
    );
};
