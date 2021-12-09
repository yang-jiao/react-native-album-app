
import React from 'react'
import { Pressable, Text } from 'react-native'

import styles from './components.style'

type Props = {
    text: string
    onPress: () => void
}

const Button: React.FC<Props> = ({ text, onPress }: Props) => {
    return (
        <Pressable
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.textStyle}>{text}</Text>
            </Pressable>

    )
}
export default Button
