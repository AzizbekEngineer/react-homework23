import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../context/slice/wishlistSlice";
import { BsCart3 } from "react-icons/bs";
import { add } from "../../context/slice/CartSlice";
import { NavLink } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.value);
  return (
    <div className="product__item">
      <NavLink to={`/product/${product.id}`}>
        <img src={product.images[0]} width={200} alt="" />
      </NavLink>

      <h3>{product.title}</h3>
      <div className="product__item__btns">
        <button
          className="product__item__heart"
          onClick={() => dispatch(like(product))}
        >
          {wishlistData.some((el) => el.id === product.id) ? (
            <FaHeart color="crimson" />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <button
          className="product__item__cart"
          onClick={() => dispatch(add(product))}
        >
          <span>Add to cart</span>
          <BsCart3 />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
