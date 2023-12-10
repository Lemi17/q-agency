import { ReactNode, HTMLProps, FC } from "react";
import "./Paragraph.css";
import withLogging from "../../hoc/withLogging";

type ParagraphProps = {
  className?: string;
  children: ReactNode;
} & HTMLProps<HTMLParagraphElement>;

const Paragraph: FC<ParagraphProps> = ({ className, children, ...rest }) => {
  return (
    <p className={className} {...rest}>
      {children}
    </p>
  );
};

const ParagraphWithLogging = withLogging(Paragraph, "Paragraph");

export default ParagraphWithLogging;

// export default Paragraph;
