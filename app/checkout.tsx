import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { usePaystack } from 'react-native-paystack-webview'

export default function CheckoutScreen() {
    const {orderId,total} = useLocalSearchParams<{orderId:string; total:string}>();
    const {popup} = usePaystack();

    function startPayment()
    {
        popup.checkout({
            amount: Number(total),
            email:"guest@email.com",
            onSuccess:()=>{
                console.log('Payment successful for order:',orderId);
            },
            onCancel:()=>{
                console.log('Payment cancelled for order:',orderId);    
            },
        })
    }
  return (
    <View>
        <Button
        title='Pay With Paystack'
        onPress={startPayment}
        />
        
    </View>
  )
}

const styles = StyleSheet.create({})