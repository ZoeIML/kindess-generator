import React from 'react'
import { Container, Content, Header } from 'native-base'

import ActsHeader from './src/components/ActsHeader'
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
      <Content padder>
        <ActsHeader />
        <Intro />
        <ActBox getAct={getAct}/>
      </Content>
      </Container>
    )
  }
}


