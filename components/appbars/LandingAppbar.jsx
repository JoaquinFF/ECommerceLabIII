import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/img/Logo.png";

const LandingAppbar = () => {
  return (
    <NavBar id="navegador">
      <StyledLogo
        className="imagenLoca"
        src={logo}
        width={287}
        height={85}
        alt="FieldManager Mining"
      />

    </NavBar>
  );
};

export default LandingAppbar;

const NavBar = styled.div`
  background-color: #E1F4F3; //Luego editar esto y hacer variables para usar colores y fuentes mucho mas facil
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
  width: 12rem;

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

const ContainerButttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-right: 1.5vh;

  @media (max-width: 400px) {
    width: 30vw;
    margin-right: 20px;
  }
`;

const OrderedList = styled.ol`
  display: none;
  padding-top: 8px;
  list-style-type: none;
  float: right;
  margin-right: 30px;
`;

const StyledLi = styled.li`
  display: inline;
  justify-content: end;
`;

const Span = styled.span`
  color: #eda42c;
  border: none;
  margin-right: 20px;
`;

const Button = styled.button`
  color: #eda42c;
  border: none;
  margin-right: 20px;
  width: 10px;
  padding-left: 3px;
`;

const List = styled.ul`
  background-color: var(--clr-bg);
  padding: 3px;
`;

const Item = styled.a`
  color: #eda42c;
  padding: 1rem;
`;
