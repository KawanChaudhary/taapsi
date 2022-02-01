import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 35vh;
  background-color: #ffffcc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  letter-spacing: 2px;
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 200;
  margin-bottom: 20px;
  letter-spacing: 1px;
  ${mobile({textAlign: "center"})};
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  ${mobile({width: "80%"})};
`;

const Input = styled.input`
  border: 1px solid lightgray;
  background-color: white;
  // border: none;
  flex: 8;
  padding-left: 20px;
  margin-right: 5px;
`;

const Button = styled.button`
  cursor: pointer;
  flex: 1;
  border: none;
  background-color: #0099CC;
  color: white;
  transition: all 0.8s ease;
  &:hover{
    background-color: #0099cc;
    transform: scale(1.05);
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favourite products.</Description>
      <InputContainer>
        <Input placeholder="Your E-mail" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
