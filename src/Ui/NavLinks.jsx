import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <nav className="topNav hidden md:block">
      <ul className="capitalize block md:flex md:gap-2 lg:gap-4 mx-3 text-newgray-400">
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/product">product</NavLink>
        </li>
        <li>about us</li>
        <li>contact</li>
      </ul>
    </nav>
  );
}
