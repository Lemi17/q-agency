import { ReactNode, HTMLProps, FC } from "react";
import withLogging from "../../hoc/withLogging";

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: ReactNode;
} & HTMLProps<HTMLHeadingElement>;

const Heading: FC<HeadingProps> = ({ level, className, children, ...rest }) => {
  const Tag = `h${level}` as const;

  return (
    <Tag className={className} {...rest}>
      {children}
    </Tag>
  );
};

const HeadingWithLogging = withLogging(Heading, "Heading");
export default HeadingWithLogging;

// export default Heading;
