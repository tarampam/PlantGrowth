import {Image, ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../store/auth-content';
import {images} from '../theme/images';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import FeedButtons from "../components/ui/FeedButtons";

import {useNavigation} from '@react-navigation/native';

function WindowSimulatorScreen() {
    //TODO waiting for backend
    // const [fetchedMessage, setFetchedMessage] = useState('');
    //
    // const authCtx = useContext(AuthContext);
    // const token = authCtx.token;
    // useEffect(() => {
    //     axios.get('https://coursern-67fb2-default-rtdb.firebaseio.com/message.json?auth=' + token
    //     ).then((response) => {
    //         setFetchedMessage(response.data);
    //     });
    // }, []);
  const navigation = useNavigation();
  const [isClicked, setClicked] = useState(false)

  function SquareComponent(){
    return (
        <FontAwesomeIcon icon={faSquarePlus} color={'white'}   size={80} secondaryColor={'grey'} secondaryOpacity={0.4}  />
    )
  }
  function PlantComponent() {
    return (
        <Image source={images.animatedPlant} style={{width: 100, height: 100, bottom: 20 }}/>
    )
  }
  return (
    <View style={styles.rootContainer}>
        <ImageBackground source={images.wallBg} style={styles.imageBg} resizeMode="cover">
            <Image source={images.windowsill} style={styles.image}/>
          <TouchableOpacity style={[styles.square, {left: 60}]} onPress={() => navigation.navigate('Wybór rośliny')}>
            <FontAwesomeIcon icon={faSquarePlus} color={'white'}   size={80} secondaryColor={'grey'} secondaryOpacity={1}  />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.square, {left: 160}]} onPress={() => setClicked(!isClicked)}>
            {isClicked ?  <SquareComponent /> : <PlantComponent />}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.square, {left: 260}]}>
            <FontAwesomeIcon icon={faSquarePlus} color={'white'}   size={80} secondaryColor={'grey'} secondaryOpacity={0.4}  />
          </TouchableOpacity>
          <FeedButtons />
        </ImageBackground>
    </View>
  );
}

export default WindowSimulatorScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
      alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
    imageBg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
    },
  image: {
    width: 380,
    height: 400,
      margin: 32,
  },
  square: {
    position: 'absolute',
    top: 330,
  },
});