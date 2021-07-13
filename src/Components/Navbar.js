import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../Data/MenuData";
import { Button } from "./Button";
// import Bars from "../Images/bars.svg";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  height: 60px;
  background: #334257;
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  z-index: 100;
  position: fixed;
  width: 100%;
  align-items: center;
  opacity: 0.9;
`;

const NavLink = css`
  color: #fff;
  diplay: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
  align-items: center;
  font-size: 30px;
`;

const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 786px) {
    display: block;
    color: white;
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
`;

// const MenuBars = styled.i`
//   display: none;

//   @media screen and (mx-width: 786px) {
//     display: block;
//     background-image: url(${Bars});
//     background-size: contain;
//     height: 40px;
//     width: 40px;
//   }
// `;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuList = styled(Link)`
  ${NavLink}
`;
const Navbtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo to="/">RealEst</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuList to={item.link} key={index}>
            {item.title}
          </NavMenuList>
        ))}
      </NavMenu>
      <Navbtn>
        <Button to="/contact" primary="true">
          Contact Us{" "}
        </Button>
      </Navbtn>
    </Nav>
  );
};

export default Navbar;
