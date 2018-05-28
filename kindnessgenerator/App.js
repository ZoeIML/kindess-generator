import React from 'react';
import { Text, View } from 'react-native'

import Header from './src/components/Header'
import Intro from './src/components/Intro'
import ActBox from './src/components/ActBox'
import styles from './styles'
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


