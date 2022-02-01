import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { logoutCall } from "../redux/apiCalls";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  let history = useHistory();
  const handleLogout = (e) => {
    e.preventDefault();
    logoutCall(dispatch);
    history.push("/");
  };

  return (
    <Container>
      <Wrapper>
        <Center>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <Logo>taapsi.</Logo>
          </Link>
        </Center>
        <Left>
          {/* <Language>EN</Language> */}
          {/* <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer> */}
          <Link
            style={{ textDecoration: "none" }}
            style={{ textDecoration: "none" }}
            to="/products/men"
          >
            <MenuItem>MEN</MenuItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/products/women">
            <MenuItem>WOMEN</MenuItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/products/shoes">
            <MenuItem>SHOES</MenuItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/products/jackets">
            <MenuItem>JACKETS</MenuItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/products/sweatshirt">
            <MenuItem>SWEATSHIRTS</MenuItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/products/sweater">
            <MenuItem>SWEATERS</MenuItem>
          </Link>
        </Left>
        <Right>
          {!user ? (
            <>
              <MenuItem>
                <Link style={{ textDecoration: "none" }} to="/register">
                  REGISTER
                </Link>
              </MenuItem>
              <MenuItem>
                <Link style={{ textDecoration: "none" }} to="/login">
                  LOGIN
                </Link>
              </MenuItem>
            </>
          ) : (
            <MenuItem onClick={(e) => handleLogout(e)}>
              <Link style={{ textDecoration: "none" }} to="/login">
                LOGOUT
              </Link>
            </MenuItem>
          )}

          <Link
            style={{ textDecoration: "none" }}
            style={{ textDecoration: "none" }}
            to="/cart"
          >
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
