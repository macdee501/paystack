import { databases } from "@/lib/appwrite";
import { Order, OrderItem } from "./types";


const DATABASE_ID = '695a370a00012c4487d0';
const ORDERS_TABLE_ID = '695a4f4c002a7cd1f009';
const ORDER_ITEMS_TABLE_ID = '695a5367002503404ad8';

export async function createrOrder(order: Omit<Order, '$id'>)
{

    return await databases.createDocument(
        DATABASE_ID,
        ORDERS_TABLE_ID,
        "unique()",
        order
    );
}

export async function createOrderItem(item:Omit<OrderItem,'$id'>)
{

    return await databases.createDocument(
        DATABASE_ID,
        ORDER_ITEMS_TABLE_ID,
        "unique()",
        item
    );
}

