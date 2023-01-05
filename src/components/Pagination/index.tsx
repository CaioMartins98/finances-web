import React from "react";
import { Button, Container } from "./styles";
interface PaginationProps {
  pages: number;
  currentPage: number;
  setCurrentPage: (value: any) => void;
}
function Pagination({ pages, currentPage, setCurrentPage }: PaginationProps) {
  console.log(pages);
  return (
    <>
      <Container>
        {Array.from(Array(pages), (item, index) => {
          return (
            <>
              <Button
                key={index}
                isActive={index === currentPage}
                value={index}
                onClick={(e) =>
                  setCurrentPage(Number((e.target as HTMLInputElement).value))
                }
              >
                {index + 1}
              </Button>
            </>
          );
        })}
      </Container>
    </>
  );
}

export default Pagination;
