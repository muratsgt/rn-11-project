import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { InputBox, TodoItem } from './components';

const App = () => {

    const [todos, setTodos] = useState([]);
    const [counter, setCounter] = useState(0);

    const renderItem = (data) => {
        return (
            <TodoItem delFunc={delValue} todo={data} />
        )
    };

    useEffect(()=>{
        setCounter( todos.length );
    },[todos])

    const delValue = (todoIndex) =>{
        setTodos( todos.slice(0,todoIndex).concat(todos.slice(todoIndex+1,)) );
    };

    const addValue = (value)=>{
        setTodos( todos.concat(value) );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headText}>TODO</Text>
                <Text style={styles.counter}>{counter}</Text>
            </View>

            <FlatList
                style={{ flex: 1, maxHeight: Dimensions.get('window').height * 0.7 }}
                data={todos}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />

            <InputBox getValue={(value)=>{addValue(value)}}></InputBox>
        </View>
    )
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333",
        justifyContent: "flex-start"
    },
    header: {
        flexDirection: "row",
        padding: 20
    },
    headText: {
        color: "orange",
        flex: 10,
        fontSize: 30,
        fontWeight: "bold",
    },
    counter: {
        color: "orange",
        fontSize: 30,
    }
})