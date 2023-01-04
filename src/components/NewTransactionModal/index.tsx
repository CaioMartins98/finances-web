import React, { useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import {
  ButtonRegister,
  Close,
  Content,
  HeaderModal,
  NewTransactionButton,
  Overlay,
  Title,
} from "./styles";
import { useDispatch } from "react-redux/es/exports";
import { addTransaction } from "../../redux/slice/transactions";

function NewTransactionModal() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const data = {
      description,
      amount,
      category,
    };

    dispatch(addTransaction(data));
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />
        <Content>
          <HeaderModal>
            <Title>Nova transação</Title>
            <Close>
              <X size={20} />
            </Close>
          </HeaderModal>
          <form action="">
            <input
              type="text"
              placeholder="Descrição"
              required
              value={description}
              onChange={(text) => setDescription(text.target.value)}
            />
            <input
              type="text"
              placeholder="Preço"
              required
              value={amount}
              onChange={(text) => setAmount(text.target.value)}
            />
            <input
              type="text"
              placeholder="Categoria"
              required
              value={category}
              onChange={(text) => setCategory(text.target.value)}
            />
            <ButtonRegister onClick={handleSubmit}>Cadastrar</ButtonRegister>
          </form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default NewTransactionModal;
