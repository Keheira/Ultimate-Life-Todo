import React,{ Component } from 'react'
import { Text, View, FlatList, Alert} from 'react-native'
import { connect } from 'react-redux'
import styles from '../stylesheets/main'
import { bindActionCreators } from 'redux';
import ListItem from '../components/ListItem'
import { Button } from 'react-native-paper'
import { addPersonal, deletePersonal } from '../redux/actions/index'

class NewItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            today: new Date(),
            list: navigation.state.list
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Add to ' + this.state.list
        };
    };

  render(){
    return(
        <View style={styles.container}>
            <Text>Congrats on completing your personal list!</Text>
            <TouchableOpacity onPress={this.props.onPress}>
                <Text>this.state.today</Text>
            </TouchableOpacity>
            <Button style={styles.button} mode='contained' onPress={this.addTask.bind(this)}>Add</Button>
        </View>
    )
  }

  addTask() {
    switch(this.state.list){
        case work:{
            this.props.addWork(input)
        }
        case business: {
            this.props.addBusiness(input)
        }
        default:{
            this.props.addPersonal(input)
        }
    }
    this.props.navigation.navigate('Main')
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ addPersonal, addWork, addBusiness}, dispatch)
)

export default connect(mapDispatchToProps)(NewItem)