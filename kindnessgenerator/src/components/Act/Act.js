import React from 'react'
import { View, Text } from 'react-native'

export default class Act extends React.Component {
    render () {
        return (
            <View>
                <Text>{this.props.act}</Text>
            </View>
        )
    }
}