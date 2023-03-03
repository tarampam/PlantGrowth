import Button from '../../components/ui/Button';
import {useState} from "react";
import {View, StyleSheet, FlatList, Pressable, Text, Platform, Image, Alert} from "react-native";
import {Colors} from '../../constants/styles'
import {SIMULATOR_PLANT} from '../../store/local-data'


function CategoryGridTile({title, image, gridId,activePlant, onPress}) {
    return <View style={styles.gridItem}>
        <Pressable android_ripple={{color: '#ccc'}}
                   style={ (gridId === activePlant)? styles.buttonPressed : styles.button
                       //  ({pressed}) => [
                       // [styles.button, pressed ? styles.buttonPressed : null]]
                   }
                   onPress = {onPress}
        >
            <View style={ styles.innerContainer}>
                <Text style={styles.title}>{title}</Text>
                <Image source={image} style={styles.image}/>
            </View>
        </Pressable>
    </View>
}

function PlantSelectionScreen({navigation, route}){
    const [idPlant, setIdPlant] = useState(0);
    const [selectedPlant, setSelectedPlant] = useState({})
    const {idPlace} = route.params;

    function renderPlantItem(itemData) {
        function pressHandler(){
            setIdPlant(itemData.item.id);
            setSelectedPlant(itemData.item);

        }

        return (<CategoryGridTile
            title ={itemData.item.title}
            image={itemData.item.gridImage}
            gridId={itemData.item.id}
            activePlant={idPlant}
            onPress = {pressHandler}
        />);
    }

    return (
        <View style={styles.rootContainer}>
            <FlatList data={SIMULATOR_PLANT} keyExtractor={(item) => item.id}  renderItem={renderPlantItem} numColumns={2}/>
            <View style={styles.button2}>
            <Button
                title='Dalej'
                onPress={() => {
                    if(idPlant === 0){
                        Alert.alert('Błąd wyboru kwiatka','Wybierz kwiatka, żeby przejść dalej!');
                    }else {
                        navigation.navigate('Wybór ziemi', {idPlant: selectedPlant, idPlace: idPlace})
                    }

                }}
            >
                Dalej
            </Button>
            </View>

        </View>
    )
}

export default PlantSelectionScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    gridItem: {
        flex: 1,
        margin:16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',

    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        flex: 1,
        borderRadius: 8,
        borderWidth: 4,
        borderColor: Colors.primary500,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',

    },
    innerContainerPress: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5,
    },
    title: {
        fontSize: 16,
        marginBottom: 10,
    },
    image:{
        height: 80,
        width: 75,
        resizeMode: 'contain',

    },
    button2:{
        marginBottom: 20,
    }

})