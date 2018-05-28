import React from 'react'
// import { Button, Text, View } from 'react-native'
import { Button, Container, Text } from 'native-base'

import styles from './styles'
import Act from '../Act'

export default class ActBox extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isClicked: false,
            act: {}
        }
        this.showAct = this.showAct.bind(this)
    }

    showAct () {
        const currentAct = this.props.getAct()
        this.setState({
            isClicked: true,
            act: currentAct
        })
    }

    render () {
        return (
            <Container style={styles.container}>
                {this.state.isClicked ? <Act act={this.state.act}/> : <Text></Text>}
                <Button dark
                onPress={this.showAct}>
                <Text>ACT!</Text>
                </Button>
            </Container>
        )
    }
}