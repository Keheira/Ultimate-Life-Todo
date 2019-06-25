import React, {Component} from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

class FAB extends Component {
    render() {
        return (
            <View style={styles.action}>
                <TouchableHighlight onPress={this.props.onPress}>
                <Text style={styles.actionText}>+</Text>
                </TouchableHighlight>
            </View>
        );
    };
};

const styles = {
    actionText: {
        color: '#ffffff',
        fontSize: 35,
        textAlign: 'center',
    },
    action: {
        backgroundColor: '#FFA500',
        borderColor: 'transparent',
        width: 60,
        height: 60,
        borderRadius: 30,
        padding: 5,
        marginRight: 10
    },
};

export default FAB;