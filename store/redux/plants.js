import {createSlice} from "@reduxjs/toolkit";
import { enableMapSet } from 'immer';
import {SIMULATOR_PLANT} from '../local-data';
import {processPlant,cureDisease, fertilizerHelper} from '../../simulationHandler/Simulation';
import {savePlants} from "../../util/plantEndpoints";

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
                isAlive: true,
                isWatering: false,
                isSprayingWater: false,
                isFertilizer: false,
                isSprayingInsect: false,
                placeSunPoints: 0, //punkty jakie otrzymuje stanowisko w konfiguracji strony świata i pory roku
                mapOfGround: {}, //mapa ziemi kwiatka
                missedGroundPoints: 0, //stracone punkty ziemi
                fertilizerPoints: 0,
                fertilizerCurrentCycle: 0,
                fertilizerType: '',
                currentDiseaseCycle: 0,
                diseaseLevel: 0,
                typeOfDisease: '',


                plantLevel: 0,
                plantPoints: 0,
                groundPoints: 0, //punkty jakie otrzymuje kwiatek po wybraniu odpowiedniej ziemi
                plantLightingPoints: 0, //punkty jakie otrzymuje kwiatek po uwzględnieniu zapotrzebowania
                humidityPoints: 0, //punkty wilgotności, na które nakłada się podlewanie i spryskiwanie
                overwateringLevel: 0,
                wiltingLevel: 0,
                wiltingCycle: 0,
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
        ),
    },
    reducers: {
        createPlant: (state, action) => {
            const plant = state.value.get(action.payload.scene);
            plant.idPlant = action.payload.idPlant;
            plant.scene = action.payload.scene;
            plant.name = action.payload.name;
            plant.currentImage = action.payload.currentImage;
            plant.currentState = 'initial';
            plant.isActive = true;
            plant.isAlive = true;
            plant.isWatering = false;
            plant.isSprayingWater = false;
            plant.isFertilizer = false;
            plant.isSprayingInsect = false;
            plant.plantLevel = 1;
            plant.placeSunPoints = action.payload.placeSunPoints;
            plant.humidityPoints = 0;
            plant.plantLightingPoints = action.payload.plantLightingPoints;
            plant.mapOfGround = action.payload.mapOfGround;
            plant.groundPoints = action.payload.groundPoints;
            plant.missedGroundPoints = 100 - action.payload.groundPoints;
            plant.fertilizerPoints = 0;
            plant.fertilizerCurrentCycle = 0;
            plant.fertilizerType = '';
            plant.currentDiseaseCycle = 0;
            plant.diseaseLevel = 0;
            plant.typeOfDisease = '';
            plant.plantPoints = 0;
            plant.overwateringLevel = 0;
            plant.wiltingLevel = 0;
            plant.wiltingCycle = 0;
        },
        changeWatering: (state, action) => {
            const plant = state.value.get(action.payload.scene);
            plant.wateringPoints = action.payload.wateringPoints;
            plant.humidityPoints += action.payload.humidityPoints;
        },
        changeSprayingWater: (state, action) => {
            const plant = state.value.get(action.payload.scene);
            plant.humidityPoints += action.payload.humidityPoints;
        },
        changeWateringFlag: (state, action) => {
            const plant = state.value.get(action.payload.scene);
            plant.isWatering = !(plant.isWatering);
        },
        changeSprayingFlag: (state, action) => {
            const plant = state.value.get(action.payload.scene);
            plant.isSprayingWater = !(plant.isSprayingWater);
        },
        changeFertilizer: (state, action) => {
            const plant = state.value.get(action.payload.scene);
            plant.isFertilizer = !(plant.isFertilizer);
        },
        changeSprayingInsect: (state, action) => {
            const plant = state.value.get(action.payload.scene);
            plant.isSprayingInsect = !(plant.isSprayingInsect);
        },
        curePlantDisease: (state,action) => {
            const plant = state.value.get(action.payload.scene);
            const cure = action.payload.cure;
            cureDisease(plant,cure);
        },
        addFertilizer: (state,action) => {
            const plant = state.value.get(action.payload.scene);
            plant.fertilizerType = action.payload.fertilizerType;
            const simulatorPlantsMap = new Map(SIMULATOR_PLANT.map((obj) => [obj.id, obj]));
            fertilizerHelper(plant, simulatorPlantsMap.get(plant.idPlant), action.payload.season);
        },
        countSimulationPoints: (state, action) => {
            const createdPlant = state.value;
            const simulatorPlantsMap = new Map(SIMULATOR_PLANT.map((obj) => [obj.id, obj]));
            createdPlant.forEach((value, key, map) => {
                if (!value.isActive){
                    return;
                }
                processPlant(value, simulatorPlantsMap);
            });
            savePlants(JSON.stringify(Object.fromEntries(createdPlant)))
        },
        deletePlant: (state, action) => {
            const plant = state.value.get(action.payload.scene);
            plant.idPlant = 0;
            plant.scene = 0;
            plant.name = '';
            plant.currentImage = '';
            plant.currentState = '';
            plant.isActive = false;
            plant.isAlive = true;
            plant.isWatering = false;
            plant.isSprayingWater = false;
            plant.isFertilizer = false;
            plant.isSprayingInsect = false;
            plant.plantLevel = 0;
            plant.placeSunPoints = 0;
            plant.humidityPoints = 0;
            plant.plantLightingPoints = 0;
            plant.mapOfGround = {};
            plant.groundPoints = 0;
            plant.missedGroundPoints = 0;
            plant.fertilizerPoints = 0;
            plant.fertilizerCurrentCycle = 0;
            plant.fertilizerType = '';
            plant.currentDiseaseCycle = 0;
            plant.diseaseLevel = 0;
            plant.typeOfDisease = '';
            plant.plantPoints = 0;
            plant.overwateringLevel = 0;
            plant.wiltingLevel = 0;
            plant.wiltingCycle = 0;
        },
        setPlantsData: (state, action) => {
            state.value = action.payload.plants;
        }
    }
}
)


export const createPlant = createdPlants.actions.createPlant;
export const changeWatering = createdPlants.actions.changeWatering;
export const changeSprayingWater = createdPlants.actions.changeSprayingWater;
export const changeWateringFlag = createdPlants.actions.changeWateringFlag;
export const changeSprayingFlag = createdPlants.actions.changeSprayingFlag;
export const changeFertilizer = createdPlants.actions.changeFertilizer;
export const changeSprayingInsect = createdPlants.actions.changeSprayingInsect;
export const countSimulationPoints = createdPlants.actions.countSimulationPoints;
export const curePlantDisease = createdPlants.actions.curePlantDisease;
export const addFertilizer = createdPlants.actions.addFertilizer;
export const deletePlant = createdPlants.actions.deletePlant;
export const setPlantsData = createdPlants.actions.setPlantsData;
export default createdPlants.reducer;