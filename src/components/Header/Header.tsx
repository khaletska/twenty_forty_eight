import { View, Text, } from 'react-native';
import Button from '../Button/Button';
import styles from './styles';

const Header = () => {

    const startGame = () => {}

    return (
        <View style={styles.header}>
            <Text style={styles.title}>2048</Text>
            <Button title="Start Game" onPress={startGame} />
        </View>
    )
}

export default Header;