// dependencies
import React from 'react'
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native'
import { cond, equals } from 'ramda'

// component states
const [LOADING, READY, ERROR] = ['LOADING', 'READY', 'ERROR']

// App Component
export default class App extends React.Component {
  // initial State
  state = {
    componentState: LOADING,
    error: '',
    quote: {
      quoteAuthor: '',
      quoteText: ''
    }
  }
  // handler function
  getQuote = () => {
    this.setState({ componentState: LOADING })
    fetch('https://trhc-quotes-api.now.sh')
      .then(res => res.json())
      .then(quote => this.setState({ quote, componentState: READY }))
      .catch(err =>
        this.setState({ error: err.message, componentState: ERROR })
      )
  }
  // load function
  componentDidMount() {
    this.getQuote()
  }

  // render component
  render() {
    return cond([
      [
        equals(ERROR),
        () => (
          <View style={[styles.container, { backgroundColor: 'red' }]}>
            <Text style={[styles.title, { color: 'white' }]}>Error</Text>
            <Text style={[styles.quote, { color: 'white' }]}>
              {this.state.error}
            </Text>
          </View>
        )
      ],
      [
        equals(LOADING),
        () => (
          <View style={styles.container}>
            <ActivityIndicator size="large" color="green" />
          </View>
        )
      ],
      [
        equals(READY),
        () => (
          <View style={styles.container}>
            <Text style={styles.title}>Quote</Text>
            <Text style={styles.quote}>{this.state.quote.quoteText}</Text>
            <Text style={styles.author}>
              Author: {this.state.quote.quoteAuthor}
            </Text>
            <Button color="green" title="Get Quote" onPress={this.getQuote} />
          </View>
        )
      ]
    ])(this.state.componentState)
  }
}

// styles
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Avenir-Medium',
    fontSize: 22,
    color: 'green',
    marginBottom: 16
  },
  quote: {
    marginHorizontal: 16,
    fontSize: 18
  },
  author: {
    marginTop: 16,
    marginBottom: 32
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
