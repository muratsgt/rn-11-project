import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';

const InputBox = (props) => {

    const [entry, setEntry] = useState("");
    
    const changeText = (text)=>{
        setEntry(text);
    };

    const pressButton = () => {
        props.getValue(entry);
        setEntry("");
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    value={entry}
                    onChangeText={changeText}
                    placeholder="Write your entry here.."
                />
            </View>
            <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={pressButton}
            >
                <Text style={styles.text}>Add Todo</Text>
            </TouchableOpacity>
        </View>
    )
};

export { InputBox };

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#ddd",
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        borderColor: "black",
        borderWidth: 1,
        position: "absolute",
        bottom: 6,
        width: Dimensions.get('window').width * 0.94,
        alignSelf: "center"
    },
    inputContainer: {
        backgroundColor: "white",
        paddingHorizontal: 10,
        margin: 10,
        borderRadius: 10,
        borderColor: "gray",
        borderWidth: 1,
    },
    buttonContainer: {
        backgroundColor: "#2979ff",
        borderRadius: 10,
        alignSelf: "center",
        padding: 8,
        paddingHorizontal: 30,
        margin: 10,
        borderColor: "white",
        borderWidth: 1,
    },
    text:{
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    }
})