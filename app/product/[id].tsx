import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Product } from '@/data/types';
import { getProductById } from '@/data/products';

export default function ProductDetails() {
    const {id} = useLocalSearchParams();
    const [product, setProduct] = useState<Product|null>(null);


    // Fetch product details when component mounts or id changes
    useEffect(()=>{
        (async()=>{
            if(id)
            {
                const data = await getProductById(id as string);
                setProduct(data);
            }
        })();
    },[id]);

    if(!product) return <Text>Loading...</Text>
  return (
    <View>
      <Text>ProductDetails</Text>
      <Text>{product.productName}</Text>
        <Text>{product.productPrice}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})