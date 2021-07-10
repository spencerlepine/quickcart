import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import useCart from "../../context/CartContext/CartContext";
import QuickCartLogo from "../../images/QuickCart-Logo.png";
import Sidebar from "./Sidebar/Sidebar";
import useStyles from "./styles.js";

const Navbar = () => {
  const classes = useStyles();
  const params = useParams();

  const [menuOpen, setMenuOpen] = useState(false);

  const { allCartItems } = useCart();
  const cartLength = allCartItems.length;

  const toggleMenu = (manualToggle = null) => {
    setMenuOpen((prevState) => (
      manualToggle === null ? !prevState : manualToggle
    ));
  };

  // Close the menu when the page changes
  useEffect(() => {
    setMenuOpen(false);
  }, [params])

  return (
    <>
      <div className={classes.navBar}>
        <div className={classes.navbarContainer} >
          <div className={classes.menuToggleBtn}>
            {menuOpen ? (
              <CloseIcon fontSize="large" onClick={() => toggleMenu(false)} />
            ) : (
              <MenuIcon fontSize="large" onClick={() => toggleMenu(true)} />
            )}
          </div>

          {menuOpen && <Sidebar toggleMenu={toggleMenu} />}

          <Link
            className={classes.logoLink}
            to="/"
            onClick={() => toggleMenu(false)}
          >
            <img src={QuickCartLogo} alt="QuickCart Logo"></img>
          </Link>

          <Link
            className={classes.link}
            to="/cart"
            onClick={() => toggleMenu(false)}
          >
            <div className={classes.cartLink}>
              <ShoppingCartIcon fontSize="large" color="action" />
              {cartLength > 0 && <p>{cartLength}</p>}
            </div>
          </Link>
        </div>
      </div>
      <div className={classes.navBarSpacing}></div>
    </>
  );
};

export default Navbar;
