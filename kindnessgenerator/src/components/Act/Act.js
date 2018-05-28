import React from 'react'
import { Container, Content, Text } from 'native-base'

import styles from './styles'

export default class Act extends React.Component {
    render () {
        return (
            <Container>
            <Content>
                <Text style={styles.text}>{this.props.act}</Text>
            </Content>
            </Container>
        )
    }
}