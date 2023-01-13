import {createSlice} from "@reduxjs/toolkit";
import { enableMapSet } from 'immer';

enableMapSet();
const createdPlants = createSlice({
    name: 'myPlants',
    initialState: {
        value: new Map([
            [1, {
                idPlant: 0,
                scene: 0,
                name: '',
                currentImage: '',
                currentState: '',
                isActive: false,
                isWatering: false,
                plantLevel: 0,
                wateringLevel: 0,
                sprayLevel: 0,
                sunLevel: 0,
                mapOfGround: {},
                groundLevel: 0,
                fertilizerLevel: 0,
                diseaseLevel: 0,
            }],
            [2, {}],
            [3, {}],
            [4, {}],
            [5, {}],
            [6, {}],
            [7, {}],
            [8, {}],
            [9, {}]
        ]
    )},
    reducers: {
        createPlant: (state, action) => {
            const plant = state.value.get(action.payload.scene);
            plant.idPlant = action.payload.idPlant;
            plant.scene = action.payload.scene;
            plant.name = action.payload.name;
            plant.currentImage = action.payload.currentImage;
            plant.currentState = 'initial';
            plant.isActive = true;
            plant.isWatering = false;
            plant.plantLevel = 1;
            plant.wateringLevel = 0;
            plant.sprayLevel= 0;
            plant.sunLevel = action.payload.sunLevel;
            plant.mapOfGround = action.payload.mapOfGround;
            plant.groundLevel = action.payload.groundLevel;
            plant.fertilizerLevel = 0;
            plant.diseaseLevel = 0;
        },
    }
}
)

export const createPlant = createdPlants.actions.createPlant;
export default createdPlants.reducer;