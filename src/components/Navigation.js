import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <NavBar>
      <LinkButton to="/">All Drinks</LinkButton>
      <LinkButton to="/favorites">Favorites</LinkButton>
      <LinkButton to="/mydrinks">My Drinks</LinkButton>
    </NavBar>
  );
}

const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  background-color: #0392b0;
`;

const LinkButton = styled(NavLink)`
  display: grid;
  place-items: center;
  text-decoration: none;
  color: #000;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;

  &.active {
    background-color: #f28d35;
    color: #fff;
  }
`;
