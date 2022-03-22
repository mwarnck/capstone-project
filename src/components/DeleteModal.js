import styled from 'styled-components';

export default function DeleteModal({ confirmDeleteDrink, cancelDeleteDrink }) {
  return (
    <ModalContainer>
      Do you really want to delete this drink?
      <ButtonWrapper>
        <ModalButtonConfirm onClick={confirmDeleteDrink}>
          Yes, delete
        </ModalButtonConfirm>
        <ModalButtonCancel onClick={cancelDeleteDrink}>
          No, cancel
        </ModalButtonCancel>
      </ButtonWrapper>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  width: 300px;
  height: 120px;
  position: fixed;
  top: 40vh;
  left: 10vw;

  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border: 2px solid var(--font-color-headlines-bright);
  border-radius: 5px;
  background-color: var(--bg-color-main);
  color: var(--font-color-headlines-bright);
  text-align: center;
`;

const ButtonWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

const ModalButtonConfirm = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 5px;
  border: 2px solid var(--font-color-headlines-bright);
  background-color: var(--bg-color-button);
  color: var(--font-color-headlines-bright);
`;

const ModalButtonCancel = styled(ModalButtonConfirm)`
  background-color: var(--bg-color-cancelButton);
`;
