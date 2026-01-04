import { databases } from "@/lib/appwrite";
import { Product } from "./types";

const DATABASE_ID = '695a370a00012c4487d0';
const TABLE_ID = '695a377f0026acd8fe94';

export async  function getProducts():Promise<Product[]>
{
    try
    {
        const response = await databases.listDocuments(DATABASE_ID, TABLE_ID);
        return response.documents as Product[];

    }
    catch(error)
    {
        
        console.error('Error fetching products:', error);
        
        return [];
    }
}