import React from "react";
import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Buscar transações" />
      <button>
        <MagnifyingGlass size={20} /> Buscar
      </button>
    </SearchFormContainer>
  );
}

export default SearchForm;
