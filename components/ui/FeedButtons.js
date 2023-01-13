import {TouchableOpacity, StyleSheet, Image} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faBugSlash, faCircle, faDroplet} from "@fortawesome/free-solid-svg-icons";
import {SvgFertilizer, SvgPlantOnHand} from "./Svg";


import Modal from 'react-native-modal';
import ActionSheet from "../../components/ui/ActionSheet";
import React, {useState} from "react";
import SafeAreaView from "react-native-safe-area-view";
import {images} from "../../theme/images";

function FeedButtons(){
    const [actionSheet, setActionSheet] = useState(false);
    const [onPressId, setOnPressId] = useState(0);
    const closeActionSheet = () => setActionSheet(false);

    function listOnPress(value){
        closeActionSheet();
        console.log("podlewanie")
        return(
            <Image
                style={{width:100, height:100, bottom: 200, left:310, position:'absolute', zIndex:10}}
                source={images.logo}/>
        )
    }
    const wateringList = [
        {
            id: 1,
            label: 'Podlej kwiatka',
        },
        {
            id: 2,
            label: 'Spryskaj kwiatka wodą',
        }
    ];

    const fertilizerList = [
        {
            id: 1,
            label: 'Nawóz mineralny do roślin domowych o ozdobnych liściach',
        },
        {
            id: 2,
            label: 'Nawóz Biohumus do roślin zielonych',
        },
        {
            id: 3,
            label: 'Nawóz do kaktusów i sukulentów',
        },
        {
            id: 4,
            label: 'Nawóz do roślin kwitnących',
        }
    ]

    const insectList = [
        {
            id: 1,
            label: 'Spray na szarą pleśń',
        },
        {
            id: 2,
            label: 'Spray grzybobójczy',
        },
        {
            id: 3,
            label: 'Spray na choroby i szkodniki',
        },
    ]

    const [mapOfList, setMapOfList] = useState(new Map([
        [1,wateringList],
        [2,fertilizerList],
        [3,insectList]
    ]))

    return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={[styles.circle, {left: 280, bottom: 10}]} onPress={()=> {
            setOnPressId(1)
            setActionSheet(true)}}
        >
            <FontAwesomeIcon icon={faCircle} color={'white'}   size={55} secondaryColor={'grey'} secondaryOpacity={0.4}  />
            <FontAwesomeIcon icon={faDroplet} color={'#3e7ab8'} size={30} style={styles.circleFill}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.circle, {left: 320, bottom: 50}]} onPress={()=> {
            setOnPressId(2)
            setActionSheet(true)}}
        >
            <FontAwesomeIcon icon={faCircle} color={'white'}   size={55} secondaryColor={'grey'} secondaryOpacity={0.4}  />
            <SvgFertilizer style={styles.circleFill} size={30} color={'green'}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.circle, {left: 330, bottom: 105}]} onPress={()=> {
            setOnPressId(3)
            setActionSheet(true)}}
        >
            <FontAwesomeIcon icon={faCircle} color={'white'}   size={55} secondaryColor={'grey'} secondaryOpacity={0.4}  />
            <FontAwesomeIcon icon={faBugSlash} color={'black'} size={30} style={styles.circleFill}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.circle, {left: 305, bottom: 155}]} onPress={()=> {
            setOnPressId(4)
            setActionSheet(true)}}
        >
            <FontAwesomeIcon icon={faCircle} color={'white'}   size={55} secondaryColor={'grey'} secondaryOpacity={0.4}  />
            <SvgPlantOnHand style={styles.circleFill} size={30} color={'black'}/>
        </TouchableOpacity>
        <Modal
            isVisible={actionSheet}
            style={{
                margin: 0,
                justifyContent: 'flex-end'
            }}
        >
            <ActionSheet
                actionItems={mapOfList.get(onPressId)}
                onCancel={closeActionSheet}
                onPress={listOnPress}
            />
        </Modal>
    </SafeAreaView>
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