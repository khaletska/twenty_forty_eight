import React from "react";
import { View, Text } from 'react-native';
import styles from "./styles";
import Colors from "../../common/Colors";

type BoardProps = {
    matrix: number[][];
    isEndGame: boolean;
    isWin: boolean;
}

const Board: React.FC<BoardProps> = ({ matrix, isEndGame, isWin }) => {
    const getStyle = (value: number) => ({
        backgroundColor: (Colors as any)[`tile_${value}`],
        color: (Colors as any)[`${value > 4 ? 'text_light' : 'text_dark'}`]
    }) || {};

    const getBorder = (rowIndex: number, colIndex: number) => {
        const border = {
            borderWidth: 10,
            borderLeftWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 10,
            borderRightWidth: 10,
        };

        return border;
    }

return (
    <View style={styles.board}>
        {matrix.map((row, rowIndex) => (
            <View style={styles.row} key={rowIndex}>
                {row.map((value, colIndex) => (
                    <View style={[styles.tile, getBorder(rowIndex, colIndex), getStyle(value)]} key={colIndex}>
                        {value !== 0 &&
                            <Text style={styles.tileText}>
                                {value}
                            </Text>
                        }
                    </View>
                ))}
            </View>
        ))}
        {
            isEndGame &&
            <View style={styles.overScreen}>
                <Text style={styles.gameOverText}>
                    Game Over!
                </Text>
            </View>
        }
        {
            isWin &&
            <View style={styles.overScreen}>
                <Text style={styles.winText}>You WON!</Text>
            </View>
        }
    </View>
)
}

export default Board;