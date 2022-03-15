import styled from 'styled-components';

export default function LoadingPage() {
  return (
    <LoadingScreen>
      <img
        src="https://source.unsplash.com/random/400×900/?cocktail"
        alt="loading screen"
        width="400"
        height="900"
      />
    </LoadingScreen>
  );
}

const LoadingScreen = styled.div`
  margin: 0 auto;
  position: relative;
`;
