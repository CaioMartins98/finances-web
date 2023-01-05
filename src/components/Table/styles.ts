import styled from "styled-components";

interface PriceHighlightProps {
  type: "positive" | "negative";
}

export const TransactionsContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 2rem auto 0;
  padding: 0 1.5rem;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 100%;
    scroll-behavior: smooth;
    overflow-x: scroll;
  }
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${({ theme }) => theme["gray-700"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({ theme, type }) =>
    type === "positive" ? theme["green-300"] : theme["red-300"]};
`;

export const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 5rem;
  height: 170px;
`;

export const EmptyMessage = styled.span`
  color: ${({ theme }) => theme["gray-300"]};
`;
