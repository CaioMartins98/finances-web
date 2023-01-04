import styled from "styled-components";

interface SummaryProps {
  variant?: "green";
}

export const SummaryContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;

  @media (max-width: 1024px) {
    width: 100%;
    scroll-behavior: smooth;
    overflow-x: scroll;
  }
`;

export const SummaryCard = styled.div<SummaryProps>`
  background: ${({ theme, variant }) =>
    variant === "green" ? theme["green-700"] : theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem;
`;

export const HeaderCard = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const TitleCard = styled.span`
  color: ${({ theme }) => theme["gray-300"]};
`;
export const AmountCard = styled.strong`
  display: block;
  margin-top: 1rem;
  font-size: 2rem;
`;
