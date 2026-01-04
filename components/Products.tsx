import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Product } from '@/data/types'

interface ProductsProps
{
    products: Product[];
}

export default function Products({products}:ProductsProps) {
  return (
   <FlatList
   data={products}
   keyExtractor={(item) => item.$id}
   renderItem={({item})=>(
    <View>
        <Text>{item.productName}</Text>
        <Text>{item.productPrice}</Text>
        <Button
        title="Add To Cart"
        />
    </View>
   )}
   />
  )
}

const styles = StyleSheet.create({})