import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import RouteScrollTop from "../components/RouteScrollTop"; 

/* Pages */
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import YouthAmbassador from "../pages/YouthAmbassador";

/* Academy Pages */
import About from "../pages/academy/about";
import History from "../pages/academy/history";
import Liberia from "../pages/academy/liberia";
import Videos from "../pages/academy/videos";
import Blog from "../pages/academy/blog";
import BlogDetail from "../pages/academy/BlogDetail";

/* Foundation Pages */
import Founder from "../pages/foundation/founder";
import Mission from "../pages/foundation/mission";
import Impact from "../pages/foundation/impact";
import Board from "../pages/foundation/board";
import Contact from "../pages/foundation/contact";

export default function AppRoutes() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
       <RouteScrollTop />

      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          {/* Academy */}
          <Route path="/academy/about" element={<About />} />
          <Route path="/academy/history" element={<History />} />
          <Route path="/academy/liberia" element={<Liberia />} />
          <Route path="/academy/videos" element={<Videos />} />
          <Route path="/academy/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/youth-ambassador" element={<YouthAmbassador />} />

          {/* Foundation */}
          <Route path="/foundation/founder" element={<Founder />} />
          <Route path="/foundation/mission" element={<Mission />} />
          <Route path="/foundation/impact" element={<Impact />} />
          <Route path="/foundation/board" element={<Board />} />
          <Route path="/foundation/contact" element={<Contact />} />

        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}