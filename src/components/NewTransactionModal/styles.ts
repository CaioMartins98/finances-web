import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import styled, { css } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

interface TypeTransactionButtonProps {
  typeTransaction: "positive" | "negative";
  isActive: boolean;
}
// export const ModalContainer = styled(Modal)`
//   * {
//     background-color: ${(props) => props.theme["gray-800"]};
//   }
// `;

// export const Body = styled(ModalBody)`
//   input {
//     flex: 1;
//     border-radius: 6px;
//     border: 0;
//     margin-bottom: 10px;
//     background: ${({ theme }) => theme["gray-900"]};
//     color: ${({ theme }) => theme["gray-300"]};
//     padding: 1rem;
//     :focus {
//       outline: 0;
//       box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]};
//     }
//     &::placeholder {
//       color: ${({ theme }) => theme["gray-500"]};
//     }
//   }
//   @media (max-width: 767px) {
//     height: 100vh;
//     align-items: center;
//   }
// `;

// export const Title = styled.span``;

// export const HeaderModal = styled(ModalHeader)``;

// export const Close = styled(Dialog.Close)`
//   background-color: transparent;
//   cursor: pointer;
//   outline: 0;
//   border: 0;
//   line-height: 0;
//   color: ${({ theme }) => theme["gray-300"]};
// `;

export const ModalContainer = styled(Modal)`
  * {
    background-color: ${(props) => props.theme["gray-800"]};
  }

  @media (max-width: 576px) {
    .modal-dialog {
      width: 90%;
    }
  }
`;

export const Body = styled(ModalBody)`
  input {
    border-radius: 6px;
    border: 0;
    margin-bottom: 10px;
    background: ${({ theme }) => theme["gray-900"]};
    color: ${({ theme }) => theme["gray-300"]};
    padding: 1rem;
    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]};
    }
    &::placeholder {
      color: ${({ theme }) => theme["gray-500"]};
    }

    width: 100%;
    @media (min-width: 768px) {
      align-items: center;
    }
  }

  @media (max-width: 767px) {
    height: 60vh;
    align-items: center;
  }
`;

export const Title = styled.span`
  @media (max-width: 576px) {
    font-size: 1.2rem;
    padding: 0.5rem;
  }
`;

export const HeaderModal = styled(ModalHeader)`
  @media (max-width: 576px) {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
`;

export const Close = styled(Dialog.Close)`
  background-color: transparent;
  cursor: pointer;
  outline: 0;
  border: 0;
  line-height: 0;
  color: ${({ theme }) => theme["gray-300"]};

  @media (max-width: 576px) {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
`;

export const ButtonRegister = styled.button`
  border: 0;

  width: 48%;
  border-radius: 6px;
  height: 50px;
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  background-color: ${({ theme }) => theme["green-300"]};
  cursor: pointer;
  &:hover {
    transition: 300ms;
    background: ${(props) => props.theme["green-700"]};
  }
`;

export const TransactionTypeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const TransactionTypeButton = styled.div<TypeTransactionButtonProps>`
  border: 0;
  width: 48%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  border-radius: 6px;
  height: 50px;
  background-color: ${({ theme }) => theme["gray-700"]};
  ${({ isActive, theme, typeTransaction }) =>
    isActive &&
    typeTransaction === "positive" &&
    css`
      background-color: ${theme["green-700"]};
    `};

  ${({ isActive, theme, typeTransaction }) =>
    isActive &&
    typeTransaction === "negative" &&
    css`
      background-color: ${theme["red-700"]};
    `};
  cursor: pointer;

  &:hover {
    transition: 300ms;
    ${({ theme, typeTransaction }) =>
      typeTransaction === "positive" &&
      css`
        background-color: ${theme["green-500"]};
      `};

    ${({ theme, typeTransaction }) =>
      typeTransaction === "negative" &&
      css`
        background-color: ${theme["red-500"]};
      `};
  }
`;

export const TextButton = styled.span`
  color: ${({ theme }) => theme.white};
  background-color: transparent;
`;

export const ContainerError = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme["red-500"]};
`;

export const Footer = styled(ModalFooter)`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonCancel = styled.button`
  border: 0;

  width: 48%;
  border-radius: 6px;
  height: 50px;
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  background-color: ${({ theme }) => theme["red-300"]};
  cursor: pointer;
  &:hover {
    transition: 300ms;
    background: ${(props) => props.theme["red-700"]};
  }
`;
