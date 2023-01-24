import React from "react";
import { Button, Container, ButtonField } from "./styles";
import {
  CaretDoubleLeft,
  CaretDoubleRight,
  FunnelSimple,
} from "phosphor-react";
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

  const start = currentPage - Math.floor(limit / 2);
  const end = currentPage + Math.floor(limit / 1);

  const visiblePages = pageList.slice(
    start > 0 ? start : 0,
    end <= pages ? end : pages
  );

  return (
    <>
      <Container>
        {pages > 1 ? (
          <>
            {" "}
            <ButtonField
              value={0}
              onClick={(e) =>
                setCurrentPage(Number((e.target as HTMLInputElement).value))
              }
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
            onClick={(e) =>
              setCurrentPage(Number((e.target as HTMLInputElement).value))
            }
          >
            {page}
          </Button>
        ))}

        {pages > 1 ? (
          <ButtonField
            value={pages - 1}
            onClick={(e) =>
              setCurrentPage(Number((e.target as HTMLInputElement).value))
            }
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
