import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../store/auth-content';

function WelcomeScreen() {
    const [fetchedMessage, setFetchedMessage] = useState('');

    const authCtx = useContext(AuthContext);
    const token = authCtx.token;
    useEffect(() => {
        axios.get('https://coursern-67fb2-default-rtdb.firebaseio.com/message.json?auth=' + token
        ).then((response) => {
            setFetchedMessage(response.data);
        });
    }, []);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Witaj!</Text>
      <Text>Zalogowano pomyślnie!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});