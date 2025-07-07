import { Header } from "./components/index.js";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
