const north = 'północ';
const east = 'wschód';
const west = 'zachód';
const south = 'południe';

const winter = 'zima';
const autumn = 'jesień';
const spring = 'wiosna';
const summer = 'lato';

export const levelOnePoints = 0;
export const levelTwoPoints = 2000;
export const levelThreePoints = 4000;

export const maxDiseaseDuration = 10;

export const  fertilizerDurationSeason = [spring,summer,autumn];

export const worldDirectionMap = new Map([
    [north, 5],
    [east, 10],
    [west, 15],
    [south, 20],
]);

export const seasonsMap = new Map([
    [winter, 5],
    [autumn, 10],
    [spring, 15],
    [summer, 20],
]);

export const scenesMap = new Map([
    [1,3],
    [2,3],
    [3,3],
    [4,2],
    [5,2],
    [6,2],
    [7,1],
    [8,1],
    [9,1],
]);



