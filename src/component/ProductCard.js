import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div>
      <img src="item?.img" />
      <div>벨티드 트월 코트</div>
      <div>{item?.title}</div>
      <div>￦{item?.price}</div>
      <div>{item?.new == true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
