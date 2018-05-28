import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

class Header extends React.Component {
    render() {
        return (
            <View style={styles.border}>
                <Text style={styles.title}>Random Act of Kindness Generator</Text>
            </View>
        )
    }
}

export default Header