import PlantItem from "./PlantItem";
import {FlatList, StyleSheet, View} from "react-native";

function PlantList({items}) {
    function renderPlantItem(itemData) {
        const item = itemData.item;

        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            soil: item.soil,
            position: item.position,
            humidity: item.humidity,
        };
        return (
            <PlantItem {...mealItemProps}/>
        );
    }
    return(
        <View style ={styles.container}>
            <FlatList data={items} keyExtractor={(item, index) => index.toString()} renderItem={renderPlantItem}
            />
        </View>
    )
}

export default PlantList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})