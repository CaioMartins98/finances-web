import styled, { css } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

interface TypeTransactionButtonProps {
  typeTransaction: "positive" | "negative";
  isActive: boolean;
}
export const Root = styled(Dialog.Root)`
  width: 100%;
  @media (min-width: 768px) {
    width: 100px;
  }
`;
export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  cursor: pointer;
  padding: 0 1.25rem;
  font-weight: bold;

  &:hover {
    transition: 300ms;
    background: ${(props) => props.theme["green-700"]};
  }
`;

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.65);
`;
export const Content = styled(Dialog.Content)`
  min-width: 30rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${(props) => props.theme["gray-800"]};
  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${({ theme }) => theme["gray-900"]};
    color: ${({ theme }) => theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme["gray-500"]};
    }
  }
  @media (max-width: 767px) {
    height: 100vh;
    align-items: center;
  }
`;

export const Title = styled(Dialog.Title)``;

export const HeaderModal = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 767px) {
    margin-bottom: 150px;
  }
`;

export const Close = styled(Dialog.Close)`
  background-color: transparent;
  cursor: pointer;
  outline: 0;
  border: 0;
  line-height: 0;
  color: ${({ theme }) => theme["gray-300"]};
`;

export const ButtonRegister = styled.button`
  border: 0;

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

  @media (max-width: 767px) {
    margin-top: 150px;
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
`;
