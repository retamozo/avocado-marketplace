import Link from "next/link";
import React, { FunctionComponent } from "react";

const Avocado: FunctionComponent<TProduct> = ({
  attributes,
  id,
  image,
  name,
  price,
  sku,
}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/product/${id}`} passHref>
        <img className="p-8 rounded-t-lg" src={image} alt="product image" />
      </Link>
      <div className="px-5 pb-5">
        <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h3>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
          {sku}
        </span>
        <div className="flex items-center mt-2.5 mb-5">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {attributes.description}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {price}
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Avocado;
