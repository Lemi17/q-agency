import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Posts from "./pages/Posts/Posts";
import Layout from "./components/layout/Layout";
import Post from "./pages/Post/Post";
import NotFound from "./pages/404/NotFound";
import withLogging from "./components/common/hoc/withLogging";
import AppContextComponentWithLogging from "./shared/state/AppContextComponent";

const App = () => {
  return (
    <AppContextComponentWithLogging>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="post/:id" element={<Post />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContextComponentWithLogging>
  );
};

const AppWithLogging = withLogging(App, "App");

export default AppWithLogging;

// export default App;
