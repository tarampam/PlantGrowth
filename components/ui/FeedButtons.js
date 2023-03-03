import {TouchableOpacity, StyleSheet, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faBugSlash, faCircle, faDroplet, faTrash} from "@fortawesome/free-solid-svg-icons";
import {SvgFertilizer} from "./Svg";
import {increaseHumidity} from '../../simulationHandler/Simulation';


import Modal from 'react-native-modal';
import ActionSheet from "../../components/ui/ActionSheet";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    changeWatering,
    changeSprayingWater,
    changeFertilizer,
    changeSprayingInsect,
    changeWateringFlag,
    changeSprayingFlag,
    curePlantDisease,
    addFertilizer,
    deletePlant
} from '../../store/redux/plants'
import {fertilizerList, diseaseList, wateringList, deleteList} from "../../store/local-data";

function FeedButtons(props){
    const [actionSheet, setActionSheet] = useState(false);
    const [onPressId, setOnPressId] = useState(0);
    const closeActionSheet = () => setActionSheet(false);
    const dispatch = useDispatch();
    const seasonSettings = useSelector((state) => state.userSettings.season);

    function displayHandler(){
        if(props.isDisplay){
            return 'flex'
        }else {
            return 'none'
        }

    }

    function listOnPress(value){
        closeActionSheet();
        props.setFeeds(props.plantId, !props.isDisplay);
        switch(value.id){
            case 1:
                dispatch(changeWatering(
                    {
                        scene: props.plantId,
                        humidityPoints: increaseHumidity(false),
                    })
                )
                dispatch(changeWateringFlag({scene: props.plantId,}))
                setTimeout(()=> {
                    dispatch(changeWateringFlag({scene: props.plantId}))
                }, 2000)
                break;
            case 2:
                dispatch(changeSprayingWater(
                    {
                        scene: props.plantId,
                        humidityPoints: increaseHumidity(true),
                    })
                )
                dispatch(changeSprayingFlag({scene: props.plantId,}))
                setTimeout(()=> {
                    dispatch(changeSprayingFlag({scene: props.plantId}))
                }, 2000)
                break;
            case 3:
                dispatch(addFertilizer({scene: props.plantId, fertilizerType: value.label, season: seasonSettings}))
                dispatch(changeFertilizer(
                    {
                        scene: props.plantId,
                    }))
                setTimeout(()=> {
                    dispatch(changeFertilizer({scene: props.plantId}))
                }, 2000)
                break;
            case 4:
                dispatch(addFertilizer({scene: props.plantId, fertilizerType: value.label, season: seasonSettings}))
                dispatch(changeFertilizer(
                    {
                        scene: props.plantId,
                    }))
                setTimeout(()=> {
                    dispatch(changeFertilizer({scene: props.plantId}))
                }, 2000)
                break;
            case 5:
                dispatch(addFertilizer({scene: props.plantId, fertilizerType: value.label, season: seasonSettings}))
                dispatch(changeFertilizer(
                    {
                        scene: props.plantId,
                    }))
                setTimeout(()=> {
                    dispatch(changeFertilizer({scene: props.plantId}))
                }, 2000)
                break;
            case 6:
                dispatch(curePlantDisease({scene: props.plantId, cure: value}));
                dispatch(changeSprayingInsect(
                    {
                        scene: props.plantId,
                    }))
                setTimeout(()=> {
                    dispatch(changeSprayingInsect({scene: props.plantId}))
                }, 2000)
                break;
            case 7:
                dispatch(curePlantDisease({scene: props.plantId, cure: value}));
                dispatch(changeSprayingInsect(
                    {
                        scene: props.plantId,
                    }))
                setTimeout(()=> {
                    dispatch(changeSprayingInsect({scene: props.plantId}))
                }, 2000)
                break;
            case 8:
                dispatch(curePlantDisease({scene: props.plantId, cure: value}));
                dispatch(changeSprayingInsect(
                    {
                        scene: props.plantId,
                    }))
                setTimeout(()=> {
                    dispatch(changeSprayingInsect({scene: props.plantId}))
                }, 2000)
                break;
            case 9:
                dispatch(deletePlant({scene: props.plantId, cure: value}));
                break;
        }
    }
    

    const [mapOfList, setMapOfList] = useState(new Map([
        [1,wateringList],
        [2,fertilizerList],
        [3,diseaseList],
        [4,deleteList]
    ]))

    return (
    <View style={[styles.container,{display: displayHandler()}]}>
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
            <FontAwesomeIcon icon={faTrash} color={'black'} size={30} style={styles.circleFill} />
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