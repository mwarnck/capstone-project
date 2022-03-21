import styled from 'styled-components';

export default function Header({ children }) {
  return <Heading>{children}</Heading>;
}

const Heading = styled.h1`
  background-color: var(--bg-color-main);
  color: var(--font-color-headlines-bright);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  align-self: center;
  text-align: center;
  padding-top: 4px;
  margin: 0 0 5px 0;
  height: 100%;
`;
