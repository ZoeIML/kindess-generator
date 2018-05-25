import React from 'react'
import { View, Text } from 'react-native'

// getting props: act

// import styles from './styles'

export default class Act extends React.Component {
    render () {
        return (
            <View>
                <Text>{this.props.act}</Text>
            </View>
        )
    }
}