import { useEffect, useState } from 'react';
import styled from 'styled-components';
import scrollToTopIcon from '../icons/scrollToTopIcon.svg';

export default function ScrollToTop() {
  const [isVisable, setIsVisable] = useState(false);

  useEffect(() => {
    function checkButtonVisability() {
      if (window.pageYOffset > 400) {
        setIsVisable(true);
      } else {
        setIsVisable(false);
      }
    }

    window.addEventListener('scroll', checkButtonVisability);
    return () => {
      window.removeEventListener('scroll', checkButtonVisability);
    };
  }, [setIsVisable]);

  return (
    <>
      {isVisable && (
        <ArrowUpButton type="button" onClick={scrollToTop}>
          <img
            src={scrollToTopIcon}
            width="30"
            height="30"
            alt="scroll to top icon"
          />
        </ArrowUpButton>
      )}
    </>
  );

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}

const ArrowUpButton = styled.button`
  position: fixed;
  bottom: 55px;
  right: 10px;
  background-color: transparent;
  border: none;
`;
