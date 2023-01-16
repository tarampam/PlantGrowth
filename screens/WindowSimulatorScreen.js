import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../store/auth-content';
import {images} from '../theme/images';

import FeedButtons from "../components/ui/FeedButtons";

import SquarePlus from "../components/ui/SquarePlus";

function WindowSimulatorScreen() {
    const [plantId, setPlantId] = useState(undefined);
    const [isDisplay, setIsDisplay] = useState(false);
    const setFeeds = (plantId, isDisplay) => {
        setPlantId(plantId);
        setIsDisplay(isDisplay);
    }

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
  return (
    <View style={styles.rootContainer}>
        <ImageBackground source={images.wallBg} style={styles.imageBg} resizeMode="cover">
            <Image source={images.windowsill} style={styles.image}/>
          <SquarePlus left={60} top={330} id={1} setFeeds={setFeeds} isDisplay={isDisplay}/>
          <SquarePlus left={160} top={330} id={2} setFeeds={setFeeds} isDisplay={isDisplay}/>
          <SquarePlus left={260} top={330} id={3} setFeeds={setFeeds} isDisplay={isDisplay}/>
        <FeedButtons isDisplay={isDisplay} plantId = {plantId} setFeeds={setFeeds}/>
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
});