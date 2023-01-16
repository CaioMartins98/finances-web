import styled from "styled-components";

export const Container = styled.div`
  height: 212px;
  background-color: ${(props) => props.theme["gray-900"]};
  width: 100%;
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
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
