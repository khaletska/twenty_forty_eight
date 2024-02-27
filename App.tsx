import React from 'react';
import Game from './src/components/Game/Game';
import Header from './src/components/Header/Header';
import { View } from 'react-native';
import styles from './src/common/styles';

export default function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Game />
    </View>
  )
}