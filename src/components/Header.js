import { useSelector } from "react-redux";
import classes from "./Header.module.css";
import { useDispatch } from "react-redux";
import { authactions } from "../Store";

const Header = () => {
  const isauth = useSelector((state) => state.auth.isAuthanticated);
  const dispatch = useDispatch();
  const logouthandler = () => {
    dispatch(authactions.logout());
  };
  return (
    <header className={classes.header}>
      <h1> Author</h1>
      {isauth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logouthandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
