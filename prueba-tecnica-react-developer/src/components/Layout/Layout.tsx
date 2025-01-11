import { Outlet } from "react-router-dom";
import Header from "../Header";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <section>
      {/* <Header /> */}
      <Navbar />
      <main>
        <Outlet />
      </main>
    </section>
  );
};

export default Layout;
