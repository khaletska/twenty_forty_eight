import { StyleSheet } from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
    wrapper: {
        height: '70%',
        backgroundColor: Colors.background,
        paddingHorizontal: 10,
    },
    boardContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 60,
        color: Colors.text_dark,
        fontWeight: '700',
    },
    scores: {
        flexDirection: 'row',
        gap: 10,
    },
    plate: {
        backgroundColor: Colors.primary,
        flexDirection: 'column',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        maxHeight: 50
    },
    plateText: {
        textTransform: 'uppercase',
        fontSize: 7,
        fontWeight: '700'
    },
    plateNum: {
        fontSize: 15,
        fontWeight: '700'
    },
    iconsContainer: {
        flexDirection: 'row',
        gap: 10,
        alignSelf: 'flex-end'
    }
})