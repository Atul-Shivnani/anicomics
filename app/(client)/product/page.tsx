"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Category from "../components/ui/category";
import Header from "../components/ui/header";
import { addToBag } from "../actions/bag";

const Product = () => {
  const [productData, setProductData] = useState({});
  const [images, setImages] = useState([]);
  const [sizes, setSizes] = useState([]);
  
  const router = useRouter();
  const searchParams = useSearchParams();

  const id = searchParams.get('id');
  const size = searchParams.get('size');
  
  console.log("id: " + id);

  useEffect(() => {
    if (id) {
      const fetchProductData = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/product?id=${id}`);
          setProductData(response.data);
          setImages(response.data.images);
          setSizes(response.data.sizes);
        } catch (error) {
          console.error("Error fetching product data:", error);
        }
      };

      fetchProductData();
    }
  }, [id]);

  const handleSizeSelect = (newSize: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set('size', newSize);

    const search = current.toString();
    const query = search ? `?${search}` : "";
    
    router.push(`/product${query}`);
  };

  const currentSizeObject = sizes.find((s: any) => s.size === size);

  return (
    <>
      <Header />
      <Category />

      <div className="mt-20 grid grid-cols-2 w-full bg-orange-50">
        <div className="flex w-full gap-4 p-20 h-dvh">
          <div className="flex flex-col w-1/5 border border-black h-fit rounded-md bg-white">
            {images.map((i, index) => (
              <img key={index} src={i.imageURL} alt={`Product image ${index + 1}`} />
            ))}
          </div>
          <div className="flex flex-col overflow-y-auto scrollbar-none snap-mandatory snap-y scroll-smooth w-4/5 h-3/4 rounded-md border border-black bg-white">
            {images.map((i, index) => (
              <div key={index} className="flex-shrink-0 snap-center">
                <img src={i.imageURL} alt={`Product image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-start font-manga">
          <h1 className="text-3xl">
            {productData ? productData.name : "Product not found"}
          </h1>
          <p className="">{`${productData?.collection?.name} ${productData?.category?.name}`}</p>

          <p className="my-4">{productData.color}</p>
          
             <p className="text-sm text-red-500 line-through">
          Rs. {currentSizeObject?.basePrice}
        </p>
        <p className="text-xl">Rs. {currentSizeObject?.sellPrice}</p>
        <div className="text-xl gap-2 my-4">
            {sizes.map((s: any) => (
              <button
                key={s.size}
                onClick={() => handleSizeSelect(s.size)}
                className={`hover:text-orange-400 mr-3 ${
                  s.size === size ? "text-orange-500" : ""
                }`}
              >
                {s.size}
              </button>
            ))}
        <div className="flex gap-4 pt-4">
        <button
            onClick={(e) => {
              e.stopPropagation();
              addToBag({ id, size});
            }}
            className="bg-orange-400 text-black hover:bg-orange-50 hover:text-orange-400 rounded-full px-10 py-1 border-black border-2 text-lg"
          >
            Add to bag
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToBag({ id, size});
            }}
            className="text-orange-400 hover:bg-orange-400 hover:text-black rounded-full px-4 py-1 border-black border-2 text-lg"
          >
            Add to liked
          </button>
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;