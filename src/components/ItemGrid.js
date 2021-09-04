import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { SectionGrid, FlatGrid } from 'react-native-super-grid';
import styled from 'styled-components/native';
import { Modal, Card, useTheme, Subheading } from 'react-native-paper';
// import ImageFake from './ImageFake'

const MyImage = styled.Image`
  display: flex;
  width: 95%;
  height: 5%;
  padding: 15%;
  /* color: #fff; */
`;

const ImageFake = () => (
    <View
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        left: 20
      }}
    />
  );


export default ItemGrid = ({ name, image, onPress, dispatch, navigation }) => {
    console.log('passei no item')
    return(
    <Card
      style={{
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        elevation: 5,
        borderRadius: 20,
        backgroundColor:  '#4F249D',
        color: '#000',
        flex: 1
      }}
      onPress={onPress}
    >
      <Card.Content>
        {image !== '' && typeof image !== 'function' ? <MyImage source={image} style={styles.image} /> : <ImageFake />}
        <Subheading style={{ textAlign: 'center', fontWeight: 'bold', color:'#EDD60B' }}>{name}</Subheading>
      </Card.Content>
    </Card>
  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    aspectRatio: 1.5,
    resizeMode: 'contain'
  }
});
