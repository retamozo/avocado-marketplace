import Link from "next/link";
import Image from "next/image";
import React, { FunctionComponent } from "react";
import { Icon, Input, Label } from "semantic-ui-react";

type BaseCardProps = TProduct & {
  onAddItem: () => void;
  onRemoveItem: (id: string) => void;
  hasMany: boolean;
  quantity: number;
};

const BaseCardItem: FunctionComponent<BaseCardProps> = ({
  name,
  image,
  id,
  price,
  onAddItem,
  onRemoveItem,
  hasMany,
  quantity,
}) => (
  <div className="w-full max-w-sm rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
    <Link href={`/product/${id}`} passHref>
      <div className="px-8 py-4 rounded-t-lg">
        <Image src={image} alt="Avocado image" width={300} height={300} />
      </div>
    </Link>
    <div className="px-3 py-2">
      <p className="font-bold text-xl mb-2">{name}</p>
    </div>
    <div className="flex items-center justify-between p-3 bg-neutrals-100">
      <span className="text-3xl font-bold text-gray-900">${price}</span>
      {hasMany ? (
        <Input labelPosition="right" type="text" placeholder="Amount">
          <Label onClick={onAddItem} basic size="mini">
            <Icon name="plus" className="!m-0" />
          </Label>
          <input
            className="w-9 !px-2 !text-center"
            readOnly
            value={quantity}
            alt="item quantity"
          />
          <Label onClick={() => onRemoveItem(id)} basic size="mini">
            <Icon name="minus" className="!m-0" />
          </Label>
        </Input>
      ) : (
        <button
          onClick={onAddItem}
          className="block bg-gren-light text-white b hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to cart
        </button>
      )}
    </div>
  </div>
);

export default BaseCardItem;
