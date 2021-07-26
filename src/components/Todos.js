import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Appbar} from 'react-native-paper';

const Home = () => {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Todos" subtitle="List of all todos" />
      </Appbar.Header>
      <View style={styles.todoList}>
        <Text>List of Todos goes here...</Text>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  todoList: {
    padding: 25,
  },
});
