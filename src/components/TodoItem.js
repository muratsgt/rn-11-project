import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const TodoItem = (props) => {

    const [done, setDone] = useState(false);

    const checkIt = () => {
        done ? setDone(false) : setDone(true);
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.text, done ? styles.textDone : null]}>{props.text}</Text>
            <Button title={done ? "✔": '___'} onPress={checkIt} />
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
        flex: 10,
        color: "white",
        fontSize: 20,
    },
    textDone:{
        textDecorationLine: "line-through",
        color: "#aaa"
    }
})