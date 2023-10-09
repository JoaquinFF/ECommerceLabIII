import { styled } from "styled-components";
import LandingAppbar from "../components/appbars/LandingAppbar"

const Index = () => {
    return(
        <MainContainer>
            <LandingAppbar/>
        </MainContainer>
        
    );
}

const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: var(--primary-color);
`;

export default Index;