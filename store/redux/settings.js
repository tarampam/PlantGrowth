import {createSlice} from "@reduxjs/toolkit";

const userSettings = createSlice({
    name: 'settings',
    initialState: {
        season: 'wiosna',
        roomDirection: 'południe',
        isGameLoopActive: false
    },
    reducers: {
        changeSeason: (state, action) => {
            state.season = action.payload.season;
        },
        changeRoomDirection: (state, action) => {
            state.roomDirection = action.payload.roomDirection;
        },
        changeGameLoopActive: (state, action) => {
            state.isGameLoopActive = action.payload.isGameLoopActive;
        }
    }
})


export const changeSeason = userSettings.actions.changeSeason;
export const changeRoomDirection = userSettings.actions.changeRoomDirection;
export const changeGameLoopActive = userSettings.actions.changeGameLoopActive;
export default userSettings.reducer;