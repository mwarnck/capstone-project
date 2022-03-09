import styled from 'styled-components';

export default function Header({ children }) {
  return <Heading>{children}</Heading>;
}

const Heading = styled.h1`
  background-color: #f28d35;
  color: #0f88f2;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-radius: 5px;
  align-self: center;
  text-align: center;
  margin: 0;
`;
