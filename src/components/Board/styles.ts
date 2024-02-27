import { StyleSheet } from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
    board: {
        borderTopWidth: 10,
        borderLeftWidth: 10,
        borderColor: Colors.accent,
        width: '100%',
        aspectRatio: 1,
        backgroundColor: Colors.primary,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    row: {
        height: '25%',
        flexDirection: 'row'
    },
    tile: {
        borderColor: Colors.accent,
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tileText: {
        fontSize: 32,
        color: Colors.text_dark,
        fontWeight: '700',
    },
    overScreen: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: `rgba(0, 0, 0, 0.7)`,
        alignItems: 'center',
        justifyContent: 'center',
    },
    winText: {
        fontSize: 40,
        color: Colors.text_dark,
        fontWeight: '700',
    },
    gameOverText: {
        fontSize: 60,
        color: Colors.text_dark,
        fontWeight: '700',
    }
})