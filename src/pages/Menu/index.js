import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import RenderItemGrid from '../../components/RenderItemGrid';

const ImageFake = () => (
    <View
      style={{
        width: 100,
        height: 100,
        backgroundColor: '#4F249D',
        left: 20
      }}
    />
  );

  export default function Menu({navigation}) {
    const dados = [
      { id: 1, name: "Conversor de moedas", image: 'attach-money', onPress:()=>navigation.navigate('CurrencyConversor') },
      { id: 2, name: "Resolvedor Equação 2º grau", image: 'community-square-root', onPress:()=>navigation.navigate('SecondDegreeEquation') },
      { id: 3, name: "Timer", image: 'watch-later', onPress:()=>navigation.navigate('Timer') },
      // { id: 3, name: "Bússola", image: ImageFake, onPress:()=>navigation.navigate('CurrencyConversor') },
    //   { id: 2, name: "ArCondicionado", image: ImageFake },
    //   { id: 3, name: "Motriz", image: ImageFake },
    ];
  return (
      <SafeAreaView>
          <FlatGrid
            itemDimension={130}
            data={dados}
            style={{ paddingBottom: 50 }}
            contentContainerStyle={[styles.gridView]}
            spacing={10}
            renderItem={RenderItemGrid}
          />
      </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    // flex: 1,
    aspectRatio: 1.5,
    resizeMode: "contain",
  },
});
