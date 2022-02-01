import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection: "column"})};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display: "none"})};
`;

const Title = styled.h1`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItems = styled.li`
  cursor: pointer;
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor: "#fff8f8"})};
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #${(props) => props.color};
    transform: scale(1.1);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Payment = styled.img`
  width: 50%;
    
  ${mobile({display: "block", margin: "0 auto"})};
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>taapsi.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          eius quo quidem consequuntur non deleniti, est incidunt ipsum ullam
          quaerat officiis nostrum soluta? Laboriosam laudantium inventore
          sequi? Commodi, eum dolorum!
        </Desc>
        <SocialContainer>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="CC3399">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItems>Man</ListItems>
          <ListItems>Cart</ListItems>
          <ListItems>Man Fashion</ListItems>
          <ListItems>Woman Fashion</ListItems>
          <ListItems>Accessories</ListItems>
          <ListItems>My Account</ListItems>
          <ListItems>Order Tracking</ListItems>
          <ListItems>Wishlist</ListItems>
          <ListItems>Wishlist</ListItems>
          <ListItems>Terms</ListItems>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        {/* <ContactItem>
          <Room style={{marginRight: "10px"}} />
          106/3, Shakti Vihar, Meethapur, Badarpur, Delhi-44
        </ContactItem> */}
        <ContactItem>
          <Phone style={{marginRight: "10px"}} />
          +91-965 004 58 86
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight: "10px"}} />
          kawanchaudhary@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
