import React from "react";
import styled from "styled-components";
import ProductFilter from "./../../Components/ProductsPage/ProductFilter";
import Productlist from "../../Components/ProductsPage/ProductList.js";

const Products = () => {
  return (
    <Wrapper>
      <ProductFilter />
      <Productlist />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 3px solid black; */
  padding: 0rem 3rem;
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    padding: 0rem 1rem;
  }
`;
export default Products;
