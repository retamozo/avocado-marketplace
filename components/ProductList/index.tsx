import { CardItem } from "@components";
import { FunctionComponent, useCallback } from "react";
import { useCart, useCartMutations } from "store";

type ProductListProps = {
  products: TProduct[];
};

const ProductList: FunctionComponent<ProductListProps> = ({ products }) => {
  const { addToCart, removeItem } = useCartMutations();
  const { items } = useCart();
  return (
    <article className="flex flex-wrap justify-center px-4 bg-center">
      {products &&
        !!products.length &&
        products.map((card) => (
          <CardItem
            key={card.id}
            onAddItem={() => addToCart(card)}
            onRemoveItem={(id) => removeItem({ id })}
            hasMany={items?.[card.id]?.quantity > 0}
            quantity={items?.[card.id]?.quantity}
            {...card}
          />
        ))}
    </article>
  );
};

export default ProductList;
