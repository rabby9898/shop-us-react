import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="flex justify-between p-5 shadow-xl">
        <div>
          <h3 className="text-3xl">Shop Tech</h3>
        </div>
        <ul className="flex gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-green-200 underline "
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-green-200 underline "
                  : ""
              }
            >
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-green-200 underline "
                  : ""
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
