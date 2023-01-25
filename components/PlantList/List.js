import {Text, View, StyleSheet} from 'react-native';
import {Colors} from "../../constants/styles";

function List({data}){
    return data.map((dataPoint) => (
        <View key={dataPoint} style={styles.listItem}>
            <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
    ));
}

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical:4,
        marginHorizontal: 12,
        backgroundColor: Colors.primary500,
    },
    itemText: {
        color: 'white',
        textAlign: 'center',
    }
})