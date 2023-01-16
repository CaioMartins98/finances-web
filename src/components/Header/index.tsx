import React, { useState } from "react";
import logo from "../../assets/logo.png";
import NewTransactionModal from "../NewTransactionModal";
import { Container, HeaderContent, NewTransactionButton } from "./styles";
function Header() {
  const [openModal, setOpenModal] = useState(false);
  const toggle = () => {
    setOpenModal(!openModal);
  };
  return (
    <Container>
      <HeaderContent>
        <img src={logo} alt="" />
        <NewTransactionButton onClick={() => setOpenModal(true)}>
          Nova transação
        </NewTransactionButton>
        <NewTransactionModal open={openModal} toggle={toggle} />
      </HeaderContent>
    </Container>
  );
}

export default Header;
