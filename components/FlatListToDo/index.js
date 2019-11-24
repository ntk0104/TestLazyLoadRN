import React, { PureComponent } from 'react'
import { Text, View, FlatList } from 'react-native'

export default class ToDoList extends PureComponent {
  render() {
    console.log('%c⧭', 'color: #e209d0', "Rendering ToDoList")
    return (
      <View style={{ width: 100, height: 200, backgroundColor: 'red' }}>
        <Text> To Do List </Text>
        <FlatList
          data={this.props.data}
          renderItem={({item, index}) => <Text>{item}</Text>}
        />
      </View>
    )
  }
}
