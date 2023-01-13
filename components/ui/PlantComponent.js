import {Image, View} from "react-native";
import {images} from "../../theme/images";
import React, {useState} from "react";



function WateringPlant(){
    return (
        <Image
            style={{width:150, height:150, bottom: 40,
                resizeMode: 'contain', position:'absolute'}}
            source={images.wateringCan}/>
    )
}

function PlantComponent(){
    const [isWatering, setIsWatering] = useState(false);
    return (
        <View >
            {isWatering? <WateringPlant/>: null}
            <Image source={images.animatedPlant} style={{width: 100, height: 100, bottom: 20}}/>
        </View>
    )
}

export default PlantComponent;