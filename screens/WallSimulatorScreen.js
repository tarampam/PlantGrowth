import {Image, ImageBackground, StyleSheet, TouchableOpacity, View} from "react-native";
import {images} from "../theme/images";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import FeedButtons from "../components/ui/FeedButtons";

function WallSimulatorScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground source={images.wallBg} resizeMode="cover" style={styles.imageBg}>
                <Image source={images.shelf} style={styles.image}/>
                <TouchableOpacity style={[styles.square, {left: 30}]}>
                    <FontAwesomeIcon icon={faSquarePlus} color={'white'}   size={80} secondaryColor={'grey'} secondaryOpacity={0.4}  />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.square, {left: 160}]}>
                    <FontAwesomeIcon icon={faSquarePlus} color={'white'}   size={80} secondaryColor={'grey'} secondaryOpacity={0.4}  />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.square, {left: 290}]}>
                    <FontAwesomeIcon icon={faSquarePlus} color={'white'}   size={80} secondaryColor={'grey'} secondaryOpacity={0.4}  />
                </TouchableOpacity>
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
    image: {
        alignSelf: 'center'
    },
    square: {
        position: 'absolute',
        top: 250,
    },
})
export default WallSimulatorScreen;