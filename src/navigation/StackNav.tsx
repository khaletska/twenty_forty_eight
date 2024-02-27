import React, { Component } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from '../routes/Menu/Menu';
import Game from '../routes/Game/Game';

const Stack = createNativeStackNavigator()

export default class StackNav extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
                <Stack.Screen name="Game" component={Game} options={{ headerShown: false }} />
            </Stack.Navigator>
        )
    }
}