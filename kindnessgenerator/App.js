import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

import Header from './src/components/Header'
import Intro from './src/components/Intro'
import ActButton from './src/components/ActButton'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Intro />
        <ActButton />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
