import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { SectionGrid, FlatGrid } from "react-native-super-grid";
import styled from "styled-components/native";
import { Modal, Card, useTheme, Subheading } from "react-native-paper";
import Main from "./src/navigation/Main";
import Menu from "./src/pages/Menu";
import { persistor, store } from "./src/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main style={{ flex: 1, marginTop: 0 }} />
      </PersistGate>
      {/* <View style={styles.container}> */}
      {/* <Menu /> */}
      {/* <SectionGrid
        itemDimension={130}
        sections={[
          {
            title: 'Numbers',
            data: [1,2,3,4,5,6],
          },
          {
            title: 'Alphabets',
            data: ['A', 'B', 'C', 'D', 'E'],
          },
        ]}
        renderSectionHeader={({ section }) => (
          <Text style={{ fontSize: 20 }}>{section.title}</Text>
        )}
        renderItem={({ item }) => (<Text>{item}</Text>)}
      />
      <FlatGrid
  itemDimension={130}
  data={[1,2,3,4,5,6]}
  renderItem={({ item }) => (<Text>{item}</Text>)}
/> */}

      <StatusBar style="auto" />
      {/* </View> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
