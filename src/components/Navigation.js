import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <NavBar>
      <LinkButton to="/">All</LinkButton>
      <LinkButton to="/favorites">Favorites</LinkButton>
    </NavBar>
  );
}

const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  padding: 5px;
  margin-top: 0;
  margin-bottom: 0;
`;

const LinkButton = styled(NavLink)`
  text-align: center;
  text-decoration: none;
  color: black;

  &.active {
    color: #f28d35;
  }
`;
