# React Native Web Example

This is an example of react native web, it is a way to build web apps using the platform agnostic approach of react-native.

## How to run the demo app

```sh
yarn
yarn start
```

## Getting Started with React Native Web and Parcel

```sh
yarn global add parcel-bundler
mkdir web
cd web
yarn init -y
yarn add react react-dom react-native-web react-art
yarn add parcel-plugin-react-native-web --dev
echo '<!doctype html><html><body><div id="app" /><script src="./index.js"></script></body></html>' > index.html
json -I -f package.json -e 'this.scripts = {"start": "parcel index.html"}'
```

create index.js

```js
import React from 'react'
import { AppRegistry, StyleSheet, Text, View, Dimensions } from 'react-native'

var { height, width } = Dimensions.get('window')

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to React Native Web</Text>
        <Text>Awesome!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {}
})

AppRegistry.registerComponent('App', () => App)
AppRegistry.runApplication('App', { rootTag: document.getElementById('app') })
```

# Adding vector icons with expo

```sh
yarn add expo-web
```

package.json

```json
"alias": {
  "@expo/vector-icons": "expo-web",
  "react-native-vector-icons": "expo-web/dist/exports"
}
```
