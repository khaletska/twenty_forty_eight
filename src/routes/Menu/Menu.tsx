import React, { Component } from "react";
import { View, Text, } from 'react-native';
import commonStyles from '../../common/styles';
import styles from "./styles";
import Button from "../../components/Button/Button";

export default class Menu extends Component {

    startGame = () => {
        this.props.navigation.navigate('Game')
    } 

    render(): React.ReactNode {
        return (
            <View style={commonStyles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>2048</Text>
                </View>
                <Button title="Start Game" onPress={this.startGame} />
            </View>
        )
    }
}