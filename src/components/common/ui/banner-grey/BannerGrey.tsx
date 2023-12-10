import withLogging from "../../hoc/withLogging";
import "./BannerGrey.css";

const BannerGrey = () => {
  return (
    <div className="banner_grey">
      <img src="/logo-gray.svg" />
    </div>
  );
};

const BannerGreyWithLogging = withLogging(BannerGrey, "BannerGrey");

export default BannerGreyWithLogging;

// export default BannerGrey;
