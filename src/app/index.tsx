import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";
import { View, FlatList } from "react-native";
import { CATEGORIES } from '@/utils/data/products'

export default function Home() {
  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu Pedido" cartQuantityItem={3} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({item}) => <CategoryButton title={item} />}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </View>
  )
}
