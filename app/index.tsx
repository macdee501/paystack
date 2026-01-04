import Products from "@/components/Products";
import { getProducts } from "@/data/products";
import { Product } from "@/data/types";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index(){

  const [products,setProducts] = useState<Product[]>([]);

  useEffect(()=>{
    (async ()=> {
      const data = await getProducts();
      setProducts(data);
    })();
  },[])
  
  return (
    <View>
      <Text>Home</Text>
      <Products products={products}/>
    </View>
  );
}
