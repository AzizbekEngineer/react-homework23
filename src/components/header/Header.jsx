import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import "./Header.scss";
// useSelector - input

const Header = () => {
  let count = useSelector((state) => state.counter.value);
  let wishlistCount = useSelector((state) => state.wishlist.value).length;
  let cartCount = useSelector((state) => state.cart.value).length;
  return (
    <header className="header container">
      <h2 className="header__logo">
        <NavLink className="header__link header__logo__link" to={"/"}>
          RichEcom
        </NavLink>
      </h2>
      <form className="header__form">
        <input
          className="header__input"
          type="search"
          placeholder="Search..."
        />
        <select className="header__select" name="" id="">
          <option value="">All type</option>
          <option value="">Laptop</option>
          <option value="">Telephone</option>
        </select>
        <IoIosSearch className="header__search__icon" />
      </form>
      <div className="header__list">
        <NavLink className="header__link">Sign in</NavLink>
        <NavLink className="header__link" to={"/wishlist"}>
          <span>Wishlist</span>
          {wishlistCount ? <sup>{wishlistCount}</sup> : <></>}
        </NavLink>
        <NavLink className="header__link" to={"/cart"}>
          <span>Cart</span>
          {cartCount ? <sup>{cartCount}</sup> : <></>}
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
