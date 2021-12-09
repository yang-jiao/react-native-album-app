import {
  Colors,
} from 'react-native/Libraries/NewAppScreen'
import { createStackNavigator } from "@react-navigation/stack"
import {
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native'
import { useColorScheme } from "react-native"
import { ALBUM_LIST, PHOTO_GRID, USER_LIST } from "./utils/constants"
import React from 'react'
import UserListScreen from './screens/UserListScreen'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import styles from './screens/screens.style'
import AlbumListScreen from './screens/AlbumListScreen'
import PhotoGridScreen from './screens/PhotoGridScreen'

const Stack = createStackNavigator()

const AppNavigation = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={DefaultTheme}>
        <SafeAreaView style={[backgroundStyle, styles.screen]}>
          <Stack.Navigator
            headerMode="none"
            initialRouteName={USER_LIST}
            screenOptions={{
              gestureEnabled: true,
            }}>
            <Stack.Screen name={USER_LIST} component={UserListScreen} />
            <Stack.Screen name={ALBUM_LIST} component={AlbumListScreen} />
            <Stack.Screen name={PHOTO_GRID} component={PhotoGridScreen} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default AppNavigation