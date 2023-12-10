import { Link } from "react-router-dom";
import "./Header.css";
import withLogging from "../../common/hoc/withLogging";
import Paragraph from "../../common/text/paragraph/Paragraph";

const Header = () => {
  return (
    <header className="header">
      <Link to={"/"} className="logo_link">
        <img src="/logo.webp" alt="q agency logo" />
      </Link>
      <div className="header_paragraph_wrapper">
        <Paragraph>Whatever the Q. We got the A</Paragraph>
        <span></span>
      </div>
    </header>
  );
};

const HeaderWithLogging = withLogging(Header, "Header");

export default HeaderWithLogging;

// export default Header;
