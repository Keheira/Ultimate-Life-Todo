import React,{ Component } from 'react'
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native'
import { connect } from 'react-redux'
import styles from '../stylesheets/main'
import { bindActionCreators } from 'redux';
import ListItem from '../components/ListItem'
import FAB from '../components/FAB'
import { addWork, deleteWork } from '../redux/actions/index'

class Work extends React.Component {
  render(){
    if(this.props.work.todo.length == 0){
      return(
        <View style={styles.container}>
          <Text>Congrats on completing your work list!</Text>
          <View style={styles.button}>
            <FAB onPress={this.addTask.bind(this)} />
          </View>
        </View>
      )
    } else {
      return(
        <View style={styles.container}>
          <FlatList
            data={this.props.work.todo}
            renderItem={this.renderItem.bind(this)}
            keyExtractor={(item, index) => item.id.toString()}
            style={styles.listview}/>
          <View style={styles.button}>
            <FAB onPress={this.addTask.bind(this)} />
          </View>
        </View>
      )
    }
  }

  renderItem({item}) {
    const onPress = () => {
      Alert.alert(
        item.title + ' Completed?',
        null,
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          },
          {
            text: 'OK',
            onPress: () => this.props.deleteWork(item.id),
            style:'destructive'
          },
        ]
      )
    }

    return(
        <ListItem item={item} onPress={onPress}/>
    );
  }

  addTask() {
    Alert.prompt(
      'Add Task to Personal list',
      'What are we doin?',
      (input) => this.props.addWork(input)
    )
  }
}

const mapStateToProps = state => { 
  return { work: state.work }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ addWork, deleteWork }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Work)
