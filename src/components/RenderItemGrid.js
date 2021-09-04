import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ItemGrid from './ItemGrid'

export default function RenderItemGrid({ item }) {
  return (
    <ItemGrid
      name={item.name}
      image={item.image}
      onPress={item.onPress}
    />
  );
}
