import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`);

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res.json();
};

export default getBillboard;

// import { Category } from "@/types";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

// const getCategories = async (): Promise<Category[]> => {
//   try {
//     const res = await fetch(URL, {
//       method: "GET",
//       headers: {
//         "Cache-Control": "no-cache",
//         Pragma: "no-cache",
//       },
//     });

//     if (!res.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const data = await res.json();

//     // Log the data
//     console.log("Fetched categories:", data);

//     return data;
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     throw error;
//   }
// };

// export default getCategories;

// import useSWR from "swr";
// import { Category } from "@/types";
// // import axios from 'axios'

// // const fetcher = url => axios.get(url).then(res => res.data)

// const fetcher = async (url: string): Promise<Category[]> => {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// };

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;
// const getCategories = () => {
//   const { data, error } = useSWR(`${URL}`, fetcher);

//   if (error) {
//     console.error("Error fetching categories:", error);
//     // Handle error
//   }

//   return {
//     categories: data,
//     isLoading: !data && !error,
//   };
// };

// export default getCategories;
