import {Image, View} from "react-native";
import {images} from "../../theme/images";
import React from "react";

function WateringPlant(){
    return (
        <Image
            style={{width:150, height:150, bottom: 120,
                resizeMode: 'contain', position:'absolute', zIndex:2}}
            source={images.wateringCan}/>
    )
}

function FertilizerPlant(){
    return (
        <Image
            style={{width:100, height:100, bottom: 140,
                resizeMode: 'contain', position:'absolute', zIndex:2}}
            source={images.fratelizer}/>
    )
}

function SprayingPlant(){
    return (
        <Image
            style={{width:140, height:140, bottom: 80,
                resizeMode: 'contain', position:'absolute', zIndex:2}}
            source={images.spraying}/>
    )
}

function SprayingInsect(){
    return (
        <Image
            style={{width:140, height:140, bottom: 80,
                resizeMode: 'contain', position:'absolute', zIndex:2}}
            source={images.sprayingInsect}/>
    )
}

function PlantComponent(props){
    return (
        <View >
            {props.createdPlant.get(props.idPlace).isSprayingInsect? <SprayingInsect/>: null}
            {props.createdPlant.get(props.idPlace).isFertilizer? <FertilizerPlant/>: null}
            {props.createdPlant.get(props.idPlace).isSprayingWater? <SprayingPlant/>: null}
            {props.createdPlant.get(props.idPlace).isWatering? <WateringPlant/>: null}
            <Image source={props.createdPlant.get(props.idPlace).currentImage} style={{width: 180, height: 180, bottom: 85, right: 50,
                resizeMode: 'contain'}}/>

        </View>
    )
}

export default PlantComponent;