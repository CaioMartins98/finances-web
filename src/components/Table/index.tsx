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
import { toast } from "react-hot-toast";
import SelectOrder from "../SelectOrder";

interface ItemTableProps {
  item: {
    description: string;
    transactionType: "positive" | "negative";
    id: string;
    amount: number;
    category: string;
    date: string;
  };
  handleConfirm: () => void;
}

const ItemTable = ({ item, handleConfirm }: ItemTableProps) => {
  return (
    <>
      <tr key={item.id}>
        <td width="40%">{item.description}</td>
        <td width="30%">
          <PriceHighlight type={item.transactionType}>
            {item.transactionType === "negative" && "-"}{" "}
            {priceFormatted.format(item.amount)}
          </PriceHighlight>
        </td>
        <td>{item.category}</td>
        <td>{item.date}</td>
        <td>
          <div style={{ cursor: "pointer" }}>
            <ConfirmationModal item={item} handleConfirm={handleConfirm} />
          </div>
        </td>
      </tr>
    </>
  );
};

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
    toast.success("Transação removida com sucesso!", {
      style: {
        border: "1px solid #00875F",
        padding: "16px",
        color: "#fff",
        background: "#202024",
      },
      iconTheme: {
        primary: "#00875F",
        secondary: "#FFFAEE",
      },
    });
  };

  useEffect(() => {
    setCurrentPage(0);
    setCurrentPageFiltered(0);
  }, [order]);

  return (
    <>
      <SelectOrder order={order} setOrder={setOrder} />
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
                        <ItemTable
                          item={item}
                          handleConfirm={() => deleteTransaction(item.id)}
                        />
                      ))}
                    </>
                  ) : (
                    <>
                      {currentItensFiltered.map((item: any) => (
                        <ItemTable
                          item={item}
                          handleConfirm={() => deleteTransaction(item.id)}
                        />
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
