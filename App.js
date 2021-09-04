import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { SectionGrid, FlatGrid } from 'react-native-super-grid';
import styled from 'styled-components/native';
import { Modal, Card, useTheme, Subheading } from 'react-native-paper';
import Main from './src/navigation/Main';
import Menu from './src/pages/Menu';
import { configureSaveReducer } from "./src/store/configureStore";
import { Provider } from "react-redux";

export default function App() {
  const store = configureSaveReducer();
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>

    {/* <View style={styles.container}> */}
      <Main style={{flex:1, marginTop: 0}} />
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // image: {
  //   flex: 1,
  //   aspectRatio: 1.5,
  //   resizeMode: 'contain'
  // }
});
