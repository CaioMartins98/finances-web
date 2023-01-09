import React, { useState, useEffect } from "react";
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
import { Funnel, Check } from "phosphor-react";
import * as Select from "@radix-ui/react-select";

function Table() {
  const transactions = useSelector((state: RootState) => state.transactions);
  const dispatch = useDispatch();
  const [order, setOrder] = useState("all");

  const [itensPerPage, setItensPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  const [itensPerPageFiltered, setItensPerPageFiltered] = useState(5);
  const [currentPageFiltered, setCurrentPageFiltered] = useState(0);

  const pages = Math.ceil(transactions.transactions.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = transactions.transactions.slice(startIndex, endIndex);

  const filter = transactions.transactions.filter(
    (transaction: any) => transaction.transactionType === order
  );

  const pagesFiltered = Math.ceil(filter.length / itensPerPageFiltered);
  const startIndexFiltered = currentPageFiltered * itensPerPageFiltered;
  const endIndexFiltered = startIndexFiltered + itensPerPageFiltered;
  const currentItensFiltered = filter.slice(
    startIndexFiltered,
    endIndexFiltered
  );

  const deleteTransaction = (id: string) => {
    dispatch(removeTransaction(id));
  };

  return (
    <>
      <Select.Root value={order} onValueChange={setOrder}>
        <Select.Trigger>
          <Select.Icon>
            <Funnel />
          </Select.Icon>
          <Select.Value placeholder="Filtro" />
        </Select.Trigger>
        <Select.Portal>
          <Select.Content>
            <Select.Viewport
              style={{
                backgroundColor: "#333333",
                width: 200,
                cursor: "pointer",
              }}
            >
              <Select.Item value="all">
                <Select.ItemText>Todos</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator">
                  <Check />
                </Select.ItemIndicator>
              </Select.Item>
              <Select.Item value="positive">
                <Select.ItemText>Entrada</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator">
                  <Check />
                </Select.ItemIndicator>
              </Select.Item>
              <Select.Item value="negative">
                <Select.ItemText>Saída</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator">
                  <Check />
                </Select.ItemIndicator>
              </Select.Item>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      {order === "all" ? (
        <>
          <Pagination
            currentPage={currentPage}
            pages={pages}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <>
          {" "}
          <Pagination
            currentPage={currentPageFiltered}
            pages={pagesFiltered}
            setCurrentPage={setCurrentPageFiltered}
          />
        </>
      )}

      <TransactionsContainer>
        {transactions.transactions.length > 0 ? (
          <>
            <TransactionsTable>
              <tbody>
                <>
                  {order === "all" ? (
                    <>
                      {currentItens.map((item: any) => (
                        <tr key={item.id}>
                          <td width="50%">{item.description}</td>
                          <td width="20%">
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
                    </>
                  ) : (
                    <>
                      {currentItensFiltered.map((item: any) => (
                        <tr key={item.id}>
                          <td width="50%">{item.description}</td>
                          <td width="20%">
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
                    </>
                  )}
                </>
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
