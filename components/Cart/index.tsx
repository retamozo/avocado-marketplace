import { useCart, useCartMutations } from "@store";
import React, { useEffect } from "react";
import { Icon, Table } from "semantic-ui-react";
import Image from "next/image";
import { Button } from "semantic-ui-react";
import styles from "./Cart.module.css";
import { CartItem } from "store/CartProvider/types";

const Cart = () => {
  const { open, itemsQuantity, items } = useCart();

  const { addToCart, removeItem } = useCartMutations();

  useEffect(() => {
    document.body.style.overflowY = open ? "hidden" : "";
  }, [open]);

  return open ? (
    <article
      className={`absolute top-0 w-full px-8 bg-center bg-neutrals-0 mt-4 ${
        open ? styles.cartHeight : ""
      }`}
    >
      {itemsQuantity === 0 ? (
        <div className="flex justify-center items-center h-screen text-center">
          <div>
            <h2> No items added 🥑</h2>
            <p>Start shopping now, you gotta do this one for me, Billy</p>
          </div>
        </div>
      ) : (
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="2">Summary</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {Object.values(items).map(({ item, quantity }) =>
              quantity === 0 ? null : (
                <Table.Row key={item.id}>
                  <Table.Cell>
                    <div className="flex align-middle justify-between">
                      <h3 className="m-0 leading-loose">{item.name}</h3>
                      <Image
                        src={item.image}
                        height={30}
                        width={30}
                        className="mb-3"
                        aria-label="Image of Item In Cart"
                      />
                      <Icon
                        name="trash"
                        aria-label="Delete Item"
                        className="!mt-1 !leading-loose"
                        color="red"
                        onClick={() => removeItem({ id: item.id, all: true })}
                      />
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex justify-between">
                      <p className="leading-loose">
                        {quantity} x {item.price}
                      </p>
                      <div className="mx-2">
                        <Button
                          icon="minus"
                          size="mini"
                          disabled={quantity <= 1}
                          onClick={() => removeItem({ id: item.id })}
                        />
                        <Button
                          icon="plus"
                          size="mini"
                          onClick={() => addToCart(item, quantity + 1)}
                        />
                      </div>
                      <p className="leading-relaxed font-bold text-lg">
                        $ {(quantity * item.price).toFixed(2)}
                      </p>
                    </div>
                  </Table.Cell>
                </Table.Row>
              )
            )}
          </Table.Body>
        </Table>
      )}
    </article>
  ) : null;
};

export default Cart;
