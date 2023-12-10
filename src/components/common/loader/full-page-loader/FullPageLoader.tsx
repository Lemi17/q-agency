import "./FullPageLoader.css";
import Loader from "../Loader";
import withLogging from "../../hoc/withLogging";

const FullPageLoader = () => {
  return (
    <div className="full_page_loader">
      <Loader />
    </div>
  );
};

const FullPageLoaderWithLogging = withLogging(FullPageLoader, "FullPageLoader");

export default FullPageLoaderWithLogging;

// export default FullPageLoader;
