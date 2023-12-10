import { ComponentType, FC, memo } from "react";

export interface WithLoggingProps {
  componentName?: string;
  message?: string;
}

const defaultMessage = "Hello from";

const withLogging = <P extends object>(
  WrappedComponent: ComponentType<P>,
  componentName: string
) => {
  const WithLogging: FC<P & WithLoggingProps> = (props) => {
    console.log(
      `${props.message || defaultMessage} ${
        props.componentName || componentName
      }`
    );

    return <WrappedComponent {...props} />;
  };

  return memo(WithLogging);
};

export default withLogging;
