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
        
        bottom: 0,
        alignSelf: 'flex-end',
        marginBottom: 10,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
})