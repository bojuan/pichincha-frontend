import { FC, useState } from "react";
import { InputSearchProps } from "./InputSearch.interfaces";
import "./InputSearch.css";

const InputSearch: FC<InputSearchProps> = ({
  placeholder = "Buscar",
  onSearch,
}) => {
  const [value, setValue] = useState("");

  return (
    <form
      className="search"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(value);
      }}
    >
      <button className="search__button" type="submit">
        Search
      </button>
      <input
        className="search__input"
        type="search"
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </form>
  );
};

export default InputSearch;
