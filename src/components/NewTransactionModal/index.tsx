import { useState } from "react";
import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";
import {
  Body,
  ButtonCancel,
  ButtonRegister,
  Footer,
  ModalContainer,
  TextButton,
  Title,
  TransactionTypeButton,
  TransactionTypeContainer,
  ContainerError,
  ErrorMessage,
} from "./styles";
import { addTransaction } from "../../redux/slice/transactions";
import { useDispatch } from "react-redux";
import { defaultTheme } from "../../styles/themes/default";
import uuid from "react-uuid";
import { ModalHeader } from "reactstrap";
import { toast } from "react-hot-toast";

interface ModalProps {
  open: boolean;
  toggle: () => void;
}
function NewTransactionModal({ open, toggle }: ModalProps) {
  const [description, setDescription] = useState("");
  const [errorDescription, setErrorDescription] = useState(false);
  const [amount, setAmount] = useState<number | undefined>();
  const [errorAmount, setErrorAmount] = useState(false);
  const [category, setCategory] = useState("");
  const [errorCategory, setErrorCategory] = useState(false);
  const [transactionType, setTransactionType] = useState("");
  const [errorTransactionType, setErrorTransactionType] = useState(false);

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
  const clearErrors = () => {
    setErrorDescription(false);
    setErrorAmount(false);
    setErrorCategory(false);
  };

  const handleCancel = () => {
    clearData();
    clearErrors();
    toggle();
  };
  const validateSubmit = () => {
    if (!description) {
      setErrorDescription(true);
    }
    if (!amount) {
      setErrorAmount(true);
    }
    if (!category) {
      setErrorCategory(true);
    }
    if (!transactionType) {
      setErrorTransactionType(true);
      return toast.error("Escolha um tipo de transação!", {
        style: {
          border: "1px solid #AB222E",
          padding: "16px",
          color: "#fff",
          background: "#202024",
        },
        iconTheme: {
          primary: "#AB222E",
          secondary: "#FFFAEE",
        },
        position: "top-center",
      });
    } else {
      handleSubmit();
      toggle();
      clearErrors();
      toast.success("Transação adicionada com sucesso!", {
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
    }
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
    dispatch(addTransaction(data));
    clearData();
  };

  return (
    <>
      <ModalContainer isOpen={open} toggle={toggle}>
        <ModalHeader>
          <Title>Nova transação</Title>
        </ModalHeader>
        <Body style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            placeholder="Descrição"
            value={description}
            onChange={(text) => {
              setDescription(text.target.value);
              setErrorDescription(false);
            }}
          />
          {errorDescription && (
            <ContainerError>
              <ErrorMessage>Descrição obrigatória</ErrorMessage>
            </ContainerError>
          )}

          <input
            type="number"
            placeholder="Preço"
            value={amount}
            onChange={(e) => {
              const value = parseFloat(e.target.value) || 0;

              setAmount(value);
              setErrorAmount(false);
            }}
          />
          {errorAmount && (
            <ContainerError>
              <ErrorMessage>Preço obrigatório</ErrorMessage>
            </ContainerError>
          )}
          <input
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={(text) => {
              setCategory(text.target.value);
              setErrorCategory(false);
            }}
          />
          {errorCategory && (
            <ContainerError>
              <ErrorMessage>Categoria obrigatória</ErrorMessage>
            </ContainerError>
          )}
          <TransactionTypeContainer>
            <TransactionTypeButton
              typeTransaction="positive"
              isActive={transactionType === "positive"}
              onClick={() => handleTransactionTypeSelect("positive")}
            >
              <ArrowCircleUp
                style={{ backgroundColor: "transparent" }}
                size={28}
                color={defaultTheme["green-300"]}
              />
              <TextButton>Entrada</TextButton>
            </TransactionTypeButton>
            <TransactionTypeButton
              typeTransaction="negative"
              isActive={transactionType === "negative"}
              onClick={() => handleTransactionTypeSelect("negative")}
            >
              <ArrowCircleDown
                style={{ backgroundColor: "transparent" }}
                size={28}
                color={defaultTheme["red-300"]}
              />
              <TextButton>Saída</TextButton>
            </TransactionTypeButton>
          </TransactionTypeContainer>
        </Body>
        <Footer>
          <ButtonRegister type="button" onClick={validateSubmit}>
            Cadastrar
          </ButtonRegister>
          <ButtonCancel onClick={handleCancel}>Cancelar</ButtonCancel>
        </Footer>
      </ModalContainer>
    </>
  );
}

export default NewTransactionModal;
