import { ChangeEvent, FC, InputHTMLAttributes } from "react";
import Input from "../input/Input";
import "./Search.css";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search: FC<SearchProps> = ({ onChange, value, ...props }) => {
  return (
    <div className="search_container">
      <img src="/search-icon.svg" alt="search icon" />
      <Input
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
        {...props}
      />
    </div>
  );
};

export default Search;

// export default Search;
