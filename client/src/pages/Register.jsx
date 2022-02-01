import styled from "styled-components";
import { mobile } from "../responsive";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { register } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1633371805503-d53346ef5c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 30%;
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
  flex-wrap: wrap;
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
  margin: 20px 10px 0 0;
  outline: none;
`;

const Agreement = styled.span`
  padding: 2px;
  letter-spacing: 1px;
  font-size: 14px;
  margin: 20px 5px;
`;

const Button = styled.button`
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
`;

const Error = styled.span`
  color: red;
`;

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleRegister = (e) => {
    e.preventDefault();
    register(dispatch, { username, email, password });
  };

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <Input
              placeholder="E-Mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input placeholder="Confirm Password" />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>.
            </Agreement>
            <Button onClick={handleRegister} disabled={isFetching}>
              REGISTER
            </Button>
            {error && <Error>Something went wrong!</Error>}
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Register;
