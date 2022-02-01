import styled from "styled-components";
import Announcement from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Navbar from "../components/Announcement";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  ${mobile({ margin: "0 20px", display: "flex", flexDirection: "column" })};
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ margin: "0 0 5px 0" })};
`;

const Select = styled.select`
  padding: 10px 10px;
  margin-right: 20px;
  ${mobile({ margin: "5px 0" })};
`;

const Option = styled.option`
  padding: 10px;
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat.toUpperCase()} {cat == "men" && "Products"}{cat=="women" && "Products"}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option defaultValue>All Colours</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
            <Option>brown</Option>
            <Option>grey</Option>
          </Select>
          {cat !== "shoes" && <Select  name="size" onChange={handleFilters}>
            <Option defaultValue>All Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>}
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option defaultValue value="newest">
              Newest
            </Option>
            <Option value="dsc">Price-high to low</Option>
            <Option value="asc">Price-low to high</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
