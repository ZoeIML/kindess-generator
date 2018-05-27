import React from 'react'
import { View, Button } from 'react-native'

// props is getAct function

import Act from '../Act'

// import styles from './styles'

export default class ActButton extends React.Component {
    constructor (props) {
        super(props)
        this.handlePress = this.handlePress.bind(this)
        this.showAct = this.showAct.bind(this)
        this.showNothing = this.showNothing.bind(this)
    }

    handlePress () {
        return true
    }

    showAct () {
        const act = this.props.getAct()
        return <View>{act}</View>
    }

    showNothing () {
        return false
    }

    render () {
        return (
            <View>
            <Button 
                title="ACT!"
                onPress={this.handlePress ? this.showAct : showNothing}
                 />
                 
            </View>
        )
    }
}