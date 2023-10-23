import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import store from "../store/store";
const Layout = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </Provider>
  );
};

export default Layout;
