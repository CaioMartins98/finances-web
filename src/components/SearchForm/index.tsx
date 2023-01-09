import React from "react";
import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";

function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Buscar transações" />
    </SearchFormContainer>
  );
}

export default SearchForm;
