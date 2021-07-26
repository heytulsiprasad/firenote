import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import firestore from '@react-native-firebase/firestore';
import {Appbar} from 'react-native-paper';

const Home = () => {
  // const [users, setUsers] = React.useState([]);

  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

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
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Title" subtitle="Subtitle" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export default Home;

const styles = StyleSheet.create({});
