import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  //setAuthenticate함수 props로 받기
  const navigate = useNavigate(); //로그인후 메인홈페이지로 돌아가기 위해서
  const loginUser = (event) => {
    event.preventDefault(); //Form을 쓰게되면 event.preventDefault 사용은 필수!(로그인버튼 클릭되면 새로고침이 되는걸 막아줌)
    console.log("login user fuction issue");
    setAuthenticate(true); //setAuthenticate true로 바꾸기
    navigate("/"); //메인홈으로 돌아간다
  };
  return (
    //container는 가운데로 모아주는 기능을 한다
    <Container>
      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
