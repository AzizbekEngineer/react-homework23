import React from "react";
import { increaseAmount, remove } from "../../context/slice/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { decreaseAmount } from "../../context/slice/CartSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import "./cartWrapper.scss";
import { like } from "../../context/slice/wishlistSlice";
import { NavLink } from "react-router-dom";

const CartWrapper = ({ cartData }) => {
  const wishlistData = useSelector((state) => state.wishlist.value);
  console.log(cartData);
  const dispatch = useDispatch();
  const cartItems = cartData?.map((el) => (
    <div className="cart__item" key={el.id}>
      <div className="cart__img">
        <NavLink to={`/product/${el.id}`}>
          <img src={el.images[0]} width={100} height={100} alt="" />
        </NavLink>
        <div className="cart__item__info">
          <h4>{el.title}</h4>
          <p>{el.category}</p>
        </div>
      </div>
      <div className="cart__buttons">
        <button
          disabled={el.amount <= 1}
          onClick={() => dispatch(decreaseAmount(el))}
        >
          -
        </button>
        <span>{el.amount}</span>
        <button onClick={() => dispatch(increaseAmount(el))}>+</button>
        <span>{el.amount * el.price}</span>
      </div>
      <div className="remove__btns">
        <button
          className="product__item__heart-icon"
          onClick={() => dispatch(like(el))}
        >
          {wishlistData.some((item) => item.id === el.id) ? (
            <FaHeart color="crimson" />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <button onClick={() => dispatch(remove(el))}>Remove</button>
      </div>
    </div>
  ));
  return (
    <div className="cart container">
      <h2>CartWrapper</h2>
      <div className="cart__items">
        <div className="cart__products">{cartItems}</div>
        <div className="cart__infos">
          <div className="cart__coupon">
            <h3>Have coupon?</h3>
            <form action="" className="cart__coupon__form">
              <input type="text" placeholder="Coupon code" />
              <button>Apply</button>
            </form>
          </div>
          <div className="cart__price">
            <div className="cart__price__cards">
              <div className="cart__price__card">
                <p>Total price</p>
                <span>$329.00</span>
              </div>
              <div className="cart__price__card">
                <p>Total price</p>
                <span>$329.00</span>
              </div>
              <div className="cart__price__card">
                <p>Total price</p>
                <span>$329.00</span>
              </div>
            </div>
            <hr />
            <div className="cart__price__card__bottom">
              <p>Total price</p>
              <span>$329.00</span>
            </div>
            <button className="cart__price__make">Make Purchase</button>
            <button className="cart__price__back">Back to shop</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartWrapper;
