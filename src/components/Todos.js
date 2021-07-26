import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import firestore from '@react-native-firebase/firestore';
import {Appbar} from 'react-native-paper';

const Home = () => {
  // const [users, setUsers] = React.useState([]);

  return (
    <Appbar.Header>
      <Appbar.Content title="Todos" subtitle="List of all todos" />
    </Appbar.Header>
  );
};

export default Home;

const styles = StyleSheet.create({});
