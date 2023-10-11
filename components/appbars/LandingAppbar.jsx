import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/img/Logo.png";
import SearchBar from "../searchbar/SearchBar";

const LandingAppbar = () => {
  return (
    <NavBar id="navegador">
      <StyledLogo
        className="styledLogo"
        src={logo}
        alt="Concesionaria GF"
      />
      <Title>CONCESIONARIA GF</Title>
      <SearchBar/>
    </NavBar>
  );
};

export default LandingAppbar;

const NavBar = styled.div`
  background-color: var(--secondary-color); //Luego editar esto y hacer variables para usar colores y fuentes mucho mas facil
  height: 4rem;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  font-family: var(--ff-primary);
  font-weight: var(--fw-light);
`;

const StyledLogo = styled(Image)`
  object-fit: contain;
  display: flex;
  justify-self: left;
  margin-left: 20px;
  width: 5rem;

  @media (max-width: 320px) {
    width: 9rem;
    margin-left: 0px;
  }

  @media (min-width: 321px) and (max-width: 400px) {
    width: 10rem;
    margin-left: 8px;
  }

  @media (min-width: 401px) and (max-width: 420px) {
    width: 11rem;
    margin-left: 10px;
  }

  @media (min-width: 601px) and (max-width: 900px) {
    margin-left: 20px;
  }
`;

const Title = styled.h4`
  font-family: var(--primary-font)
`;

