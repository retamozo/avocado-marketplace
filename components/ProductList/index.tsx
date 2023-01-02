import { CardItem } from "@components";
import { FunctionComponent, createElement, ReactNode } from "react";
import { useCartMutations } from "store";

type ProductListProps = {
  products: TProduct[];
};

const ProductList: FunctionComponent<ProductListProps> = ({ products }) => {
  const { addToCart } = useCartMutations();

  return (
    <article className="flex flex-wrap justify-center px-4 bg-center">
      {products &&
        !!products.length &&
        products.map((card) => {
          return (
            <CardItem
              key={card.id}
              onClick={() => addToCart({ ...card })}
              {...card}
            />
          );
        })}
    </article>
  );
};

export default ProductList;
