import React, {useReducer} from 'react'
import axios from 'axios'
import {reducer} from "./reduser"
import {Context} from "./context"
import {SET_SMALL_LOADING, SET_BIG_LOADING, SMALL_DATA, BIG_DATA, SET_SMALL_VOLUME, SET_INFO, ADD_DATA, SET_ERROR} from "./types"


export const State = ({children}) => {
    const fillUrl = (vol, delay = '') => (`http://www.filltext.com/?rows=${vol}&id={number|1000}&firstName={firstName}${delay}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
    const initialState = {
        data: [],
        errors: null,
        info: null,
        smallVolume: null,
        smallLoading: false,
        bigLoading: false
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    const setSmallLoading = (loading) => dispatch({type: SET_SMALL_LOADING, loading})
    const setBigLoading = (loading) => dispatch({type: SET_BIG_LOADING, loading})
    const setSmallVolume = (smallVolume) => dispatch({type: SET_SMALL_VOLUME, smallVolume})

    const getSmallData = async () => {
        setSmallLoading(true)
        const VOLUME_DATA = 32
        if (state.data.length >= VOLUME_DATA) {
            setSmallVolume(VOLUME_DATA)
            return
        }
        try{
            const response = await axios.get(fillUrl(VOLUME_DATA))
            dispatch({
                type: SMALL_DATA,
                payload: response.data,

            })
        }catch (e){
            setSmallLoading(false)
            dispatch({
                type: SET_ERROR,
                error: 'Error while loading data from server'
            })
        }
        
    }

    const getBigData = async () => {
        const VOLUME_DATA = 1000
        if (state.data.length >= VOLUME_DATA) {
            setSmallVolume(null)
            return
        }
        setBigLoading(true)
        try{
            await getSmallData()
            const response = await axios.get(fillUrl(VOLUME_DATA, '&delay=3'))
            dispatch({
                type: BIG_DATA,
                payload: response.data
            })
        }catch (e){
            setBigLoading(false)
            dispatch({
                type: SET_ERROR,
                error: 'Error while loading data from server'
            })
        }

    }
    const setInfo = (obj) => {
        dispatch({
            type: SET_INFO,
            obj
        })
    }

    const addData = (obj) => {
        dispatch({
            type: ADD_DATA,
            obj
        })
    }

    return (
        <Context.Provider value={{...state, setInfo, getBigData, getSmallData, addData}}>
            {children}
        </Context.Provider>
    )
}
