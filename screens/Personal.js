import React,{ Component } from 'react'
import { StyleSheet, Text, View, FlatList, ListView, Alert } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import ListItem from '../components/ListItem'
import FAB from '../components/FAB'
import * as Actions from '../actions/index'

class Personal extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getData()
  }

  render(){
    return(
      <View style={styles.container}>
        <FlatList
          data={this.props.personal}
          renderRow={this.renderItem.bind(this)}
          keyExtractor={(item, index) => index}
          ListEmptyComponent={
            <Text>You completed all your task! Congrats!</Text>
          }
          style={styles.listview}/>
        <View style={styles.button}>
          <FAB onPress={this.addTask.bind(this)} />
        </View>
      </View>
    )
  }

  renderItem(item) {
    const onPress = () => {
      alert('I got hit!')
    };

    return(
        <ListItem item={this.props.personal} onPress={onPress}/>
    );
  }

  addTask() {
    console.log("personal: " + this.props.personal);
    
    Alert.prompt(
      'Add Task to Personal list',
      'What are we doin?',
      (input) => this.props.addPersonal(input)
    )
  }
}

const mapStateToProps = state => { 
  return state
}

const mapDispatchToProps = dispatch => (
  bindActionCreators(Actions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Personal)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listview: {
    paddingTop: 45,
    height: '100%'
  },
  button: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'flex-end',
    marginBottom: 10
  }
})
