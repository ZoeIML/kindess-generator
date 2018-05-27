import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default class Act extends React.Component {
    render () {
        return (
            <View>
                <Text style={styles.text}>{this.props.act}</Text>
            </View>
        )
    }
}