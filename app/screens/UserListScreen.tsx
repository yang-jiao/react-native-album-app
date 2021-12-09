
import { useNavigation } from '@react-navigation/core'
import React, { useCallback } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import useUsers from '../hooks/useUsers'
import { IUser } from '../models'
import { ALBUM_LIST } from '../utils/constants'
import ListItem from '../components/ListItem'
import FlatListItemSeparator from '../components/ListItemSeparator'
import Button from '../components/Button'

const UserListScreen: React.FC = () => {
    const { isLoading, error, allUsers, retry } = useUsers()
    const navigation = useNavigation()

    const onUserPress = useCallback((userId: number) => {
        navigation.navigate(ALBUM_LIST, { userId })
    }, [navigation])

    const renderUser = ({ item }: { item: IUser }) => {
        const {
            name,
            username,
            id,
        } = item
        return <ListItem title={`Name: ${name}`} subTitle={`User Name: ${username}`} onPress={() => onUserPress(id)} />
    }

    return (
        <View>
            {allUsers && <FlatList data={allUsers}
                renderItem={renderUser}
                ItemSeparatorComponent={FlatListItemSeparator}
                keyExtractor={(item) => `${item.id}`}
            />}
            {isLoading && <ActivityIndicator size="large" />}
            {error && <Button text={'RETRY'} onPress={retry} />}
        </View>

    )
}

export default UserListScreen
