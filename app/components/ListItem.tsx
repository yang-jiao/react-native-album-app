
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './components.style'

type Props = {
    title: string
    subTitle?: string
    onPress: () => void
}

const ListItem: React.FC<Props> = ({ title, subTitle, onPress }: Props) => {
    return (
        <TouchableOpacity
            style={styles.listItem}
            onPress={onPress}
        >
            <Text>{title}</Text>
            {subTitle && <Text>{subTitle}</Text>}
        </TouchableOpacity>

    )
}

export default ListItem
