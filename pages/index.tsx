import React, { FunctionComponent } from "react";
import fetch from "isomorphic-unfetch";
import { API_ROUTE } from "@utils";
import { Avocado } from "@components";

export async function getStaticProps() {
  const { data: productList }: TAPIAvoResponse = await fetch(
    ` ${API_ROUTE.BASE}`
  ).then((data) => data.json());

  return {
    props: {
      productList,
    }, // will be passed to the page component as props
  };
}

const Index: FunctionComponent<TProduct[]> = ({ productList }) => {
  console.log("productList", productList);
  return (
    <div>
      <h1 className="text-3xl font-bold bg-gren-default">Hello world!</h1>
      <p>This is the root page</p>
      {productList.map((card) => (
        <Avocado key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Index;
