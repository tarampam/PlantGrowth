import {Image, StyleSheet, Text, View} from "react-native";
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

function AlertComponent(props){
    const sceneNumber = props.scene;
    const position = (sceneNumber === 2 || sceneNumber === 5 || sceneNumber === 7) ? styles.positionLow : styles.positionTop;
    return (
        <View style={[styles.relativeContainer, position]}>
            <Image style={{height: 30,width: 25, resizeMode:"contain"}} source={props.image}/>
            <Text style={{fontSize: 14}}>{props.textToShow}</Text>
        </View>
    )
}

function PlantComponent(props){
    const plant = props.createdPlant.get(props.idPlace);
    return (
        <View >
            {plant.isSprayingInsect? <SprayingInsect/>: null}
            {plant.isFertilizer? <FertilizerPlant/>: null}
            {plant.isSprayingWater? <SprayingPlant/>: null}
            {plant.isWatering? <WateringPlant/>: null}
            <Image source={plant.currentImage} style={{width: 180, height: 180, bottom: 90, right: 50,
                resizeMode: 'contain'}}/>
            {plant.typeOfDisease ? <AlertComponent scene={plant.scene} textToShow={plant.typeOfDisease} image={images.thermometerIcon} /> :
            !plant.isAlive ? <AlertComponent scene={plant.scene} textToShow={plant.name + ' nie żyje'} image={images.thermometerIcon} /> : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    isDisplay: {
        display: 'none'
    },
    relativeContainer: {
        position: "absolute",
        top: 110,
        left: -35,
        width: 150,
        height: 50,
        backgroundColor: "white",
        flex: 1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "space-evenly",
        borderRadius: 8,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 3,
    },
    positionTop: {
        top: 110,
    },
    positionLow: {
        top: 170,
    }
})
export default PlantComponent;