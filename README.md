# react-native-album-app

Demo app to show albums and photos via 'http://jsonplaceholder.typicode.com/' endpoint APIs. Please check demo videos in 'recording' folder.

## Pre-requisites

1. React Native cli

    Please follow the react native cli quickstart guide found here: https://facebook.github.io/react-native/docs/getting-started

2. Node Version 

    Since this project is initialized by latest typescript template (https://reactnative.dev/docs/typescript), please use v14.17.3+ as your global default node env

## Getting Started

1. Install react-native node modules `$ yarn`

2. Install pods `cd ios && pod install`

## Running the project

1. android `$ yarn android`

2. iOS `$ yarn ios` 

3. lint `$ yarn lint`

4. testing `$ yarn test`

## How to use the app

1. Launch 'MyApp' from home screen;

2. Click any user in the list;

3. Then albums list which belongs to the user will display;

4. Click any album in the list;

5. Then photos which belong to the album will display in grid, if you click the thumbnail, it should populate a modal with image, tapping the image will open a full size screen (iOS only);

6. Users can back to previous screens by swipe gesture(iOS) and 'back key' (android);

7. If network error happens, there is a 'retry' button to allow 're-fetch' API

## TODO works

1. Storybook

   Storybook is helpful to present UI components and screens, as well as doing snapshots tests (https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/)

2. Test coverage is not good

   Since not enough time, just take specific 'action', 'reducer', 'hook' and component to test.

3. UI looks quite simple

4. lint rules need configure fully

5. Use husky (https://typicode.github.io/husky/) to integrate checking tasks before commit

6. Dependency 'react-native-fast-image' does not work properly on android, need to use 'patch-package' to override target source
