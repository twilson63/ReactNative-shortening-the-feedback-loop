# Introduction to React Native

> A Quote App

## Requirements

* NodeJS - https://nodejs.org
* Yarn - `npm install yarn -g`
* crna - `yarn global add create-react-native-app`

## Create a project

```
create-react-native-app quotes
cd quotes
```

## Create the Quote View

> Lets start by defining the quote view that we want to see in our app.

App.js

```js
<View>
  <Text>Mondays are the potholes, in the road of life</Text>
  <Text>Author: Unknown</Text>
</View>
```

## Create StyleSheet

> Lets create a simple look and feel for the quote view using CSS

App.js

```js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  quote: {
    fontFamily: 'Avenir-Medium',
    fontSize: 24,
    marginHorizontal: 16
  },
  author: {
    color: 'green',
    marginTop: 16
  }
})
```

## Apply Styles

> Lets apply the styles to the view

App.js

```js
<View style={styles.container}>
  <Text style={styles.quote}>
    Mondays are the potholes, in the road of life
  </Text>
  <Text style={styles.author}>Author: Unknown</Text>
</View>
```

## Component Stages

> Lets define the possible Stages the component could be in.

```js
const [LOADING, QUOTE, ERROR] = ['LOADING', 'QUOTE', 'ERROR']
```

## Fetch a quote

> Using the componentDidMount Lifecycle event and the fetch function, lets get a quote from the cloud

```js
componentDidMount() {
  fetch('http://localhost:5000')
    .then(res => res.json())
    .then(console.log.bind(console))
    .catch(err => console.log(err))
}
```

## Initializing State

> Lets initialialize our state data

```js
state = {
  componentState: STATE,
  error: '',
  quote: {
    quoteAuthor: '',
    quoteText: ''
  }
}
```

## Apply quote to state

> Now that we have our quote lets apply it to our component State

```js
componentDidMount() {
  fetch('http://localhost:5000')
    .then(res => res.json())
    .then(
      quote =>
        this.setState({quote, componentState: QUOTE})
    )
    .catch(err => console.log(err))
}
```

## Apply state to view

```js
<View style={styles.container}>
  <Text style={styles.quote}>{this.state.quote.quoteText}</Text>
  <Text style={styles.author}>Author: {this.state.quote.quoteAuthor}</Text>
</View>
```

## Handle slow api connections

```js
if (this.state.componentState === LOADING) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="green" />
    </View>
  )
}
```

## Create a button to get new Quote

```js
<Button color="green" title="Get Quote" onPress={this.getQuote} />
```

```js
getQuote = () => {
  this.state.componentState !== LOADING &&
    this.setState({ componentState: LOADING })
  fetch('http://localhost:5000')
    .then(res => res.json())
    .then(quote => this.setState({ quote, componentState: QUOTE }))
    .catch(err => this.setState({ error: err.message, componentState: ERROR }))
}
```

```js
componentDidMount() {
  this.getQuote()
}
```

## Handle Errors

```js
if (this.componentState === ERROR) {
  return (
    <View style={[styles.container, { backgroundColor: 'red' }]}>
      <Text style={[styles.title, { color: 'white' }]}>Error</Text>
      <Text style={[styles.quote, { color: 'white' }]}>{this.state.error}</Text>
    </View>
  )
}
```

## Advanced

* Add a background Image
* Using Getty Image API to change per quote
* Add a tweet feature to post a quote on twitter
* Setup application icon
* Setup splash page
