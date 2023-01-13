import {ImageBackground, StyleSheet, View} from "react-native";
import {images} from "../theme/images";
import FeedButtons from "../components/ui/FeedButtons";
import SquarePlus from "../components/ui/SquarePlus";

function FloorSimulatorScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground source={images.floorBg} resizeMode="stretch" style={styles.imageBg}>
                <SquarePlus left={30} top={200} id={7}/>
                <SquarePlus left={160} top={200} id={8}/>
                <SquarePlus left={290} top={200} id={9}/>
                <FeedButtons />
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