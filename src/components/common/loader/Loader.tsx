import withLogging from "../hoc/withLogging";
import "./Loader.css";

const Loader = () => {
  return <span className="loader"></span>;
};

const LoaderWithLogging = withLogging(Loader, "Loader");

export default LoaderWithLogging;

// export default Loader;
