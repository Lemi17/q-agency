import { FC } from "react";
import withLogging from "../common/hoc/withLogging";
import Header from "./header/Header";
import "./Layout.css";

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="content_wrapper">{children}</main>
    </div>
  );
};

const LayoutWithLogging = withLogging(Layout, "Layout");

export default LayoutWithLogging;

// export default Layout;
