import React, { useEffect, useState } from "react"; //api호출을 하기위해서 useEffect를 사용한다
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:4000/products/${id}`; //id가 변하는 값이이므로 백틱을 사용
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []); //useEffect는 함수랑 배열을 받는다, productDetail보여주는 api를 호출하는 함수
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />{" "}
          {/* product에 이미지가 있다면 이미지를 보여준다 */}
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
