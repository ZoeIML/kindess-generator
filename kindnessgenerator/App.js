import React from 'react';
// import { View } from 'react-native'
import { Container, Content } from 'native-base'

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
      <Container style={styles.container}>
      <Content>
        <Header />
        <Intro />
        <ActBox getAct={getAct}/>
      </Content>
      </Container>
    )
  }
}


