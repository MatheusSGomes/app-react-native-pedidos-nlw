import { Header } from "@/components/header";
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu Pedido" cartQuantityItem={3} />
    </View>
  )
}
