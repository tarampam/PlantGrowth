import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Alert} from "react-native";

export const savePlants = async (plants) => {
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userId');
    if (!token || !userId) {
        return
    }
    await axios.put(`https://coursern-67fb2-default-rtdb.firebaseio.com/userData/${userId}.json?auth=` + token, {
        userPlants: plants
    }).then(response => {
    }).catch(e => {
        Alert.alert('Błąd zapisu do bazy danych', 'Zapis do bazy danych się nie powiódł');
        console.log(e)
    })
}

export const getPlants = async () => {
    let plants = new Map();
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userId');
    if (!token || !userId) {
        return
    }
    await axios.get(`https://coursern-67fb2-default-rtdb.firebaseio.com/userData/${userId}.json?auth=` + token)
        .then(response => {
            const mapFromDatabase = Object.entries(JSON.parse(response.data.userPlants));
            mapFromDatabase.forEach((element, index, array) => {
                array[index][0] = parseInt(array[index][0]);
            });
            plants = new Map(mapFromDatabase);
    }).catch(e => {
            Alert.alert('Błąd odczytu z bazy danych', 'Odczyt z bazy danych się nie powiódł');
        console.log(e)
    })
    return plants;
}