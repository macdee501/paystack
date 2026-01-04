

import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCart } from '@/context/CartContext'

export default function CartScreen() {
    const {cart,removeFromCart,clearCart, total}= useCart();
  return (
    <View>
      <Text>cart</Text>
      {cart.length === 0 ? (
        <Text>Cart is empty</Text>
      ):(
        <>
        <FlatList
        data={cart}
        keyExtractor={(item) => item.$id}
        renderItem={({item})=>(
            <View>
                <Text>{item.productName}</Text>
                <Text>{item.productPrice}</Text>
                <Button
                title='Remove'
                onPress={()=> removeFromCart(item.$id)}
                />
            </View>
        )}
        />
        <Text> Subtotal: R{total}</Text>
        <Button
        title='Clear'
        onPress={clearCart}
        />
        <Button
        title='Proceed to Checkout'
        onPress={()=>console.log('checkout pressed')}
        />
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({})