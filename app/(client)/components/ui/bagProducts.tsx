"use client";

import { useEffect, useState } from "react";
import getProductData from "../../actions/product";
import { useRouter } from "next/navigation";

interface BagProductDetails {
  id: string;
  size: string;
  quantity: number;
}

interface ProductData {
  name: string;
  sizes: Array<{ size: string; sellPrice: string }>;
  images: Array<{ imageURL: string }>;
  collection?: { name: string };
  category?: { name: string };
}

export default function BagProducts({
  details,
}: {
  details: BagProductDetails;
}) {
  const [data, setData] = useState<ProductData | null>(null);

  const { id, size, quantity } = details;

  useEffect(() => {
    async function getData() {
      try {
        const res: any = await getProductData(id);
        setData(res);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    }
    getData();
  }, [id]);

  const sizes = Array.isArray(data?.sizes) ? data.sizes : [];
  const sizeObj = sizes.find((s) => s.size === size);
  const price = sizeObj?.sellPrice || "N/A";

  const images = Array.isArray(data?.images) ? data.images : [];
  const collectionName = data?.collection?.name || "Unknown Collection";
  const categoryName = data?.category?.name || "Unknown Category";

  console.log("sizes:", JSON.stringify(sizes));
  console.log(JSON.stringify(data));
  console.log("price:", price);
  console.log("data collection: ", collectionName);
  console.log("data category: ", categoryName);

  const router = useRouter();
  const handleClick = () => {
    router.push(`/product?id=${data.id}&size=${size}`);
  };

  return (
    <div className="flex gap-4 bg-orange-50 border border-black px-2 font-manga items-center mx-20 rounded-sm justify-between">
      <div
        className="flex overflow-x-auto overflow-y-clip scrollbar-none snap-mandatory snap-x scroll-smooth w-1/4 h-full"
        onClick={handleClick}
      >
        {images.map((i: any, index: any) => (
          <div key={index} className="w-full h-full flex-shrink-0 snap-center">
            <img
              src={i.imageURL}
              className="group-hover:scale-125 ease-in-out duration-500 bg-white rounded-md"
              alt={`Product Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col mr-40">
        <h1 className="text-lg">{data?.name || "Product Name"}</h1>
        <p className="text-sm">{`${collectionName} ${categoryName}`}</p>
        <br />
        <div className="flex gap-4 ">
        <p>{`Size: ${size}`}</p>
        <p>{`Quantity: ${quantity}`}</p>
        </div>
      
      </div>
      <div className="flex flex-col gap-2 text-end">
        <p>{`Price: ${price}`}</p>
        <p>{`Total: ${price*quantity}`}</p>
      </div>
      <button className="border-2 mr-1 p-2 text-sm border-black rounded-full hover:bg-orange-400">Remove</button>
    </div>
  );
}
