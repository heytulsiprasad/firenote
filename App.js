import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const App = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    firestore()
      .collection('users')
      .get()
      .then(data => {
        data.docs.forEach(doc => {
          setUsers(c => [...c, doc.data()]);
        });
      });
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.view}>
        <Text>Homescreen</Text>
        <Text>{JSON.stringify({users}, null, 4)}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  view: {
    flex: 1,
    padding: 25,
  },
});
