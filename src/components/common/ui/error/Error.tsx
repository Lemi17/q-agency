import { FC } from "react";
import "./Error.css";
import Heading from "../../text/heading/Heading";
import Paragraph from "../../text/paragraph/Paragraph";
import BannerGrey from "../banner-grey/BannerGrey";
import withLogging from "../../hoc/withLogging";

const Error: FC<{ message: string }> = ({ message }) => {
  return (
    <div className="error_page">
      <div style={{ height: "300px", marginBottom: "32px" }}>
        <BannerGrey />
      </div>
      <Heading level={1}>Ooops Something went wrong...</Heading>
      <Paragraph>{message}</Paragraph>
    </div>
  );
};

const ErrorWithLogging = withLogging(Error, "Error");

export default ErrorWithLogging;

// export default Error;
