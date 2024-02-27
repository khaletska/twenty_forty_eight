import { StyleSheet } from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: Colors.background,
        marginHorizontal: 10,
        justifyContent: 'center'
    },
    boardContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        height: '15%'
    },
    title: {
        fontSize: 50,
        color: Colors.text_dark,
        fontWeight: '700',
    }
})