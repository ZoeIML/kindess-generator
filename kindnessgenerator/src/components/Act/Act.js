import React from 'react'
import { View, Text, Button } from 'react-native'

// import ActButton from '../ActButton'

// import styles from './styles'

export default class Act extends React.Component {
    constructor (props) {
        super(props)
        this.state = { }
        this.showAct = this.showAct.bind(this)
    }

    showAct () {
        const currentAct = this.props.getAct()
        this.setState({
            act: currentAct
        })
    }

    render () {
        return (
            <View>
                <Button 
                title="ACT!"
                onPress={this.showAct}/>
            </View>
        )
    }
}