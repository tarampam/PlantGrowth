import Button from '../../components/ui/Button';
import {useState} from "react";
import {View, StyleSheet, FlatList, Pressable, Text, Platform, Image} from "react-native";
import {images} from "../../theme/images";
import {Colors} from '../../constants/styles'

export const CATEGORIES = [
    {id:'1', title:'Monstera', image: images.logo},
{id:'2', title:'Pilea', image:images.logo},
{id:'3', title:'Filodendron', image:images.logo},
{id:'4', title:'Dracena obrzeżona', image:images.logo},
{id:'5', title:'Sensiwiera', image:images.logo},
{id:'6', title:'Storczyk falenopsis', image:images.logo},
];

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
    const {idPlace} = route.params;

    function renderPlantItem(itemData) {
        function pressHandler(){
            setIdPlant(itemData.item.id);

        }

        return (<CategoryGridTile
            title ={itemData.item.title}
            image={itemData.item.image}
            gridId={itemData.item.id}
            activePlant={idPlant}
            onPress = {pressHandler}
        />);
    }

    return (
        <View style={styles.rootContainer}>
            <FlatList data={CATEGORIES} keyExtractor={(item) => item.id}  renderItem={renderPlantItem} numColumns={2}/>
            <View style={styles.button2}>
            <Button
                title='Dalej'
                onPress={() => {
                    console.log(idPlant)
                    navigation.navigate('Wybór ziemi', {idPlant: idPlant, idPlace: idPlace})

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
    },
    button2:{
        marginBottom: 20,
    }

})