import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
// import ToDoList from './components/FlatListToDo/index'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listTodo: [],
      todoTxt: null,
      ToDoListComponent: null
    }
  }

  lazyLoadToDoList = async () => {
    const {default: ToDo} = await import('./components/FlatListToDo')
    this.setState({ ToDoListComponent: ToDo })
  }

  componentDidUpdate(prevProps, prevState) {
    if(!this.state.ToDoListComponent && this.state.listTodo.length > 0){

      console.log('%c%s', 'color: #00e600', "Begin ll");
      this.lazyLoadToDoList()
    }
  }

  render() {
    console.log('%c⧭', 'color: #e209d0', "Rendering App")
    const {ToDoListComponent} = this.state
    const LLToDoList = ToDoListComponent ? <ToDoListComponent data={this.state.listTodo} /> : null
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Input TODO </Text>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => this.setState({ todoTxt: text })}
          />
          <TouchableOpacity style={{ padding: 10, backgroundColor: 'blue' }} onPress={() => this.setState({ listTodo: [...this.state.listTodo, this.state.todoTxt] })}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
        {/* <ToDoList data={this.state.listTodo} /> */}
        {LLToDoList}
      </View>
    )
  }
}