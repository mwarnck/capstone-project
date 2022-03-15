import styled from 'styled-components';
import loadingImageSmall from '../images/loadingPageImageSmall.jpg';

export default function LoadingScreen() {
  return (
    <LoadingScreenContainer>
      <IntroTitel>Cocktail Night</IntroTitel>
      <IntroImage
        src={loadingImageSmall}
        alt="Orange Cocktail with dark background"
        width="400"
        height="900"
      ></IntroImage>
    </LoadingScreenContainer>
  );
}

const LoadingScreenContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #000;
`;

const IntroTitel = styled.h1`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  text-align: center;
  top: 60px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 3rem;
  color: #f28d35;
`;

const IntroImage = styled.img`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  min-width: 400px;
  max-width: 800px;
  height: 100%;
`;
