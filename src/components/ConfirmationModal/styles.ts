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

  background-color: ${(props) => props.theme["gray-800"]};
  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled(Dialog.Title)`
  font-size: 20px;
  padding: 20px;
`;

export const DescriptionContainer = styled.span`
  padding: 18px;
  display: flex;
  flex-direction: column;
`;
export const Description = styled.span`
  font-size: 20px;
  text-align: center;
  line-height: 30px;
`;

export const Divider = styled.div`
  width: 100%;

  border-top: 0.5px solid ${({ theme }) => theme.white};
`;
export const FooterModal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

export const Close = styled(Dialog.Close)`
  background-color: transparent;
  cursor: pointer;
  outline: 0;
  border: 0;
  line-height: 0;
  width: 48%;
`;

export const ButtonConfirmation = styled.button`
  width: 48%;
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
`;
export const ButtonCancel = styled.button`
  border: 0;
  width: 100%;
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

export const TextButton = styled.span`
  color: ${({ theme }) => theme.white};
`;
