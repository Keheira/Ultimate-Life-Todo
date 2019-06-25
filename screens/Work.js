import React from 'react'
import { StyleSheet, Text, View, ListView } from 'react-native'


class Work extends React.Component {
  render(){
    return(
        <View style={styles.container}>
          Work Screen
        </View>
    )
  }
}

export default Work

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'flex-end',
        marginBottom: 35
    }
})