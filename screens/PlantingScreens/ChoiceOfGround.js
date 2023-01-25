import Button from '../../components/ui/Button';
import { useDispatch, useSelector} from "react-redux";
import {createPlant} from "../../store/redux/plants";
import {Image, StyleSheet, Pressable, SafeAreaView, Alert} from "react-native";
import {images, layerImages} from "../../theme/images";
import React, {useState} from "react";
import {countGround, countLighting, checkLightingPlant} from '../../simulationHandler/Simulation';
import {GROUND_ITEMS} from '../../store/dummy-data';



import Modal from 'react-native-modal';
import ActionSheet from "../../components/ui/ActionSheet";

function ChoiceOfGround({route,navigation}){
    const {idPlant, idPlace} = route.params;
    const [choosenId, setChossenId] = useState(false);
    const dispatch = useDispatch();
    const season = useSelector((state) => state.userSettings.season);
    const roomDirection = useSelector((state) => state.userSettings.roomDirection);

    const [actionSheet, setActionSheet] = useState(false);
    const closeActionSheet = () => setActionSheet(false);

    function listOnPress(value){
        const layer = mapOfGround.get(choosenId);
        layer.groundId = value.id;
        layer.nameOfGround = value.label;
        layer.imageSrc = value.images[choosenId-1];
        closeActionSheet();
    }

    const [mapOfGround, setMapOfGround] = useState(new Map([
        [1,{}],
        [2,{}],
        [3,{}],
        [4,{}],
        [5,{}]
    ]));


    function Layer({layerId,src1,src2, top, left, width}){

        return (
            <Pressable style={({pressed}) => (pressed ? styles.buttonPressed :styles.button)} onPress={() => {
                setChossenId(layerId);
                setActionSheet(true);
            }
            } layerId={layerId}>
                {(mapOfGround.get(layerId).imageSrc) ? <Image source={src1} style={[styles.layer,{top: top, left: left, width: width}]}/> :
                    <Image source={src2} style={[styles.layer,{top: top, left: left, width: width}]}/>}
            </Pressable>

                )
    }

    return(

        <SafeAreaView style={styles.rootContainer}>
            <Image source={images.bigPot}  style={styles.bigPot}/>
            <Layer src1={mapOfGround.get(1).imageSrc} src2={layerImages.potLayerBlank1} top={15} left={80} width={240} layerId={1}/>
            <Layer src1={mapOfGround.get(2).imageSrc} src2={layerImages.potLayerBlank2} top={-85} left={60} width={275} layerId={2}/>
            <Layer src1={mapOfGround.get(3).imageSrc} src2={layerImages.potLayerBlank3} top={-170} left={46} width={300} layerId={3}/>
            <Layer src1={mapOfGround.get(4).imageSrc} src2={layerImages.potLayerBlank4} top={-198} left={32} width={320} layerId={4}/>
            <Layer src1={mapOfGround.get(5).imageSrc} src2={layerImages.potLayerBlank5} top={-245} left={28} width={330} layerId={5}/>
            <Button
                title='Dalej'
                onPress={() => {
                    let isEveryLayerField = true;
                    mapOfGround.forEach((value)=> {
                        if (!value?.groundId) {
                            isEveryLayerField = false;
                        }
                    });
                    if(isEveryLayerField) {
                        const groundPoints = countGround(idPlant.correctGround,mapOfGround);
                        const placeSunPoints = countLighting(roomDirection,season,idPlace);
                        const plantLightingPoints = checkLightingPlant(idPlant.maxLighting, idPlant.minLighting,placeSunPoints);
                        navigation.navigate('Simulator')
                        new Promise(() => {
                            dispatch(createPlant(
                                {
                                    idPlant: idPlant.id,
                                    scene: idPlace,
                                    currentImage: idPlant.initialImage,
                                    mapOfGround: mapOfGround,
                                    groundPoints: groundPoints,
                                    plantLightingPoints: plantLightingPoints,
                                    placeSunPoints: placeSunPoints,
                                }))
                        });

                    } else {
                        Alert.alert('Bład wyboru ziemi','Wybierz ziemię dla każdej warstwy, żeby przejść dalej!')
                    }
                }}
            >
                Dalej
            </Button>
            <Modal
                isVisible={actionSheet}
                style={{
                    margin: 0,
                    justifyContent: 'flex-end'
                }}
            >
                <ActionSheet
                    actionItems={GROUND_ITEMS}
                    onPress={listOnPress}
                    onCancel={closeActionSheet}
                />
            </Modal>
        </SafeAreaView>
    )
}

export default ChoiceOfGround;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    bigPot:{
        width: 400,
        height: 400
    },
    button: {
        position: 'absolute'
    },
    buttonPressed: {
        position: 'absolute',
        opacity: 0.2,
    },
    layer: {
        position: 'absolute',
        resizeMode: 'contain'
    },
})