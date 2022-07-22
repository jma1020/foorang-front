import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { close } from "store/slice/modalSlice";
import * as Styled from "./modal.styled";

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
          <Styled.BackGround onClick={() => dispatch(close())} />
          <Styled.ModalBox>
            {children}
            <Styled.BtnContainer>
              <Styled.CloseBtn>닫기</Styled.CloseBtn>
              <Styled.SubmitBtn>확인</Styled.SubmitBtn>
            </Styled.BtnContainer>
          </Styled.ModalBox>
        </React.Fragment>
      )}
    </>
  );
};

export default Modal;
