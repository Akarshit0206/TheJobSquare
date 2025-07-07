import { BrowserRouter, Routes, Route } from "react-router";
import { Jobs, Companies, Favourates, Page404 } from "./pages/index.js";
import Layout from "./Layout.jsx";

function RoutingConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<Layout />>
          <Route path="" element=<Jobs /> />
          <Route path="companies" element=<Companies />>
            <Route path=":jobRole" element=<Companies /> />
          </Route>
          <Route path="applicants" element=<Favourates /> />
          <Route path="*" element=<Page404 /> />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default RoutingConfig;
