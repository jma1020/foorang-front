import styled from "@emotion/styled";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { open, close } from "store/slice/modalSlice";
import { COLOR } from "./constants";

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const isModal = useSelector((state: RootState) => state.modal.isModal);
  const dispatch = useDispatch();

  return (
    <>
      {isModal && (
        <React.Fragment>
          <BackGround onClick={() => dispatch(close())} />
          <ModalBox>
            {children}
            <BtnContainer></BtnContainer>
          </ModalBox>
        </React.Fragment>
      )}
    </>
  );
};

const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: #555;
`;

const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 200;
  transform: translate(-50%, -50%);
  padding: 3rem;
  background-color: white;
  border-radius: 1rem;
`;

const BtnContainer = styled.div`
  display: flex;
`;

const CloseBtn = styled.button`
  color: white;
  background-color: ${COLOR.main};
`;

const SubmitBtn = styled.button`
  color: white;
  background-color: ${COLOR.main};
`;
export default Modal;
