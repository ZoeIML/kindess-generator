import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default class Intro extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.text}> Brighten someone's day with a Random Act of Kindness</Text>
            </View>
        )
    }
} 