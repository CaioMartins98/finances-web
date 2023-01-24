import React from "react";
import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";
interface SearchProps {
  searchTerm: string;
  setSearchTerm: (value: any) => void;
}
function SearchForm({ searchTerm, setSearchTerm }: SearchProps) {
  return (
    <SearchFormContainer>
      <input
        type="text"
        placeholder="Buscar transações por descrição ou categoria "
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          console.log(e.target.value);
        }}
      />
      <MagnifyingGlass size={20} />
    </SearchFormContainer>
  );
}

export default SearchForm;
