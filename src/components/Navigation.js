import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <NavBar>
      <LinkButton to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="35px"
          height="35px"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          fill="#fffffe"
        >
          <path
            fill=""
            d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586l6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"
          />
        </svg>
      </LinkButton>
      <LinkButton to="/favorites">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="35px"
          height="35px"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 26 24"
          fill="#fffffe"
        >
          <path
            fill=""
            d="M23.812.678c-.054-.034-.107-.06-.16-.087a4.492 4.492 0 0 0-2.105-.516h-.008a4.602 4.602 0 0 0-3.965 2.278l-.012.022a4.429 4.429 0 0 0-.582 1.847l-.001.017h-9.6L6.305 1.65A2.664 2.664 0 0 0 3.229.071l.018-.004L.001.805l.201.886L3.448.953a1.76 1.76 0 0 1 2.014 1.035L5.466 2l.932 2.24H.302l10.193 10.193v7.463c-2.367.168-4 .952-4 1.925v.181h9.824v-.181c0-.972-1.636-1.76-4-1.925v-7.463l6.283-6.283c.197.167.417.322.649.458l.022.012A4.575 4.575 0 0 0 23.841.692L23.819.68zm.999 3.507l-2.494.007l1.241-2.16a3.305 3.305 0 0 1 1.251 2.135zm-2.038-2.609l-1.241 2.166l-1.254-2.153a3.285 3.285 0 0 1 1.264-.248c.443 0 .866.086 1.253.243zm-4.111 1.429c.218-.379.496-.698.825-.955l.007-.005l1.254 2.153l-2.488.007c.056-.449.198-.855.41-1.216l-.008.015zM3.359 5.506H6.92l.49 1.187H4.547zm14.894 1.188h-.813V6.7H8.387l-.49-1.187h11.534zm2.045 1.026l1.241-2.166l1.254 2.153c-.373.158-.807.25-1.262.25c-.444 0-.868-.087-1.255-.246l.022.008zm4.111-1.422a3.297 3.297 0 0 1-.824.955l-.007.005l-1.254-2.153l2.488-.006a3.35 3.35 0 0 1-.411 1.214l.009-.016z"
          />
        </svg>
      </LinkButton>
      <LinkButton to="/myDrinks">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="35px"
          height="35px"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 26 26"
          fill="#fffffe"
        >
          <path
            fill=""
            d="M22.438-.063c-.375 0-.732.17-1.032.47l-.718.687l4.218 4.218l.688-.718c.6-.6.6-1.494 0-2.094L23.5.406c-.3-.3-.688-.469-1.063-.469zM20 1.688l-1.094.907l4.5 4.5l1-1L20 1.687zm-1.688 1.625l-9.03 8.938a.975.975 0 0 0-.126.125l-.062.031a.975.975 0 0 0-.219.438l-1.219 4.281a.975.975 0 0 0 1.219 1.219l4.281-1.219a.975.975 0 0 0 .656-.531l8.876-8.782L21 6v.094l-1.188-1.188h.094l-1.593-1.593zM.813 4A1 1 0 0 0 0 5v20a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V14a1 1 0 1 0-2 0v10H2V6h10a1 1 0 1 0 0-2H1a1 1 0 0 0-.094 0a1 1 0 0 0-.094 0zm9.813 9.813l1.375.093l.094 1.5l-1.375.406l-.531-.53l.437-1.47z"
          />
        </svg>
      </LinkButton>
      <LinkButton to="/randomDrink">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="35px"
          height="35px"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
          fill="#fffffe"
        >
          <path
            fill=""
            d="M12 1L0 13l12 12l12-12L12 1zm0 2.8l9.2 9.2l-9.2 9.2L2.8 13L12 3.8zM12 8a1 1 0 0 0 0 2a1 1 0 0 0 0-2zm-4 4a1 1 0 0 0 0 2a1 1 0 0 0 0-2zm4 0a1 1 0 0 0 0 2a1 1 0 0 0 0-2zm4 0a1 1 0 0 0 0 2a1 1 0 0 0 0-2zm10.8 1l-2 2H30v12H18v-5.2l-2 2V29h16V13h-5.2zM12 16a1 1 0 0 0 0 2a1 1 0 0 0 0-2zm12 4a1 1 0 0 0 0 2a1 1 0 0 0 0-2z"
          />
        </svg>
      </LinkButton>
    </NavBar>
  );
}

const NavBar = styled.nav`
  width: 100%;
  height: 48px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  position: fixed;
  bottom: 0;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  background-color: var(--bg-color-main);
  border-top: 2px solid var(--font-color-text-bright);
`;

const LinkButton = styled(NavLink)`
  display: grid;
  place-items: center;
  text-decoration: none;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border-right: 1px solid var(--font-color-text-bright);
  border-left: 1px solid var(--font-color-text-bright);

  &.active {
    svg {
      fill: var(--bg-color-button);
    }
  }
`;
