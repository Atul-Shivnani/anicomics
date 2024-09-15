"use server"

import prisma from "@/prisma/prisma";

export async function categoryData(url: any) {
    try {
        const categoryName = decodeURIComponent(url);

        const categories = await prisma.category.findMany({
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

        const products = categories.flatMap(category => category.products);

        return products;
    } catch (e) {
        return e;
    }
}
