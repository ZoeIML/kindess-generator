import React from 'react'
import { View, Button } from 'react-native'

export default class ActButton extends React.Component {
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