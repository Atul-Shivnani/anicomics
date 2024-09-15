"use server"

import prisma from "@/prisma/prisma";

export async function collectionData(url: any) {
    
    try {
        const categoryName = decodeURIComponent(url);

        const collections = await prisma.collection.findMany({
            where: {
                name: categoryName
            },
            include: {
                products: {
                    include:{
                        images:true,
                        sizes:true,
                        collection:true,
                        category:true
                    }
                } 
            }
        });

        const products = collections.flatMap(collection => collection.products);

        return products;
    } catch (e) {
        return e;
    }
}
