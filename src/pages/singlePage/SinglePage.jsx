import axios from "../../api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./singlePage.scss";

const SinglePage = () => {
  const [product, setProduct] = useState(null);
  console.log(product);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="productSingle container">
      <div className="productSingle__card">
        <div className="productSingle__card__img">
          <img src={product?.images[0]} alt="" />
        </div>
        <div className="productSingle__card__info">
          <h3>{product?.title}</h3>
          <h4>{product?.category}</h4>
          <p>{product?.description}</p>
          <p>{product?.price}$</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
