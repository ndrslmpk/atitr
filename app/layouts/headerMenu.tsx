import styles from "./headerMenu.module.css";
import { NavLink, Outlet } from "react-router";

export default function HeaderMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.linkWrapper}>
        <NavLink to={"contacts"}>Contacts</NavLink>
        <NavLink to={"tasks"}>Tasks</NavLink>
      </div>
    </div>
  );
}
