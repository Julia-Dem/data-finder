import React, {useContext} from "react"
import {Context} from "../context/context"

export const ChoiceVolume = () => {
    const {getSmallData,getBigData} = useContext(Context)

    const changeHandler = (e) =>{
        switch (e.target.value){
            case "big":
                getBigData()
                break;
            case "small":
                getSmallData()
                break;
            default:
                break;
        }
    }
    return (
        <div className="mb-2">
            <select onChange={changeHandler} className="custom-select" >
                <option value="select data volume">Select data volume</option>
                <option value="big">Big data</option>
                <option value="small">Small data</option>
            </select>
        </div>
)
}
