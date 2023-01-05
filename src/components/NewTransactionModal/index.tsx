import React, { SetStateAction, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import {
  ButtonRegister,
  Close,
  Content,
  HeaderModal,
  NewTransactionButton,
  Overlay,
  Root,
  TextButton,
  Title,
  TransactionTypeButton,
  TransactionTypeContainer,
} from "./styles";
import { addTransaction } from "../../redux/slice/transactions";
import { useDispatch } from "react-redux";
import { defaultTheme } from "../../styles/themes/default";
import uuid from "react-uuid";

function NewTransactionModal() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number | undefined>();
  const [category, setCategory] = useState("");
  const [transactionType, setTransactionType] = useState("");

  const dispatch = useDispatch();

  const handleTransactionTypeSelect = (type: string) => {
    setTransactionType(type);
  };
  const clearData = () => {
    setDescription("");
    setAmount(undefined);
    setCategory("");
    setTransactionType("");
  };

  const handleSubmit = () => {
    const date = new Date();
    const data = {
      id: uuid(),
      description,
      amount,
      category,
      transactionType,
      date: date.toLocaleDateString("pt-BR"),
    };
    console.log("data", data);
    dispatch(addTransaction(data));
    clearData();
  };

  return (
    <Root>
      <Dialog.Trigger asChild>
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />
        <Content>
          <HeaderModal>
            <Title>Nova transação</Title>
            <Close onClick={clearData}>
              <X size={20} />
            </Close>
          </HeaderModal>
          <form action="">
            <input
              type="text"
              placeholder="Descrição"
              value={description}
              onChange={(text) => setDescription(text.target.value)}
            />

            <input
              type="number"
              placeholder="Preço"
              value={amount}
              onChange={(e) => {
                const value = parseFloat(e.target.value) || 0;

                setAmount(value);
              }}
            />
            <input
              type="text"
              placeholder="Categoria"
              value={category}
              onChange={(text) => setCategory(text.target.value)}
            />

            <TransactionTypeContainer>
              <TransactionTypeButton
                typeTransaction="positive"
                isActive={transactionType === "positive"}
                onClick={() => handleTransactionTypeSelect("positive")}
              >
                <ArrowCircleUp size={28} color={defaultTheme["green-300"]} />
                <TextButton>Entrada</TextButton>
              </TransactionTypeButton>
              <TransactionTypeButton
                typeTransaction="negative"
                isActive={transactionType === "negative"}
                onClick={() => handleTransactionTypeSelect("negative")}
              >
                <ArrowCircleDown size={28} color={defaultTheme["red-300"]} />
                <TextButton>Saída</TextButton>
              </TransactionTypeButton>
            </TransactionTypeContainer>
            <ButtonRegister onClick={handleSubmit}>Cadastrar</ButtonRegister>
          </form>
        </Content>
      </Dialog.Portal>
    </Root>
  );
}

export default NewTransactionModal;
