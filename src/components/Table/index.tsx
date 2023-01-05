import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  EmptyContainer,
  EmptyMessage,
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import emptyImg from "../../assets/empty.png";
import { removeTransaction } from "../../redux/slice/transactions";
import ConfirmationModal from "../ConfirmationModal";
import { priceFormatted } from "../../utils/formatter";
import Pagination from "../Pagination";

function Table() {
  const transactions = useSelector((state: RootState) => state.transactions);
  const [itensPerPage, setItensPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(transactions.transactions.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = transactions.transactions.slice(startIndex, endIndex);

  const dispatch = useDispatch();

  const deleteTransaction = (id: string) => {
    dispatch(removeTransaction(id));
  };

  return (
    <>
      <Pagination
        currentPage={currentPage}
        pages={pages}
        setCurrentPage={setCurrentPage}
      />
      <TransactionsContainer>
        {transactions.transactions.length > 0 ? (
          <>
            <TransactionsTable>
              <tbody>
                {currentItens.map((item: any) => (
                  <tr key={item.id}>
                    <td width="50%">{item.description}</td>
                    <td width="15%">
                      <PriceHighlight type={item.transactionType}>
                        {item.transactionType === "negative" && "-"}{" "}
                        {priceFormatted.format(item.amount)}
                      </PriceHighlight>
                    </td>
                    <td>{item.category}</td>
                    <td>{item.date}</td>
                    <td>
                      <div style={{ cursor: "pointer" }}>
                        <ConfirmationModal
                          item={item}
                          handleConfirm={() => deleteTransaction(item.id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </TransactionsTable>
          </>
        ) : (
          <EmptyContainer>
            <img src={emptyImg} alt="" />
            <EmptyMessage>Lista de transações vazia!</EmptyMessage>
          </EmptyContainer>
        )}
      </TransactionsContainer>
    </>
  );
}

export default Table;
