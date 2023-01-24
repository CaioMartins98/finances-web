import React, { useState, useEffect, useMemo } from "react";
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
import SearchForm from "../SearchForm";

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
        <td width="40%">
          <PriceHighlight type={item.transactionType}>
            {item.transactionType === "negative" && "-"}{" "}
            {priceFormatted.format(item.amount)}
          </PriceHighlight>
        </td>
        <td width="30%">{item.category}</td>
        <td width="30%">{item.date}</td>
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
  const [currentPage, setCurrentPage] = useState(0);
  const [itensPerPage] = useState(5);

  const [searchTerm, setSearchTerm] = useState("");
  const filter = transactions.transactions.filter(
    (transaction: any) => transaction.transactionType === order
  );
  const filteredTransactions = useMemo(() => {
    return transactions.transactions.filter((transaction) => {
      return (
        transaction.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [transactions, searchTerm]);

  useEffect(() => {
    searchTerm.length > 0 && setCurrentPage(0);
  }, [searchTerm]);

  const pages = useMemo(() => {
    return Math.ceil(filteredTransactions.length / itensPerPage);
  }, [filteredTransactions, itensPerPage]);

  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = filteredTransactions.slice(startIndex, endIndex);

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

  const handleConfirm = (id: string) => {
    deleteTransaction(id);
  };

  return (
    <>
      {/* <SelectOrder order={order} setOrder={setOrder} /> */}

      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {filteredTransactions.length === 0 && (
        <EmptyContainer>
          <img src={emptyImg} alt="Empty" />
          <EmptyMessage>Não há transações</EmptyMessage>
        </EmptyContainer>
      )}
      {filteredTransactions.length > 0 && (
        <TransactionsContainer>
          <Pagination
            limit={4}
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <>
            <TransactionsTable>
              <tbody>
                <>
                  {currentItens.map((item) => (
                    <ItemTable
                      key={item.id}
                      item={item}
                      handleConfirm={() => handleConfirm(item.id)}
                    />
                  ))}
                </>
              </tbody>
            </TransactionsTable>
          </>
        </TransactionsContainer>
      )}
    </>
  );
}

export default Table;
