import { Outlet } from "react-router-dom";
import DropdownMenu from "../components/DropDownMenu";
import KeyboardModel from "../components/Keyboard";

const Layout = () => {
  return (
    <>
      <DropdownMenu />
      <Outlet />
      <KeyboardModel />
    </>
  );
};

export default Layout;
