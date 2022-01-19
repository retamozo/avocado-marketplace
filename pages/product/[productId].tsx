import React, { FunctionComponent } from "react";
import fetch from "isomorphic-unfetch";
import { GetStaticProps } from "next";
import { API_ROUTE } from "@utils";

export const getStaticPaths = async () => {
  const req = await fetch(API_ROUTE.BASE);
  const { data: prodList }: TAPIAvoResponse = await req.json();
  const paths = prodList.map(({ id }) => ({
    params: {
      productId: id,
    },
  }));
  return {
    paths,
    // incremental static generation
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const req = await fetch(`${API_ROUTE.BASE}/${params.productId}`);
  const res = await req.json();
  return {
    props: {
      product: res,
    },
  };
};

const ProductItem: FunctionComponent<{ product: TProduct }> = ({ product }) => {
  return (
    <div>
      <p>{product?.attributes?.description || ""}</p>
      <img src={product?.image || ""} />
      <strong>{product?.price || ""}</strong>
    </div>
  );
};

export default ProductItem;
