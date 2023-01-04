import React from "react";
import Header from "../../components/Header";
import SearchForm from "../../components/SearchForm";
import Summary from "../../components/Summary";
import Table from "../../components/Table";

function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <SearchForm />
      <Table />
    </div>
  );
}

export default Transactions;
