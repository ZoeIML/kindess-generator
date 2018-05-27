import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

import Header from './src/components/Header'
import Intro from './src/components/Intro'
import ActButton from './src/components/ActButton'
import ActBox from './src/components/ActBox'

import {getAct} from './src/utils/getAct'

export default class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Intro />
        <ActBox getAct={getAct} />
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
