import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {useState} from 'react';
import {images} from '../theme/images';

import FeedButtons from "../components/ui/FeedButtons";

import SquarePlus from "../components/ui/SquarePlus";

function WindowSimulatorScreen() {
    const [plantId, setPlantId] = useState(undefined);
    const [isDisplay, setIsDisplay] = useState(false);
    const [createdPlant, setCreatedPlant] = useState({})
    const setFeeds = (plantId, isDisplay, createdPlant) => {
        setPlantId(plantId);
        setIsDisplay(isDisplay);
        setCreatedPlant(createdPlant);
    }


  return (
    <View style={styles.rootContainer}>
        <ImageBackground source={images.wallBg} style={styles.imageBg} resizeMode="cover">
            <Image source={images.windowsill} style={styles.image}/>
          <SquarePlus left={60} top={330} id={1} setFeeds={setFeeds} isDisplay={isDisplay}/>
          <SquarePlus left={160} top={330} id={2} setFeeds={setFeeds} isDisplay={isDisplay}/>
          <SquarePlus left={260} top={330} id={3} setFeeds={setFeeds} isDisplay={isDisplay}/>
        <FeedButtons isDisplay={isDisplay} plantId = {plantId} setFeeds={setFeeds} createdPlant={createdPlant}/>
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