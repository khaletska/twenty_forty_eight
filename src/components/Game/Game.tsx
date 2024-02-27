import React, { useEffect, useState } from "react";
import { View, Text, PanResponderGestureState } from 'react-native';
import commonStyles from '../../common/styles';
import styles from "./styles";
import Board from "../Board/Board";
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import Button from "../Button/Button";

const arraysEqual = (a: number[][], b: number[][]) => {
    return a.every((row, rowIndex) => row.every((cell, colIndex) => cell === b[rowIndex][colIndex]));
};

const Game = () => {
    const [board, setBoard] = useState<number[][]>([[0, 2, 0, 2], [0, 0, 0, 2], [0, 0, 0, 0], [0, 0, 0, 0]])
    const [score, setScore] = useState<number>(0)
    const [isEndGame, setEndGame] = useState<boolean>(false)
    const [isWin, setWin] = useState<boolean>(false)

    useEffect(() => {
        checkWin();
        checkEndGame();
    }, [board, isWin, isEndGame]);

    const startGame = () => {
        let newBoard = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
        newBoard = addRandomTile(newBoard)
        newBoard = addRandomTile(newBoard)
        newBoard = addRandomTile(newBoard)
        setBoard(newBoard)
        setEndGame(false)
        setWin(false)
    }

    const checkWin = () => {
        board.some(row => row.includes(2048)) ? setWin(true) : ''
    }

    const checkEndGame = () => {
        // Check if there are any empty cells
        for (const row of board) {
            if (row.includes(0)) {
                return // Game can continue, there is an empty cell
            }
        }

        // Check if there are adjacent cells with the same value
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length - 1; j++) {
                if (board[i][j] === board[i][j + 1] || board[j][i] === board[j + 1][i]) {
                    return // Game can continue, there are adjacent equal cells
                }
            }
        }

        setEndGame(true)
    }

    const addRandomTile = (newBoard: number[][]) => {
        const emptyCells: { row: number, col: number }[] = [];
        newBoard.forEach((row: number[], rowIndex: number) => {
            row.forEach((cell: number, colIndex: number) => {
                if (cell === 0) {
                    emptyCells.push({ row: rowIndex, col: colIndex })
                }
            })
        })

        if (emptyCells.length > 0) {
            const randomIndex = Math.floor(Math.random() * emptyCells.length)
            const { row, col } = emptyCells[randomIndex]
            const newValue = Math.random() < 0.9 ? 2 : 4

            const nextBoard = newBoard.map((row: number[]) => [...row])
            nextBoard[row][col] = newValue

            return nextBoard
        }

        return newBoard
    }

    const swipeLeft = (oldBoard: number[][]) => {
        let newScore = 0;

        const newBoard = oldBoard.map((row: number[]) => {
            const filteredRow = row.filter((cell: number) => cell !== 0)

            for (let i = 0; i < filteredRow.length - 1; i++) {
                if (filteredRow[i] === filteredRow[i + 1]) {
                    newScore += filteredRow[i] * 2;

                    filteredRow[i] *= 2
                    filteredRow[i + 1] = 0
                }
            }

            const mergedRow = filteredRow.filter(cell => cell !== 0)

            const newRow = [...mergedRow, ...Array(oldBoard.length - mergedRow.length).fill(0)]
            return newRow
        })
        setScore(score + newScore);

        return newBoard;
    }

    const swipeRight = () => {
        const flippedBoard = board.map(row => [...row].reverse())
        const newBoard = swipeLeft(flippedBoard)
        return newBoard.map(row => [...row].reverse())
    }

    const swipeUp = () => {
        const transposedBoard = board[0].map((_, i) => board.map(row => row[i]))
        const newBoard = swipeLeft(transposedBoard)
        return newBoard[0].map((_, i) => newBoard.map(row => row[i]))
    }

    const swipeDown = () => {
        const transposedBoard = board[0].map((_, i) => board.map(row => row[i]))
        const reversedBoard = transposedBoard.map(row => row.reverse())
        const newBoard = swipeLeft(reversedBoard)
        const backReverseBoard = newBoard.map(row => row.reverse())
        return backReverseBoard[0].map((_, i) => backReverseBoard.map(row => row[i]))
    }

    const onSwipe = (gestureName: string, gestureState: PanResponderGestureState) => {
        let newBoard: number[][]

        const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
        switch (gestureName) {
            case SWIPE_LEFT:
                newBoard = swipeLeft(board)
                break;
            case SWIPE_RIGHT:
                newBoard = swipeRight()
                break;
            case SWIPE_UP:
                newBoard = swipeUp()
                break;
            case SWIPE_DOWN:
                newBoard = swipeDown()
                break;
            default:
                newBoard = board;
                break;
        }

        if (!arraysEqual(newBoard, board)) {
            let newTiles = addRandomTile(newBoard)
            setBoard(newTiles);
        }
    }

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    }

    return (
        <GestureRecognizer
            onSwipe={(direction, state) => onSwipe(direction, state)}
            config={config}
            style={styles.wrapper}
        >
            <View style={styles.header}>
                <Text style={styles.title}>2048</Text>
                <View style={styles.scores}>
                    <View style={styles.plate}>
                        <Text style={styles.plateText}>Score</Text>
                        <Text style={styles.plateNum}>{score}</Text>
                    </View>
                    <View style={styles.plate}>
                        <Text style={styles.plateText}>High Score</Text>
                        <Text style={styles.plateNum}>{score}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.iconsContainer}>
                <Button title="Restart" onPress={startGame} />
            </View>
            <View style={commonStyles.container} >
                <View style={styles.boardContainer}>
                    <Board matrix={board} isEndGame={isEndGame} isWin={isWin} />
                </View>
            </View>
        </GestureRecognizer>
    )
}

export default Game