import { Outlet } from "react-router";
import HeaderMenu from "./headerMenu";

export default function Layout() {
  return (
    <>
      <HeaderMenu />
      <Outlet />
    </>
  );
}
