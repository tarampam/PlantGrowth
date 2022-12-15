import { StyleSheet, Text, View, ImageBackground, Image, StatusBar } from 'react-native';
import Button from '../components/ui/Button'
import {useNavigation} from '@react-navigation/native'
import {images} from '../theme/images'
import {Colors} from '../constants/styles'

function StartScreen () {
    const navigation = useNavigation();
    return (
    <View style={styles.root}>
      <ImageBackground source={images.bg_home} resizeMode="cover" style={styles.image}>
        <StatusBar barStyle="light-content" />
        <View>
            <Image source={images.logo} style={styles.image_l}></Image>
            <Text style={styles.title2}><Text style={styles.title}>Plant</Text>Growth</Text>
            <Text style={styles.subtitle}>Naucz się jak pielęgnować rośliny!</Text>
        </View>
        <View>
            <Button
            //style={StyleSheet.create({ marginBottom: 10 })}
            title="Logowanie"
            onPress={() => {
                navigation.navigate('Login');
            }}
            >Logowanie
            </Button>
            <Button
            title="Rejestracja"
            onPress={() => {
                navigation.navigate('Signup');
            }}
            >
                Rejestracja
            </Button>
        </View>
      </ImageBackground>
    </View>
    )
}

export default StartScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
      },
      image: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignSelf: 'stretch',
      },
      image_l:{
        alignSelf: 'center',
        width: 100,
        height: 110,
      },
      title: {
        alignSelf: 'center',
        fontSize: 35,
        marginTop: 10,
        color: '#404040',
      },
      title2: {
        alignSelf: 'center',
        fontSize: 35,
        marginTop: 10,
        color: Colors.primary500,
      },
      subtitle: {
        alignSelf: 'center',
        fontSize: 18,
        marginTop: 5,
        color: '#404040',
      },
});