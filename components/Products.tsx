import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Product } from '@/data/types'
import { useRouter } from 'expo-router';
import { useCart } from '@/context/CartContext';

interface ProductsProps
{
    products: Product[];
}

export default function Products({products}:ProductsProps) {
    const router = useRouter();
    const {addToCart} = useCart();


  return (
   <FlatList
   data={products}
   keyExtractor={(item) => item.$id}
   renderItem={({item})=>(
    <Pressable
    onPress={()=> router.push({pathname:'/product/[id]',params:{id:item.$id}})}
    >

        <Text>{item.productName}</Text>
        <Text>{item.productPrice}</Text>
        <Button
        title="Add To Cart"
        onPress={()=> {
            addToCart(item);
            router.push('/cart')}}
        />
    </Pressable>
   )}
   />
  )
}

const styles = StyleSheet.create({})