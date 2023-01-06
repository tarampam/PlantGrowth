import Button from '../../components/ui/Button';
import {useNavigation} from '@react-navigation/native'

function PlantSelectionScreen(){
    const navigation = useNavigation();
    return (
        <Button
            title='Dalej'
            onPress={() => {
                navigation.navigate('Wybór ziemi')
            }}
        >
            Dalej
        </Button>
    )
}

export default PlantSelectionScreen;