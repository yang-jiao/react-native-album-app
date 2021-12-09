
import { StackScreenProps } from '@react-navigation/stack'
import React, { useCallback, useState } from 'react'
import { ActivityIndicator, FlatList, Image, Modal, Platform, Text, TouchableOpacity, View } from 'react-native'
import usePhotos from '../hooks/usePhotos'
import { IPhoto } from '../models'
import { PHOTO_GRID } from '../utils/constants'
import { ParamList } from '../utils/types'
import ImageModal from 'react-native-image-modal'
import styles from './screens.style'
import Button from '../components/Button'

type NavigationProps = StackScreenProps<
    ParamList,
    typeof PHOTO_GRID
>

const ImageComponent = ({ url }: { url: string }) => {
    // <ImageModal> does not work for android, so just use simple RN
    // <Image> component on android platform
    if (Platform.OS === 'android') {
        return <Image
            style={styles.photo}
            source={{ uri: url }}
        />
    }
    //Tap image will open full-size view
    return <ImageModal
        resizeMode={'contain'}
        imageBackgroundColor={'#000000'}
        style={styles.photo}
        source={{
            uri: url
        }}
    />
}

const PhotoGridScreen: React.FC<NavigationProps> = ({
    route,
}: NavigationProps) => {
    const { isLoading, error, photos, retry } = usePhotos(route.params.albumId)
    const [photoUrl, setPhotoUrl] = useState<string | null>(null)
    const onThumbnailPress = useCallback((url: string) => {
        setPhotoUrl(url)
    }, [setPhotoUrl])

    const renderAlbum = ({ item }: { item: IPhoto }) => {
        const {
            title,
            url,
            thumbnailUrl,
        } = item
        return (
            <TouchableOpacity
                onPress={() => onThumbnailPress(url)}
                style={styles.imageItem}>
                <Image
                    style={styles.imageThumbnail}
                    source={{ uri: thumbnailUrl }}
                />
                <Text>{title}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <Modal
                animationType="slide"
                transparent
                visible={!!photoUrl}
                onRequestClose={() => {
                    setPhotoUrl(null)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {photoUrl && <ImageComponent url={photoUrl} />}
                        <Button text={'Close'} onPress={() => setPhotoUrl(null)} />
                    </View>
                </View>
            </Modal>
            {photos && <FlatList data={photos}
                renderItem={renderAlbum}
                numColumns={3}
                keyExtractor={(item) => `${item.id}`}
            />}
            {isLoading && <ActivityIndicator size="large" />}
            {error && <Button text={'RETRY'} onPress={retry} />}
        </View>

    )
}

export default PhotoGridScreen
