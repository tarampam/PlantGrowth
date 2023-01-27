import {GROUND_ITEMS, cureDiseaseMap} from '../store/dummy-data';
import {worldDirectionMap, seasonsMap, scenesMap, fertilizerDurationSeason} from '../constants/staticResource';
import {levelTwoPoints,levelThreePoints, maxDiseaseDuration} from '../constants/staticResource';

export const processPlant = (plant, simulatorPlantsMap) => {
    if (!plant.isAlive){
        return;
    }
    const plantInfo = simulatorPlantsMap.get(plant.idPlant);
    countPoints(plant,plantInfo)

    decreaseHumidity(plant,plantInfo);
    diseaseHelper(plant, plantInfo);
    increaseDiseaseLevel(plant, plantInfo);
    checkFertilizerDuration(plant, plantInfo);
    overwateringHandler(plant, plantInfo);
    wiltingHandler(plant, plantInfo);
}

const countPoints = (plant, plantInfo) => {
    if (plant.diseaseLevel > 0 || plant.overwateringLevel >0 || plant.wiltingLevel >0){
        return;
    }
    let plantPoints = 0;
    plantPoints += plant.groundPoints;
    plantPoints += plant.plantLightingPoints;
    plantPoints += countHumidityPoints(plantInfo, plant.humidityPoints);
    plantPoints += plant.fertilizerPoints;
    plant.plantPoints += plantPoints;

    if(plant.plantPoints >= levelThreePoints){
        plant.plantLevel = 3;
        plant.currentImage = plantInfo.levelThreeImage;
    } else if (plant.plantPoints >=levelTwoPoints){
        plant.plantLevel = 2;
        plant.currentImage = plantInfo.levelTwoImage;
    } else {
        plant.plantLevel = 1;
        plant.currentImage = plantInfo.initialImage;
    }
}
//wilting
export const wiltingHandler = (plant, plantInfo) => {
    if ((plant.placeSunPoints > plantInfo.maxLighting || plant.humidityPoints < plantInfo.minHumidity)
    && plant.diseaseLevel === 0){
        if (plant.wiltingLevel === 0) {
            plant.wiltingCycle++;
            if  (plant.wiltingCycle > 5) {
                plant.wiltingLevel = 1;
            } else{
                return;
            }
        }

        plant.wiltingCycle++;
        if  (plant.wiltingCycle > 5) {
            plant.wiltingCycle = 0;
            plant.wiltingLevel++;
        }

        if (plant.wiltingLevel > 3) {
            setDeadPlant(plant, plantInfo)
        }
        if (plant.plantLevel === 1) {
            plant.currentImage = plantInfo.wiltingLevelOne;
        } else if (plant.plantLevel === 2) {
            plant.currentImage = plantInfo.wiltingLevelTwo;
        } else if (plant.plantLevel === 3) {
            plant.currentImage = plantInfo.wiltingLevelThree;
        }
    } else {
        plant.wiltingLevel = 0;
        plant.wiltingCycle = 0;
    }
}

//overwatering
export const overwateringHandler = (plant, plantInfo) => {
    if(plant.humidityPoints > plantInfo.maxHumidity + 100){
        plant.overwateringLevel = 3;
        setDeadPlant(plant, plantInfo)
    } else if(plant.humidityPoints > plantInfo.maxHumidity + 50){
        plant.overwateringLevel = 2;
    } else if(plant.humidityPoints > plantInfo.maxHumidity){
        plant.overwateringLevel = 1;
        if(plant.plantLevel === 1){
            plant.currentImage = plantInfo.overwateringLevelOne;
        } else if (plant.plantLevel === 2){
            plant.currentImage = plantInfo.overwateringLevelTwo;
        } else {
            plant.currentImage = plantInfo.overwateringLevelThree;
        }
    } else {
        plant.overwateringLevel = 0;
    }

}

//disease
export const decreaseHumidity = (plant, plantInfo) => {
    const shadowLevel = Math.round(plant.placeSunPoints/30);
    const decreaseAlgorithm = shadowLevel + plantInfo.decreaseHumidityRate;
    plant.humidityPoints -= plant.humidityPoints - decreaseAlgorithm < 0? 0 : decreaseAlgorithm;
}

export const diseaseHelper = (plant, plantInfo) => {
    if(plant.diseaseLevel > 0){
        return;
    }
    const randomNumber = Math.floor(Math.random() * 100) +1;
    const typeOfDisease = plantInfo.diseaseArray[Math.floor(Math.random() * plantInfo.diseaseArray.length)];
    const diseaseRate = plantInfo.diseaseRate;
    if (randomNumber >=1 && randomNumber <= diseaseRate){
        plant.diseaseLevel = 1;
        plant.currentImage = plantInfo.sickPlantImage;
        plant.typeOfDisease = typeOfDisease;
    }
}

export const increaseDiseaseLevel = (plant, plantInfo) => {
    if(plant.diseaseLevel === 0){
        return;
    }
    plant.currentDiseaseCycle++;
    if (plant.currentDiseaseCycle === maxDiseaseDuration){
        plant.diseaseLevel++;
        plant.currentDiseaseCycle = 0;
        if (plant.diseaseLevel ===3){
            setDeadPlant(plant, plantInfo);
        }
    }
}


export const cureDisease = (plant, cure) => {
    if( plant.diseaseLevel < 1){
        return;
    }
    const diseasePlant = plant.typeOfDisease;
    if(cure.id === cureDiseaseMap.get(diseasePlant).id){
        plant.diseaseLevel--;
        if (plant.diseaseLevel < 1) {
            plant.typeOfDisease = '';
        }
    }
}

//fertilizer
export const fertilizerHelper = (plant, plantInfo, season) => {
    if(plant.fertilizerPoints > 0){
        plant.wiltingLevel = 1;
        return;
    }
    const goodFertilizer = plantInfo.fertilizerType;
    const plantFertilizer = plant.fertilizerType;
    if(goodFertilizer.includes(plantFertilizer) && fertilizerDurationSeason.includes(season)){
        plant.fertilizerPoints = 100;
    } else {
        plant.fertilizerPoints = 0;
    }
}

export const checkFertilizerDuration = (plant, infoPlant) => {
    if(plant.fertilizerPoints > 0) {
        plant.fertilizerCurrentCycle++;
    }
    if(plant.fertilizerCurrentCycle === infoPlant.fertilizerDuration) {
        plant.fertilizerPoints = 0;
        plant.fertilizerCurrentCycle = 0;
    }
}

//dead Plant
const setDeadPlant = (plant, plantInfo) => {
    plant.isAlive = false;
    plant.currentImage = plantInfo.deadPlantLevelOne;
}

//lighting
export const countLighting = (roomDirection, season, scene) => {
    return (worldDirectionMap.get(roomDirection) + seasonsMap.get(season)) * scenesMap.get(scene);
}

export const checkLightingPlant = (maxLightingPlant, minLightingPlant, lightingPoints) => {
    let lighting;
    let r = 0;
    if (lightingPoints >= minLightingPlant && lightingPoints <= maxLightingPlant) {
        lighting = 120;
    } else {
        r = countDifference(lightingPoints, maxLightingPlant, minLightingPlant);

        if (r <= 10) {
            lighting = 120 - r;
        } else if (r > 10 && r <= 30) {
            lighting = 120 - r * 1.5;
        } else if (r > 30 && r <= 50) {
            lighting = 120 - r * 1.8;
        } else if (r > 50 && r <= 60) {
            lighting = 120 - r * 2;
        } else {
            lighting = 0;
        }

    }
    return lighting;

}

//ground
export const countGround = (correctGroundList, userMapOfGround) => {
    let groundPoints = 0;
    const correctGroundMap = new Map(correctGroundList.map((obj) => [obj.numberOfLayer, obj.idGround]));
    const groundsMap = new Map(GROUND_ITEMS.map((obj) => [obj.id, obj]));

    if (!isValidateGrounds(userMapOfGround, groundsMap)) {
        return groundPoints;
    }
    userMapOfGround.forEach((value, key, map) => {
        if (value.groundId === undefined) {
            return;
        }

        const correctKey = correctGroundMap.get(key);
        const correctLeftKey = correctGroundMap.get(key - 1);
        const correctRightKey = correctGroundMap.get(key + 1);
        if (correctKey === value.groundId) {
            groundPoints += 20;
        } else if (correctLeftKey === value.groundId || correctRightKey === value.groundId) {
            groundPoints += 17;
        } else if (groundsMap.get(correctKey).soilFertility === groundsMap.get(value.groundId).soilFertility) {
            groundPoints += 12;
        } else if (groundsMap.get(correctLeftKey) !== undefined
            && groundsMap.get(correctLeftKey).soilFertility === groundsMap.get(value.groundId).soilFertility
            || groundsMap.get(correctRightKey) !== undefined
            && groundsMap.get(correctRightKey).soilFertility === groundsMap.get(value.groundId).soilFertility) {
            groundPoints += 7;
        } else if (groundsMap.get(value.groundId).soilFertility === 1) {
            groundPoints += 4;
        }
    })
    return groundPoints;
}

const isValidateGrounds = (userMapOfGround, groundsMap) => {
    let countSoilFertility = 0;
    userMapOfGround.forEach((value, key, map) => {
        if (groundsMap.get(value.groundId).soilFertility === 0) {
            countSoilFertility++;
        }
    })

    return countSoilFertility < 5;
}
//humidity
export const increaseHumidity = (isSpraying) => {
    return isSpraying ? 10 : 30;
}

const countHumidityPoints = (plantInfo, humidityPoints) => {
    if (humidityPoints >= plantInfo.minHumidity && humidityPoints <= plantInfo.maxHumidity) {
        return 100;
    } else if (humidityPoints === 0) {
        return 0;
    } else {
            return 100 - countDifference(humidityPoints, plantInfo.maxHumidity, plantInfo.minHumidity);
        }
}

const countDifference = (currentState, maxState, minState) => {
    let maxDiff = currentState - maxState;
    let minDiff = currentState - minState;
    if (maxDiff < 0 && minDiff < 0) {
        maxDiff = maxDiff * (-1);
        minDiff = minDiff * (-1);
    }
    return maxDiff > minDiff ? minDiff : maxDiff;
}
