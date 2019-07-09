import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listview: {
        marginTop: 85,
        height: '100%',
        width:'100%'
    },
    button: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'flex-end',
        marginBottom: 10
    }
})