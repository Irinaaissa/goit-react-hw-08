import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={css.auth}>
      <NavLink className={css.link} to="/register">
        <span className={css.text}> Register </span>
      </NavLink>
      <NavLink className={css.link} to="/login">
      <span className={css.text}> Log In </span>
      </NavLink>
    </div>
  );
}