import React, {Component} from 'react';
import { View, TouchableHighlight, Text } from 'react-native';

class ListItem extends Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress} onLongPress={this.props.onLongPress}>
                <View style={styles.li}>
                    <Text style={styles.liTitle}>{this.props.item.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }
};

const styles = {
    li: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        borderBottomColor: '#FFA500',
        borderColor: 'transparent',
        alignItems: 'center',
        borderWidth: 1,
    },
    liTitle: {
        flex: 1,
        fontSize: 20
    },
}

export default ListItem;