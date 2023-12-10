import { ChangeEvent, FC, InputHTMLAttributes } from "react";
import withLogging from "../hoc/withLogging";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ value, onChange, ...restProps }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <input type="text" value={value} onChange={handleChange} {...restProps} />
  );
};

const InputWithLogging = withLogging(Input, "Input");

export default InputWithLogging;

// export default Input;
