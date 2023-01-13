import {StyleSheet, TouchableOpacity} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faSquarePlus} from "@fortawesome/free-regular-svg-icons";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";

import PlantComponent from "./PlantComponent";


function SquareComponent(){
    return (
        <FontAwesomeIcon icon={faSquarePlus} color={'white'}   size={80} secondaryColor={'grey'} secondaryOpacity={0.4}  />
    )
}

function SquarePlus(props) {
    const navigation = useNavigation();
    const createdPlant = useSelector((state) => state.createdPlants.value)
    return (
        <TouchableOpacity style={[styles.square, {left: props.left, top: props.top}]} onPress={() => {
            if (createdPlant.get(props.id).isActive) {
                console.log('przekazano')
            } else {
                navigation.navigate('Wybór rośliny', {idPlace: props.id})
            }
        }
        }
                          id={props.id}>
            {createdPlant.get(props.id).isActive ? <PlantComponent />: <SquareComponent />}
        </TouchableOpacity>
    )
}

export default SquarePlus;
const styles = StyleSheet.create({
    square: {
        position: 'absolute',
    },

});