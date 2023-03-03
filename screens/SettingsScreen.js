import React, {useState} from 'react';
import {
    StyleSheet, FlatList, View, TouchableOpacity, Text
} from 'react-native';
import {mapOfSettings} from "../store/local-data";
import {Colors} from "../constants/styles";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {useDispatch, useSelector} from "react-redux";

import Modal from 'react-native-modal';
import ActionSheet from "../components/ui/ActionSheet";
import {changeSeason,changeRoomDirection} from '../store/redux/settings';


function SettingsScreen() {
    const [actionSheet, setActionSheet] = useState(false);
    const [onPressId, setOnPressId] = useState('');
    const season = useSelector((state) => state.userSettings.season);
    const roomDirection = useSelector((state) => state.userSettings.roomDirection);
    const dispatch = useDispatch();
    function renderPlantItem(itemData) {
        const closeActionSheet = () => setActionSheet(false);
        const item = itemData.item;

        function listOnPress(value) {
            closeActionSheet();
            switch(onPressId){
                case 'Pora roku':
                    dispatch(changeSeason({season: value.label}));
                    break;
                case 'Strona świata pokoju':
                    dispatch(changeRoomDirection({roomDirection: value.label}))
                    break;
            }
        }
    return (
            <View >
                <TouchableOpacity activeOpacity={0.7} style={styles.item} onPress={()=> {
                    setOnPressId(item)
                    setActionSheet(true)}}>
                    <Text style={styles.text}>{item}: <Text style={styles.span}>{(item === 'Pora roku') ? season : roomDirection}</Text></Text>
                    <FontAwesomeIcon icon={faCaretDown} color={'white'} size={30}/>
                </TouchableOpacity>
                <Modal
                    isVisible={actionSheet}
                    style={{
                        margin: 0,
                        justifyContent: 'flex-end'
                    }}
                >
                    <ActionSheet
                        actionItems={mapOfSettings.get(onPressId)}
                        onCancel={closeActionSheet}
                        onPress={listOnPress}
                    />
                </Modal>
            </View>
        );
    }
    return (
        <>
            <View style ={styles.container}>
                <FlatList data={Array.from(mapOfSettings.keys())} keyExtractor={(item, index) => index.toString()} renderItem={renderPlantItem}
                />
            </View>
        </>
    );
}

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        flex: 1
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 2,
        borderColor: Colors.primary100,
        backgroundColor: '#9ab366',

    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'

    },
    span: {
        color: 'black'
    }
});
