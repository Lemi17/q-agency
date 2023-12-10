import { FC } from "react";
import "./NotFound.css";
import Heading from "../../components/common/text/heading/Heading";
import Paragraph from "../../components/common/text/paragraph/Paragraph";
import BannerGrey from "../../components/common/ui/banner-grey/BannerGrey";
import withLogging from "../../components/common/hoc/withLogging";

const NotFound: FC = () => {
  return (
    <div className="not_found_page">
      <div style={{ height: "300px", marginBottom: "32px" }}>
        <BannerGrey />
      </div>
      <Heading level={1}>404 - Not Found</Heading>
      <Paragraph>
        Sorry, the page you are looking for might not exist.
      </Paragraph>
    </div>
  );
};

const NotFoundWithLogging = withLogging(NotFound, "NotFound");

export default NotFoundWithLogging;

// export default NotFound;
