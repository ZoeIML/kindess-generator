import React from 'react'
import { View, Text, Button } from 'react-native'

// import ActButton from '../ActButton'

// getting props: getAct

// import styles from './styles'

export default class Act extends React.Component {
    constructor (props) {
        super(props)
        this.state = { }
        this.showAct = this.showAct.bind(this)
    }

    showAct () {
        const currentAct = this.props.getAct()
        return currentAct
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