
import { StackScreenProps } from '@react-navigation/stack'
import React, { useCallback } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import Button from '../components/Button'
import ListItem from '../components/ListItem'
import FlatListItemSeparator from '../components/ListItemSeparator'
import useAlbums from '../hooks/useAlbums'
import { IAlbum } from '../models'
import { ALBUM_LIST, PHOTO_GRID } from '../utils/constants'
import { ParamList } from '../utils/types'

type NavigationProps = StackScreenProps<
    ParamList,
    typeof ALBUM_LIST
>

const AlbumListScreen: React.FC<NavigationProps> = ({
    navigation,
    route,
}: NavigationProps) => {
    const { isLoading, error, albums, retry } = useAlbums(route.params.userId)
    const onAlbumPress = useCallback((albumId: number) => {
        navigation.navigate(PHOTO_GRID, { albumId })
    }, [navigation])

    const renderAlbum = ({ item }: { item: IAlbum }) => {
        const {
            title,
            id,
        } = item
        return <ListItem title={`Album title: ${title}`} onPress={() => onAlbumPress(id)} />
    }
    return (
        <View>
            {albums && <FlatList data={albums}
                renderItem={renderAlbum}
                ItemSeparatorComponent={FlatListItemSeparator}
                keyExtractor={(item) => `${item.id}`}
            />}
            {isLoading && <ActivityIndicator size="large" />}
            {error && <Button text={'RETRY'} onPress={retry} />}
        </View>

    )
}

export default AlbumListScreen
