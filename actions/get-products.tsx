import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getProducts;

// import { Product } from "@/types";
// import qs from "query-string";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/product`;

// interface Query {
//   categoryId?: string;
//   colorId?: string;
//   sizeId?: string;
//   isFeatured?: boolean;
// }

// const getProducts = async (query: Query): Promise<Product[]> => {
//   try {
//     const url = qs.stringifyUrl({
//       url: URL,
//       query: {
//         colorId: query.colorId,
//         sizeId: query.sizeId,
//         categoryId: query.categoryId,
//         isFeatured: query.isFeatured,
//       },
//     });

//     console.log("Fetching products from:", url);

//     const res = await fetch(url);

//     if (!res.ok) {
//       console.error("Failed to fetch products");
//       throw new Error("Failed to fetch products.");
//     }

//     const data = await res.json();

//     console.log("Fetched products:", data);

//     return data;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     throw error;
//   }
// };

// export default getProducts;
