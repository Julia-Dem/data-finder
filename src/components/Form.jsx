import React from "react"
import {Input} from './Input'

export const Form = ({fields, fieldNames, changeHandler, onSubmit}) => {
    return ( <form>
            <h5 className="text-center">Fill in all form fields</h5>
            <div className="input-group input-container">
                {fieldNames.map((name, i) => (
                    <Input key={i}
                           type={(name === 'email' && 'email') || (name === 'id' && 'number') || (name === 'phone' && 'tel') || "text"}
                           value={fields[name].value}
                           valid={fields[name].valid}
                           name={name}
                           aria-label={name}
                           onChange={changeHandler}
                           onEnterPress={onSubmit}
                           placeholder={name[0].toUpperCase() + name.slice(1)}/>
                ))}
            </div>
        </form>
    )
}
