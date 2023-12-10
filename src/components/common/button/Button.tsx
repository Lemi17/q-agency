import { ReactNode, ButtonHTMLAttributes, FC } from "react";
import withLogging from "../hoc/withLogging";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...rest
}) => {
  const buttonStyles = {
    primary: {
      backgroundColor: "var(--primary-color)",
      color: "#fff",
    },
    secondary: {
      backgroundColor: "var(--secondary-color)",
      color: "#fff",
    },
    tertiary: {
      backgroundColor: "transparent",
      color: "#000",
    },
  };

  return (
    <button
      style={{
        ...buttonStyles[variant],
        padding: "10px",
        borderRadius: "8px",
        cursor: "pointer",
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

const ButtonWithLogging = withLogging(Button, "Button");

export default ButtonWithLogging;

// export default Button;
