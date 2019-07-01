import React, {Component} from 'react';
import { View, TouchableHighlight, Text } from 'react-native';

class ListItem extends Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress}>
                <View style={styles.li}>
                    <Text>{this.props.item.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }
};

const styles = {
    li: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        borderColor: 'transparent',
        borderWidth: 1,
        paddingLeft: 16,
        paddingTop: 14,
        paddingBottom: 16
    },
    liTitle: {
        color: '#228B22',
        fontSize: 16
    }
}

export default ListItem;