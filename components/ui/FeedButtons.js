import {TouchableOpacity, View, StyleSheet} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faBugSlash, faCircle, faDroplet} from "@fortawesome/free-solid-svg-icons";
import {SvgFertilizer, SvgPlantOnHand} from "./Svg";

function FeedButtons(){
    return (
    <View style={styles.container}>
        <TouchableOpacity style={[styles.circle, {left: 280, bottom: 10}]}>
            <FontAwesomeIcon icon={faCircle} color={'white'}   size={55} secondaryColor={'grey'} secondaryOpacity={0.4}  />
            <FontAwesomeIcon icon={faDroplet} color={'#3e7ab8'} size={30} style={styles.circleFill}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.circle, {left: 320, bottom: 50}]}>
            <FontAwesomeIcon icon={faCircle} color={'white'}   size={55} secondaryColor={'grey'} secondaryOpacity={0.4}  />
            <SvgFertilizer style={styles.circleFill} size={30} color={'green'}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.circle, {left: 330, bottom: 105}]}>
            <FontAwesomeIcon icon={faCircle} color={'white'}   size={55} secondaryColor={'grey'} secondaryOpacity={0.4}  />
            <FontAwesomeIcon icon={faBugSlash} color={'black'} size={30} style={styles.circleFill}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.circle, {left: 305, bottom: 155}]}>
            <FontAwesomeIcon icon={faCircle} color={'white'}   size={55} secondaryColor={'grey'} secondaryOpacity={0.4}  />
            <SvgPlantOnHand style={styles.circleFill} size={30} color={'black'}/>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 2,
    },
    circle: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleFill: {
        position: 'absolute'
    }
})

export default FeedButtons;