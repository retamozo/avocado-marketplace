import React from "react";
import Link from "next/link";
import Image from "next/image";
import avocadoLogo from "public/images/avocado_base.svg";
import closeIcon from "public/icons/close.svg";
import BasketLogo from "public/images/shopping-basket.svg";
import { useCart, useCartMutations } from "store";

const NavBar = () => {
  const { itemsQuantity, open } = useCart();

  const { openCart } = useCartMutations();

  return (
    <header className="container mx-auto px-4 bg-center m-4 h-14">
      <nav className="border-b-neutrals-300 mx-4 w-auto">
        <menu className="h-1/2 mx-auto bg-center flex justify-between relative">
          {open ? (
            <Image
              src={closeIcon}
              alt="Avocado Icon"
              width={35}
              height={35}
              onClick={() => openCart(false)}
            />
          ) : (
            <Link href="/" passHref>
              <Image
                src={avocadoLogo}
                alt="Avocado Icon"
                width={35}
                height={35}
              />
            </Link>
          )}
          <h1 className="text-xl md:text-2xl decoration-4 hover:bg-neutrals-300 rounded leading">
            The avocado store
          </h1>
          <Image
            src={BasketLogo}
            alt="Basket Button"
            width={35}
            height={35}
            role="button"
            onClick={() => openCart(!open)}
          />
          {itemsQuantity && itemsQuantity > 0 ? (
            <span className="absolute bottom-0 -right-1 bg-red-default p-1 rounded-full h-7 w-7 text-center font-bold">
              {itemsQuantity > 9 ? "+9" : itemsQuantity}
            </span>
          ) : null}
        </menu>
      </nav>
    </header>
  );
};

export default NavBar;
