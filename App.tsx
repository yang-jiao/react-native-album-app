/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux'
import ConfigureStore from './app/store/configureStore';
import AppNavigation from './app/AppNavigation';

const Main = () => {
  return (
    <AppNavigation />
  );
};

const { store } = ConfigureStore();

const App = ():React.ReactNode => (
  <Provider store={store}>
      <Main />
  </Provider>
)


export default App;
