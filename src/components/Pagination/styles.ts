import styled, { css } from "styled-components";
interface ButtonProps {
  isActive: boolean;
}
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  width: 100%;
  gap: 10px;
`;
export const Button = styled.button<ButtonProps>`
  border: 0;
  padding: 1rem;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${({ theme }) => theme["gray-700"]};
  color: ${({ theme }) => theme["gray-500"]};
  ${({ isActive, theme }) =>
    isActive &&
    css`
      background-color: ${theme["green-700"]};

      color: ${theme.white};
    `};
  &:hover {
    background-color: ${({ theme }) => theme["green-700"]};
  }
`;
