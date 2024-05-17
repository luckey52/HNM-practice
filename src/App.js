import logo from "./logo.svg";
import "./App.css";
import Homepage from "./page/Homepage";
import Aboutpage from "./page/Aboutpage";
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false); //true면 로그인이 됨
  useEffect(() => {
    console.log("aaa", authenticate);
  }, [authenticate]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        //setAuthenticate함수를 props로 보내는 것
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
        //제품상세를 클릭했을때, 로그인 유무확인을 위해
      </Routes>
    </div>
  );
}

export default App;
