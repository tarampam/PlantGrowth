import {StyleSheet, Text, View} from "react-native";

function PlantDetails({humidity, position, soil, style, textStyle}) {
    return(
        <View style={[styles.details, style]}>
            <Text style={[styles.detailItem, textStyle]}><Text style={styles.spanText}>Gleba: </Text>{soil}</Text>
            <Text style={[styles.detailItem, textStyle]}><Text style={styles.spanText}>Wilgotność: </Text>{humidity}</Text>
            <Text style={[styles.detailItem, textStyle]}><Text style={styles.spanText}>Stanowisko: </Text>{position}</Text>
        </View>
    )
}

export default PlantDetails;

const styles=StyleSheet.create({
    details: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 6,
        fontSize: 14,
    },
    spanText: {
        fontWeight: 'bold',
    }
});