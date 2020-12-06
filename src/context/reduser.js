import {SET_SMALL_LOADING, SET_BIG_LOADING, SMALL_DATA, BIG_DATA, SET_SMALL_VOLUME, SET_INFO, ADD_DATA, SET_ERROR} from "./types"
import {getWithoutDuplicatesArray} from "../utils"

const handlers = {
    [SMALL_DATA]: (state, {payload, smallVolume=null}) => ({
        ...state,
        data: payload,
        sortingData: [],
        smallLoading: false,
        sortingType: null,
        error: null,
        smallVolume
    }),
    [BIG_DATA]: (state, {payload}) => ({
        ...state,
        data: getWithoutDuplicatesArray([...state.data, ...payload], 'id', 'firstName'),
        sortingData: [],
        bigLoading: false,
        smallVolume: null,
        error: null,
        sortingType: null
    }),
    [ADD_DATA]: (state, {obj}) => ({...state, data: [obj, ...state.data]}),
    [SET_INFO]: (state, {obj}) => ({...state, info: obj}),
    [SET_ERROR]: (state, {error}) => ({...state, error}),
    [SET_SMALL_VOLUME]: (state, {smallVolume}) => ({...state, smallVolume, smallLoading: false, sortingType: null,sortingData: []}),
    [SET_SMALL_LOADING]: (state, {loading}) => ({...state, smallLoading: loading}),
    [SET_BIG_LOADING]: (state, {loading}) => ({...state, bigLoading: loading}),
    DEFAULT: state => state
}

export const reducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}
