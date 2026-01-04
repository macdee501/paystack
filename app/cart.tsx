

import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { createOrderItem, createrOrder } from '@/data/orders';
import { useRouter } from 'expo-router';

export default function CartScreen() {
    const router = useRouter();
    const {cart,removeFromCart,clearCart, total}= useCart();

    async function handleCheckout()
    {
        try{
            if(cart.length === 0)
            {
                Alert.alert('Error','cart is empty');
                return;
            }

            const order = await createrOrder({
                userId:"guest",
                total:Math.round(total * 100),
                status:'pending',
                paymentReference:'',
            });

            for(const item of cart)
            {
                await createOrderItem({
                    orderId:order.$id,
                    productId:item.$id,
                    quantity:1,
                })
            }

            router.push({
                pathname:'/checkout',
                params:{orderId:order.$id,total:order.total},
            });
        }
        catch(error)
        {
            console.log('Checkout error:',error);
            Alert.alert('Error','Failed to process checkout');
        }
    }
   
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
        onPress={handleCheckout}
        />
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({})