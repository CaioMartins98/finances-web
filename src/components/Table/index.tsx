import React from "react";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "../../redux/store";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import emptyImg from "../../assets/empty.png";

interface TableProps {
  id: string;
  title: string;
  amount: string;
  category: string;
  date: string;
  type: "positive" | "negative";
}
function Table() {
  const table: TableProps[] = [
    {
      id: "1",
      title: "Desenvolvimento de site",
      amount: "R$ 21.000,00",
      category: "Vendas",
      date: "04/01/2023",
      type: "positive",
    },

    {
      id: "2",
      title: "Roupas",
      amount: "- R$ 1.000,00",
      category: "Compras",
      date: "02/01/2023",
      type: "negative",
    },
    {
      id: "3",
      title: "Desenvolvimento de site",
      amount: "R$ 11.000,00",
      category: "Vendas",
      date: "04/01/2023",
      type: "positive",
    },
    {
      id: "4",
      title: "Hambúrguer",
      amount: "- R$ 50,00",
      category: "Alimentação",
      date: "04/01/2023",
      type: "negative",
    },
  ];
  const transactions = useSelector((state: RootState) => state.transactions);
  console.log("transactions", transactions.transactions);
  return (
    <TransactionsContainer>
      {transactions.transactions.length > 0 ? (
        <>
          <TransactionsTable>
            <tbody>
              {transactions?.transactions.map((item: any) => (
                <tr key={item.id}>
                  <td width="50%">{item.description}</td>
                  <td>
                    <PriceHighlight type={item.type}>
                      {item.amount}
                    </PriceHighlight>
                  </td>
                  <td>{item.category}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </TransactionsTable>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img src={emptyImg} alt="" />
          <span>Lista de transações vazia! Adicione uma nova transação!</span>
        </div>
      )}
    </TransactionsContainer>
  );
}

export default Table;
