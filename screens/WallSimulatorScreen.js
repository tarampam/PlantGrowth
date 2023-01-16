import {Image, ImageBackground, StyleSheet, View} from "react-native";
import {images} from "../theme/images";

import FeedButtons from "../components/ui/FeedButtons";
import SquarePlus from "../components/ui/SquarePlus";
import {useState} from "react";

function WallSimulatorScreen() {
    const [plantId, setPlantId] = useState(undefined);
    const [isDisplay, setIsDisplay] = useState(false);
    const setFeeds = (plantId, isDisplay) => {
        setPlantId(plantId);
        setIsDisplay(isDisplay);
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={images.wallBg} resizeMode="cover" style={styles.imageBg}>
                <Image source={images.shelf} style={styles.image}/>
                <SquarePlus left={30} top={250} id={4} setFeeds={setFeeds} isDisplay={isDisplay}/>
                <SquarePlus left={160} top={250} id={5} setFeeds={setFeeds} isDisplay={isDisplay}/>
                <SquarePlus left={290} top={250} id={6} setFeeds={setFeeds} isDisplay={isDisplay}/>
                <FeedButtons isDisplay={isDisplay} plantId = {plantId} setFeeds={setFeeds}/>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
    },
    imageBg: {
        flex: 1,
        justifyContent:'center',
        width: '100%',
        height: '100%',
    },
    image: {
        alignSelf: 'center'
    },
})
export default WallSimulatorScreen;