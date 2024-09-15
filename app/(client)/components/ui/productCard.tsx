"use client";

import { useState, useRef } from "react";
import { addToBag } from "../../actions/bag";
import { useRouter } from "next/navigation";

const ProductCard = ({ data }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSize, setCurrentSize] = useState("m"); // Default size set to 'm'
  const containerRef = useRef<HTMLDivElement>(null);
  const sizes = data.sizes;
  const images = data.images;
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product?id=${data.id}&size=${currentSize}`);
  };

  const handleNext = (e: any) => {
    e.stopPropagation();
    if (containerRef.current) {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
      containerRef.current.scrollTo({
        left: containerRef.current.clientWidth * nextIndex,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = (e: any) => {
    e.stopPropagation();
    if (containerRef.current) {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setCurrentIndex(prevIndex);
      containerRef.current.scrollTo({
        left: containerRef.current.clientWidth * prevIndex,
        behavior: "smooth",
      });
    }
  };

  const handleSizeSelect = (e: any, size: string) => {
    e.stopPropagation();
    setCurrentSize(size);
  };

  // Find the current size object
  const currentSizeObject = sizes.find((s: any) => s.size === currentSize);

  return (
    <div className="overflow-hidden group relative border border-black p-0 rounded-md" onClick={handleClick}>
      <div
        ref={containerRef}
        className="flex overflow-x-auto overflow-y-clip scrollbar-none snap-mandatory snap-x scroll-smooth w-full"
      >
        <button
          onClick={handlePrev}
          className="hidden group-hover:block text-orange-500 absolute left-4 top-1/3 z-10"
        >
          {"<"}
        </button>
        {images.map((i: any, index: any) => (
          <div key={index} className="w-full h-full flex-shrink-0 snap-center">
            <img
              src={i.imageURL}
              className="w-full h-full group-hover:scale-125 ease-in-out duration-500 bg-white"
              alt={`Product Image ${index + 1}`}
            />
          </div>
        ))}
        <button
          onClick={handleNext}
          className="hidden group-hover:block text-orange-500 absolute right-4 top-1/3 z-10"
        >
          {">"}
        </button>
      </div>
      <div className="absolute hidden group-hover:block bg-white bg-opacity-60 left-0 top-1/2 h-1/2 w-full font-manga p-4 transition-opacity ease-in-out duration-500 opacity-0 group-hover:opacity-100">
        <h1>{data.name}</h1>
        <p className="text-xs">
          {data.collection.name + " " + data.category.name}
        </p>
        <div className="text-sm gap-2 my-4">
          {sizes.map((s: any) => (
            <button
              key={s.size}
              onClick={(e) => handleSizeSelect(e, s.size)}
              className={`hover:text-orange-400 mr-3 ${
                s.size === currentSize ? "text-orange-500" : ""
              }`}
            >
              {s.size}
            </button>
          ))}
        </div>
        <p className="text-xs text-red-500 line-through">
          Rs. {currentSizeObject?.basePrice}
        </p>
        <p className="text-sm">Rs. {currentSizeObject?.sellPrice}</p>
        <div className="absolute p-2 right-0 flex bottom-1">
          <button onClick={(e) => e.stopPropagation()}>
            <img src="/like.png" className="h-8 w-8" alt="Like" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToBag({ id: data.id, size: currentSize });
            }}
            className="bg-orange-400 text-black hover:bg-orange-50 hover:text-orange-400 rounded-full px-2 py-1 border-black ml-2 border-2 text-sm"
          >
            Add to bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
