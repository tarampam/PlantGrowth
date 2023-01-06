import Button from '../../components/ui/Button';
import {useNavigation} from '@react-navigation/native'

function ChoiceOfGround(){
    const navigation = useNavigation();
    return(
        <Button
            title='Dalej'
            onPress={() => {
                navigation.navigate('Simulator')
            }}
        >
            Dalej
        </Button>
    )
}

export default ChoiceOfGround;