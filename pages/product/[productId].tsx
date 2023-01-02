import React, { FunctionComponent } from "react";
import fetch from "isomorphic-unfetch";
import { GetStaticProps } from "next";
import { API_ROUTE } from "@utils";
import Image from "next/image";
import { Accordion, Table, Label, Icon } from "semantic-ui-react";
import { useCartMutations } from "store/CartProvider";

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

const ACCORDION_PANNEL = ({
  description,
  hardiness,
  shape,
  taste,
  sku,
}: TProductAttributes & { sku: string }) => [
  {
    key: "about_this_avocado",
    title: "Description",
    content: {
      content: <p>{description}</p>,
    },
  },
  {
    key: "more_info",
    title: "More details",
    content: {
      content: (
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="2">Attributes</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Sku</Table.Cell>
              <Table.Cell>{sku}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Shape</Table.Cell>
              <Table.Cell>{shape}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Hardiness</Table.Cell>
              <Table.Cell>{hardiness}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Taste</Table.Cell>
              <Table.Cell>{taste}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      ),
    },
  },
];

const ProductItem: FunctionComponent<{ product: TProduct }> = ({
  product: { attributes, id, image, name, price, sku },
}) => {
  const { addToCart } = useCartMutations();

  return (
    <article className="container mx-auto max-w-5xl">
      <div className="flex justify-between mx-6 flex-col md:flex-row">
        <div className="text-center">
          <Image src={image} height={300} width={300} />
        </div>
        <div className="md:flex flex-col justify-around  md:w-2/5">
          <h2 className="md:text-left">{name}</h2>
          <div className="flex justify-between">
            <span className="text-xl font-bold text-gray-900 text-center py-4">
              ${price}
            </span>
            <button
              onClick={() =>
                addToCart({ attributes, id, image, name, price, sku })
              }
              className="rounded bg-gren-light text-white hover:text-blue-800 visited:text-purple-600 font-semibold px-4"
            >
              <Icon name="cart" aria-label="Add to Cart" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="m-6">
        <Accordion
          defaultActiveIndex={0}
          panels={ACCORDION_PANNEL({ ...attributes, sku })}
        />
      </div>
    </article>
  );
};

export default ProductItem;
