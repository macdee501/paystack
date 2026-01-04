export interface Product
{
    $id:string;
    productName:string;
    productPrice:number;
}

export interface Order{
    $id:string;
    userId:string;
    total:number;
    status:"pending" | "paid" | "failed";
    paymentReference:string;
}

export interface OrderItem
{
    $id:string;
    orderId:string;
    productId:string;
    quantity:number;
}