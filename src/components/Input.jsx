import React, {useState} from "react"
import {Error} from "./Error"


export const Input = ({placeholder, valid=true, name, onChange, value, type='text', onEnterPress=()=>{}}) => {
    const [editing, setEditing] = useState(true)
    const [isVisits, setIsVisits] = useState(false)
    const showError = ((!valid && !editing && isVisits) ||(!isVisits && value && !valid))

    const keyPressHandler = (e) =>{
        if (e.key === 'Enter') {
            setEditing(false)
            onEnterPress()
        }
    }
    return (
        <>
            <input
                placeholder={placeholder}
                type={type}
                name={name}
                value={value}
                onChange={(e) => onChange(e)}
                onBlur={() => setEditing(false)}
                onKeyPress={(e)=>keyPressHandler(e)}
                onFocus={() => {
                    setIsVisits(true)
                    setEditing(true)
                }}
                className={`form-control form-control__custom bg-light ${showError && 'border-danger'}`}/>

            {showError && <Error text="Enter correct data" classCss='alert-custom'/>}
        </>
    )
}


