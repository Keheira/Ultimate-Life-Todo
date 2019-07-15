import React,{ Component } from 'react'
import { Text, View, FlatList, Alert } from 'react-native'
import { connect } from 'react-redux'
import styles from '../stylesheets/main'
import { bindActionCreators } from 'redux';
import ListItem from '../components/ListItem'
import { FAB } from 'react-native-paper'
import { addBusiness, deleteBusiness } from '../redux/actions/index'

class Business extends Component {
  render(){
    if(this.props.business.todo.length == 0){
      return(
        <View style={styles.container}>
          <Text>Congrats on completing your business list!</Text>
          <FAB
            style={styles.fab}
            large
            icon="add"
            color='#FFFFFF'
            accessibilityLabel='Add personal task'
            onPress={this.addTask.bind(this)} />
        </View>
      )
    } else {
      return(
        <View style={styles.container}>
          <FlatList
            data={this.props.business.todo}
            renderItem={this.renderItem.bind(this)}
            keyExtractor={(item, index) => item.id.toString()}
            style={styles.listview}/>
          <FAB
            style={styles.fab}
            large
            icon="add"
            color='#FFFFFF'
            accessibilityLabel='Add personal task'
            onPress={this.addTask.bind(this)} />
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
            onPress: () => this.props.deleteBusiness(item.id),
            style:'destructive'
          },
        ]
      )
    }

    return(
        <ListItem item={item} onPress={onPress} />
    );
  }

  addTask() {
    Alert.prompt(
      'Add Task to Personal list',
      'What are we doin?',
      (input) => this.props.addBusiness(input)
    )
  }
}

const mapStateToProps = state => { 
  return { business: state.business }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ addBusiness, deleteBusiness }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Business)