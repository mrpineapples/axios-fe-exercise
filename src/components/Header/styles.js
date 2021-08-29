import styled from "styled-components";

export const HeaderContainer = styled.nav`
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
