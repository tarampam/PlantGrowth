import {PLANTS} from "../store/dummy-data";
import PlantList from "../components/PlantList/PlantList";
import {useState} from "react";
import SafeAreaView from "react-native-safe-area-view";
import {TextInput, StyleSheet} from "react-native";

function SearchingPlantScreen() {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(PLANTS);

    const searchFilterFunction = (text) => {
        if (text) {
            const newData = PLANTS.filter(
                function (item) {
                    const itemData = item.title
                        ? item.title.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            setFilteredDataSource(PLANTS);
            setSearch(text);
        }
    };


    return(
        <SafeAreaView style={{flex: 1}}>
            <TextInput
                style={styles.textInputStyle}
                onChangeText={(text) => searchFilterFunction(text)}
                value={search}
                underlineColorAndroid="transparent"
                placeholder="Wyszukaj roślinę"
                placeholderTextColor={'black'}
            />
            <PlantList items={filteredDataSource}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    itemStyle: {
        padding: 10,
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
    },
});

export default SearchingPlantScreen;