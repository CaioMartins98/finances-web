import React from "react";
import { Button, Container, ButtonField } from "./styles";
import { CaretDoubleLeft, CaretDoubleRight } from "phosphor-react";

interface PaginationProps {
  pages: number;
  currentPage: number;
  setCurrentPage: (value: any) => void;
  limit: number;
}

function Pagination({
  pages,
  currentPage,
  setCurrentPage,
  limit,
}: PaginationProps) {
  const pageList = Array.from(Array(pages), (item, index) => index + 1);

  let start = currentPage - Math.floor(limit / 2);
  let end = currentPage + Math.floor(limit / 2);

  if (start < 0) {
    start = 0;
    end = limit;
  }
  if (end > pages) {
    end = pages;
    start = pages - limit;
  }

  const visiblePages = pageList.slice(start, end);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = parseInt((e.currentTarget as HTMLButtonElement).value, 10);
    isNaN(value) ? null : setCurrentPage(value);
  };

  return (
    <>
      <Container>
        {pages > 1 ? (
          <>
            {" "}
            <ButtonField
              value={0}
              onClick={handleClick}
              disabled={currentPage === 0}
            >
              <CaretDoubleLeft />
            </ButtonField>
          </>
        ) : (
          <></>
        )}

        {visiblePages.map((page) => (
          <Button
            key={page}
            isActive={page === currentPage + 1}
            value={page - 1}
            onClick={(e) => {
              const value = parseInt(
                (e.currentTarget as HTMLInputElement).value,
                10
              );
              isNaN(value) ? null : setCurrentPage(value);
            }}
          >
            {page}
          </Button>
        ))}

        {pages > 1 ? (
          <ButtonField
            value={pages - 1}
            onClick={(e) => {
              const value = parseInt(
                (e.currentTarget as HTMLInputElement).value,
                10
              );
              isNaN(value) ? null : setCurrentPage(value);
            }}
            disabled={currentPage === pages - 1}
          >
            <CaretDoubleRight />
          </ButtonField>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
}

export default Pagination;
