import React from 'react'
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native'

const [LOADING, QUOTE, ERROR] = ['LOADING', 'QUOTE', 'ERROR']

export default class App extends React.Component {
  state = {
    componentState: LOADING,
    error: '',
    quote: {
      quoteAuthor: '',
      quoteText: ''
    }
  }

  componentDidMount() {
    this.getQuote()
  }
  render() {
    if (this.state.componentState === ERROR) {
      return (
        <View style={[styles.container, { backgroundColor: 'red' }]}>
          <Text style={[styles.author, { color: 'white' }]}>Error</Text>
          <Text style={[styles.quote, { color: 'white' }]}>
            {this.state.error}
          </Text>
        </View>
      )
    }

    if (this.state.componentState === LOADING) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="green" />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text style={styles.quote}>{this.state.quote.quoteText}</Text>
        <Text style={styles.author}>
          Author: {this.state.quote.quoteAuthor}
        </Text>
        <Button color="green" title="Get Quote" onPress={this.getQuote} />
      </View>
    )
  }
  getQuote = () => {
    this.state.componentState !== LOADING &&
      this.setState({ componentState: LOADING })
    fetch('http://localhost:5000')
      .then(res => res.json())
      .then(quote => this.setState({ quote, componentState: QUOTE }))
      .catch(err =>
        this.setState({ error: err.message, componentState: ERROR })
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  quote: {
    // fontFamily: 'avenir',
    fontSize: 24,
    marginHorizontal: 16
  },
  author: {
    color: 'green',
    marginTop: 16,
    marginBottom: 32
  }
})
