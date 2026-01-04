import { CartProvider } from "@/context/CartContext";
import { Stack } from "expo-router";
import {PaystackProvider} from 'react-native-paystack-webview'

export default function RootLayout() {
  return (
    <PaystackProvider
    publicKey="pk_test_2d7941ab6fcd81d67e4e6e810f92b556e00ae427"
    currency="ZAR"
    >

    <CartProvider>
      <Stack />;
    </CartProvider>
    </PaystackProvider>
  )
}
