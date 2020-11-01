import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const TodoItem = ({ todo, delFunc }) => {


    const { index, item } = todo;

    const [done, setDone] = useState(false);

    const checkIt = () => {
        done ? setDone(false) : setDone(true);
    }

    const delItem = () => {
        delFunc(index);
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.text, done ? styles.textDone : null]}>{item}</Text>
            <View style={styles.buttonContainer}>
                <Button color="white" title={done ? "✔" : '___'} onPress={checkIt} />
                <Button color="white" title={'🗑'} onPress={delItem} />
            </View>
        </View>
    )
};

export { TodoItem };

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#888",
        padding: 5,
        paddingHorizontal: 10,
        margin: 7,
        borderRadius: 5,
    },
    text: {
        flex: 7,
        color: "white",
        fontSize: 20,
    },
    textDone: {
        textDecorationLine: "line-through",
        color: "#aaa"
    },
    buttonContainer:{
        flex: 2,
        marginLeft: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    }
})