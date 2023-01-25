import {useDispatch, useSelector} from "react-redux";
import {countSimulationPoints} from "../store/redux/plants";
import {changeGameLoopActive} from "../store/redux/settings";

export function Run() {
    const isGameLoopActive = useSelector((state) => state.userSettings.isGameLoopActive);
    const dispatch = useDispatch();
    if (isGameLoopActive === false) {
        const interval = setInterval(() => {
            dispatch(countSimulationPoints())
        }, 3000);

        setTimeout(() => {
            dispatch(changeGameLoopActive({
                isGameLoopActive: true,
            }))
        }, 1)
    }
    return <></>
}