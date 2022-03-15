import styled from 'styled-components';
import loadingImage from '../images/loadingPageImage.jpg';

export default function LoadingPage() {
  return (
    <LoadingScreen>
      <IntroTitel>Cocktail Night</IntroTitel>
      <IntroImage
        src={loadingImage}
        alt="Orange Cocktail with dark background"
        width="400"
        height="900"
      ></IntroImage>
    </LoadingScreen>
  );
}

const LoadingScreen = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #000;
`;

const IntroTitel = styled.p`
  position: absolute;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  top: 60px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 3rem;
  font-weight: bold;
  color: #f28d35;
`;

const IntroImage = styled.img`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  min-width: 400px;
  max-width: 800px;
  height: 100%;
`;
