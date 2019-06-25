import React from 'react'
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import ListItem from '../components/ListItem'
import FAB from '../components/FAB'
import { addPersonal, deletePersonal } from '../actions/actions'

class Personal extends React.Component {
  render(){
    return(
      <View style={styles.container}>
      <FlatList
        data={this.props.personal.data}
        renderItem={this.renderItem.bind(this)}
        ListEmptyComponent={
          <View>
            <Text> Your List is complete!</Text>
          </View>
        }
        keyExtractor={(item, index) => item.id}
        style={styles.listview} />
        <View style={styles.button}>
          <FAB onPress={this.addTask.bind(this)} />
        </View>
      </View>
    )
  }

  renderItem(item) {
    const onPress = () => {
      alert('I should be deleted!')
      //this.props.removePersonal(id)
    };

    return(
      <ListItem item={this.props.personal.data} onPress={onPress}/>
    )
  }

  listenForItem(items){
    this.setState({
      dataSource: this.props.data.cloneWithRows(this.props.personal.data)
    });
}

  addTask() {
    Alert.prompt(
      'Add Task to Personal list',
      'What are we doin?',
      (input) => this.props.dispatch(addPersonal(input))
    )
    //this.props.addPersonal('New Task')
    //alert('Add task to list')
  }
}

/*const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addPersonal
  }, dispatch)
)*/
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Personal)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listview: {
    paddingTop: 35
  },
  button: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'flex-end',
    marginBottom: 10
  }
})
