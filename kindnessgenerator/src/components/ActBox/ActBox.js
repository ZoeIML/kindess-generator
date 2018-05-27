import React from 'react'
import { View, Text, Button } from 'react-native'

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
            <View>
                {this.state.isClicked ? <Act act={this.state.act}/> : <Text></Text>}
                <Button
                style={styles.actButton}
                title="ACT!"
                onPress={this.showAct}/>
            </View>
        )
    }
}