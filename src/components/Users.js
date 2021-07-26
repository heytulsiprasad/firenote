import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import firestore from '@react-native-firebase/firestore';
import {Appbar} from 'react-native-paper';

const Users = () => {
  // const [users, setUsers] = React.useState([]);

  // React.useEffect(() => {
  //   firestore()
  //     .collection('users')
  //     .get()
  //     .then(data => {
  //       data.docs.forEach(doc => {
  //         setUsers(c => [...c, doc.data()]);
  //       });
  //     });
  // }, []);

  return (
    <Appbar.Header>
      <Appbar.Content title="Users" subtitle="List of all users" />
    </Appbar.Header>
  );
};

export default Users;

const styles = StyleSheet.create({});
