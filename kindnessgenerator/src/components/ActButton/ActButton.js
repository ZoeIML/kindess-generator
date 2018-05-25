import React from 'react'
import { View, Button } from 'react-native'

// props is getAct function

// import styles from './styles'

export default class ActButton extends React.Component {
    constructor (props) {
        super(props)
        this.handlePress = this.handlePress.bind(this)
    }

    handlePress () {
        return <View>Test It!</View>
    }

    render () {
        return (
            <View>
            <Button 
                title="ACT!"
                onPress={this.handlePress}
                 />
            </View>
        )
    }
}