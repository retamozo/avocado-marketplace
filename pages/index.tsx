import React, { FunctionComponent } from "react";
import fetch from "isomorphic-unfetch";
import { API_ROUTE } from "@utils";
import { AvolcadoList, Cart } from "@components";

// This is an inefficient apporach
// export async function getServerSideProps() {
//   const { data: productList }: TAPIAvoResponse = await fetch(
//     ` ${API_ROUTE.BASE}`
//   ).then((data) => data.json());

//   return {
//     props: {
//       productList,
//     }, // will be passed to the page component as props
//   };
// }

export async function getStaticProps() {
  const { data: productList }: TAPIAvoResponse = await fetch(
    `${API_ROUTE.BASE}`
  ).then((data) => data.json());

  return {
    props: {
      productList,
    }, // will be passed to the page component as props
  };
}

const Index: FunctionComponent<{ productList: TProduct[] }> = ({
  productList,
}) => {
  return (
    <>
      <AvolcadoList products={productList} />
      <Cart />
    </>
  );
};

export default Index;
