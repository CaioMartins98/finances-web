import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 1120px;
  margin: 3rem auto 0;
  padding: 0 1.5rem;
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

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    background: transparent;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme["green-300"]};
    color: ${({ theme }) => theme["green-300"]};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      transition: 300ms;
      background: ${({ theme }) => theme["green-500"]};
      border: 1px solid ${({ theme }) => theme["green-500"]};
      color: ${({ theme }) => theme.white};
    }
  }
`;