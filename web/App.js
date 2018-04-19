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
