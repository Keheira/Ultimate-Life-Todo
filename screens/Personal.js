import React,{ Component } from 'react'
import { Text, View, FlatList, Alert} from 'react-native'
import { connect } from 'react-redux'
import styles from '../stylesheets/main'
import { bindActionCreators } from 'redux';
import ListItem from '../components/ListItem'
import { FAB } from 'react-native-paper'
import { addPersonal, deletePersonal } from '../redux/actions/index'

class Personal extends Component {
  constructor(props){
    super(props)
    this.state = {
      showInput: false
    }
  }
  render(){
    if(this.props.personal.todo.length == 0){
      return(
        <View style={styles.container}>
          <Text>Congrats on completing your personal list!</Text>
          <FAB
            hide
            style={styles.fab}
            large
            icon="add"
            color='#FFFFFF'
            accessibilityLabel='Add personal task'
            onPress={this.addDetails.bind(this)} />
        </View>
      )
    } else {
      return(
        <View style={styles.container}>
          <FlatList
            data={this.props.personal.todo}
            renderItem={this.renderItem.bind(this)}
            keyExtractor={(item, index) => item.id.toString()}
            style={styles.listview}/>
          <View style={styles.button}>
          <FAB
            style={styles.fab}
            large
            icon="add"
            color='#FFFFFF'
            accessibilityLabel='Add personal task'
            onPress={this.addDetails.bind(this)} />
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
            onPress: () => this.props.deletePersonal(item.id),
            style:'destructive'
          },
        ]
      )
    }

    return(
        <ListItem item={item} onPress={onPress}/>
    );
  }

  addDetails() {
    this.props.navigation.navigate('NewItem', {
      list: 'work'
    })
  }
}

const mapStateToProps = state => { 
  return { personal: state.personal }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ addPersonal, deletePersonal}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Personal)