import {ImageBackground, StyleSheet, View} from "react-native";
import {images} from "../theme/images";
import FeedButtons from "../components/ui/FeedButtons";
import SquarePlus from "../components/ui/SquarePlus";
import {useState} from "react";

function FloorSimulatorScreen() {
    const [plantId, setPlantId] = useState(undefined);
    const [isDisplay, setIsDisplay] = useState(false);
    const setFeeds = (plantId, isDisplay) => {
        setPlantId(plantId);
        setIsDisplay(isDisplay);
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={images.floorBg} resizeMode="stretch" style={styles.imageBg}>
                <SquarePlus left={30} top={200} id={7} setFeeds={setFeeds} isDisplay={isDisplay}/>
                <SquarePlus left={160} top={200} id={8} setFeeds={setFeeds} isDisplay={isDisplay}/>
                <SquarePlus left={290} top={200} id={9} setFeeds={setFeeds} isDisplay={isDisplay}/>
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
})

export default FloorSimulatorScreen;