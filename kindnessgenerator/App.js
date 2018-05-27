import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

import Header from './src/components/Header'
import Intro from './src/components/Intro'
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
        <ActBox getAct={getAct}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff4',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: 'darkgreen',
    marginTop: 20,
    marginLeft: 2.5
  }
})
