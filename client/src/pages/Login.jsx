import styled from "styled-components";
import { mobile } from "../responsive";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  border: 2px solid teal;
  ${mobile({ width: "75%" })};
`;

const Title = styled.h1`
  letter-spacing: 3px;
  font-size: 25px;
  font-weight: 600;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  padding: 10px;
  font-size: 15px;
  flex: 1;
  mid-width: 40%;
  margin: 15px 10px 0 10px;
  outline: none;
`;

const Button = styled.button`
  margin: 20px 0 10px 0;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 500;
  width: 100%;
  border: none;
  padding: 12px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  &:hover {
    background-color: teal;
    color: white;
  }
  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
`;

const Error = styled.span`
color: red;
`

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <>
      <Navbar />
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          {/* <Input placeholder="E-Mail" /> */}
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} disabled={isFetching}>
            LOGIN
          </Button>
          {/* {error && <Error>Something went wrong!</Error>} */}
          <Link>FORGOT PASSWORD?</Link>
          <Link href="/register">CREATE AN ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
    <Footer />
  </>
  );
};

export default Login;
