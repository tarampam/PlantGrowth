import {View, Text, StyleSheet} from 'react-native';
import {Colors} from "../../constants/styles";

function Subtitle({children}){
    return <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
    </View>
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: Colors.primary500,
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitleContainer: {
        margin: 4,
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 2,
        textAlign: 'center',
        borderBottomColor: Colors.primary500,
        borderBottomWidth: 2,
    }
});