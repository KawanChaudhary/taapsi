import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Add, Clear, Remove } from "@material-ui/icons";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import { userRequest } from "../requestMethod";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { decreaseQuantity, deleteCart, deleteProduct, increaseQuantity, totalPrice } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const KEY =
  "pk_test_51K328BSCltR2F1IxdUIxH13peb80zjNFENqqnXageyBM37FcrwpmAjDcqAkV9g0pmMTOnJIGShwv8Fo4NNvW2AGT00rcO30J4e";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })};
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  margin-bottom: 15px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding; 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })};
`;

const Text = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  border: 1px solid lightgray;
  // border-radius: 10px;
  margin: 10px 10px 10px 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
  margin-top: 15px;
`;

const Image = styled.img`
  width: 160px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Name = styled.span``;

const Id = styled.span``;

const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const Size = styled.span``;

const PriceDetails = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ flexDirection: "row", justifyContent: "space-between" })};
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({ margin: "0" })};
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "15px 15px" })};
`;

const FinalPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ margin: "15px 15px" })};
`;

const Hr = styled.div`
  background-color: #eee;
  border: none;
  height: 2px;
`;

const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px 20px 0 20px;
  margin-top: 15px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "550"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryFinalPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;

  ${mobile({ marginBottom: "20px" })};
`;

const Delete = styled.span`
  top: 0;
  margin: 20px 20px 0 0;
  right: 0;
  position: absolute;
  cursor: pointer;
  color: #b92e34;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  // const cart = null
  const [stripeToken, setStripeToken] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    dispatch(totalPrice());
  }, [cart, dispatch]);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        history.push("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleClearCart= () => {
    dispatch(deleteCart());
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/">
            <TopButton>Continue Shopping</TopButton>
          </Link>
          <TopTexts>
            {/* <Text>Shopping Bag (2)</Text>
            <Text>Your Wishlist (0)</Text> */}
            <TopButton onClick={()=>handleClearCart()}>Clear Cart ({cart.quantity})</TopButton>
          </TopTexts>
          <StripeCheckout
            name="taapsi."
            image="https://avatars.githubusercontent.com/u/1486366?v=4"
            billingAddress
            shippingAddress
            description={`Your total is ₹ ${cart.total}`}
            amount={cart.total * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <TopButton type="filled">Checkout Now</TopButton>
          </StripeCheckout>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product key={product._id}>
                <Delete onClick={() => handleDelete(product._id)}>
                  <Clear />
                </Delete>
                <ProductDetails>
                  <Image src={product.img} />
                  <Details>
                    <Name>
                      <b>Product: </b> {product.title}
                    </Name>
                    <Id>
                      <b>ID: </b>
                      {product._id}
                    </Id>
                    <Color color={product.color} />
                    <Size>
                      <b>Size:</b> {product.size}
                    </Size>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductAmountContainer>
                    <Remove onClick={() => dispatch(decreaseQuantity(product._id))} />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Add onClick={() => dispatch(increaseQuantity(product._id))} />
                  </ProductAmountContainer>
                  <FinalPrice>₹ {product.price * product.quantity}</FinalPrice>
                </PriceDetails>
                <Hr />
              </Product>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Total Items: </SummaryItemText>
              <SummaryFinalPrice>{cart.quantity}</SummaryFinalPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryFinalPrice>₹ {cart.total}</SummaryFinalPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryFinalPrice>₹ 99</SummaryFinalPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryFinalPrice>₹ -99</SummaryFinalPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryFinalPrice>
                ₹ {cart.total || console.log(cart.total)}
              </SummaryFinalPrice>
            </SummaryItem>
            <StripeCheckout
              name="taapsi."
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is ₹ ${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>Checkout Now</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Cart;
