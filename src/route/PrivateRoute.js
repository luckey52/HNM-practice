import React from "react";
import ProductDetail from "../page/ProductDetail";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ authenticate }) => {
  return authenticate == true ? <ProductDetail /> : <Navigate to="/login" />;
}; //로그인이 true라면 제품상세페이지를 보여주고, 아니라면 redirect(팅겨주다)로 로그이페이지를 보여주기
export default PrivateRoute;
