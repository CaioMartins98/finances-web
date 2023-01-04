import React from "react";
import logo from "../../assets/logo.png";
import NewTransactionModal from "../NewTransactionModal";
import { Container, HeaderContent } from "./styles";
function Header() {
  return (
    <Container>
      <HeaderContent>
        <img src={logo} alt="" />
        <NewTransactionModal />
      </HeaderContent>
    </Container>
  );
}

export default Header;
