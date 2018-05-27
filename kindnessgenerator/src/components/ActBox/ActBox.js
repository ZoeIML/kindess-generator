import React from 'react' 
import { View, Text } from 'react-native'

import Act from '../Act'

import styles from './styles'

export default class ActBox extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <View>
                <Text>This is an act box</Text>
            </View>
        )
    }
}