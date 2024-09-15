"use client";

import { bagProduct } from "../actions/bag";
import { useEffect, useState } from "react";
import Header from "../components/ui/header";
import BagProducts from "../components/ui/bagProducts";
import Category from "../components/ui/category";

export default function Bag() {
    const [products, setProducts] = useState<any[]>([]); // Assuming products is an array

    useEffect(() => {
        async function getData() {
            try {
                const res:any = await bagProduct();
                setProducts(res.bag || []);
            } catch (error) {
                console.error("Error fetching bag products:", error);
            }
        }

        getData();
    }, []);

    console.log(products)

    return (
        <div className="bg-orange-50">
            <Header/>
            <Category/>
            <div className="mt-24 grid grid-cols-4">
            {products.length > 0 ? (
                products.map(product => (
                    <div key={product.id} className="col-span-3">
                       <BagProducts details={{id:product.productId, size:product.size, quantity:product.quantity}}/>
                    </div>
                ))
            ) : (
                <p>No products found.</p>
            )}
            </div>
            
        </div>
    );
}
