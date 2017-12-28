import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'


export default class BuildScreen extends Component {
  constructor(props){
    super(props)
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Hello Builder</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9b59b6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
