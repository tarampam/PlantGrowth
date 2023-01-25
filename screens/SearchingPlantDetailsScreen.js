import {PLANTS} from "../store/dummy-data";
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import PlantDetails from "../components/PlantList/PlantDetails";
import Subtitle from '../components/PlantList/Subtitle';
import List from "../components/PlantList/List";


function SearchingPlantDetailsScreen({route}) {
    const plantId = route.params.mealId;
    const selectPlant = PLANTS.find((plant) => plant.id === plantId);
    return(
        <ScrollView style={styles.rootContainer}>
            <Image source={{uri: selectPlant.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{selectPlant.title} </Text>
            <PlantDetails
                humidity={selectPlant.humidity}
                position={selectPlant.position}
                soil={selectPlant.soil}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Najlepsza konfiguracja podłoża:</Subtitle>
                    <List data={selectPlant.grounds}/>
                    <Subtitle>Wymagania i uprawa</Subtitle>
                    <List data={selectPlant.requirements}/>
                    <Subtitle>Zastosowanie</Subtitle>
                    <List data={selectPlant.usage}/>
                </View>
            </View>
        </ScrollView>
    )
}

export default SearchingPlantDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'black',

    },
    detailText: {
        color:'black',
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width:'90%'
    },
})