import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import Button from "../../../../components/button/Button";
import Header from "../../../../components/header/Header";
import MarketCard from "../../../../components/marketCard/MarketCard";
import MarketData from "../../../../MarketData.json";
export default function Market({ navigation }) {

  function navigateToDetailPage(item) {

    
    navigation.navigate("MarketDetailPage",{item});
  }
   const renderCard = ({ item }) => (
    <MarketCard item={item} onPress={() =>navigateToDetailPage(item)} />
  );

  function navigateToSettings(){
    navigation.navigate('PreferenceScreen')
  }
  return (
    <View>
      <Header header="Market" onPressSettings={navigateToSettings} />
     
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={MarketData}
        renderItem={renderCard}
        numColumns={3}
      />
    </View>
  );
}
