import styled from "styled-components";

const SearchBar = () => {
    return(
        <MainContainer>
            <Input/>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    height: 75%;
    width: 70%;
    display: flex;
    justify-content: flex-start;
`;

const Input = styled.input`
    width: 50%;
`;

export default SearchBar;