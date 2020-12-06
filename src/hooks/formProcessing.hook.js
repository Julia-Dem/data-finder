import {useState} from 'react'
import { isFormValid} from "../utils";


export const useFormProgressing = (initialFields, submitData) => {

    const [editMode, setEditMode] = useState(false)
    const [fields, setFields] = useState(initialFields)
    const fieldNames =   Object.keys(fields)

    const allFieldsValid = fieldNames.every(field => fields[field].valid)

    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value.trim()
        const valid = isFormValid(name, value)
        setFields({...fields, [name]: {...[name], value, valid}})

    }
    const showToggle = () => {
        if (editMode) setFields(initialFields)
        setEditMode(!editMode)
    }
    const onSubmit = () => {
        if(!allFieldsValid) return null
        const data = Object.keys(fields).reduce((obj, name) => {
            return {...obj, [name]: fields[name].value}
        }, {})
        submitData(data)
        setEditMode(false)
        setFields(initialFields)
    }

    return {fields,fieldNames, editMode,allFieldsValid,showToggle,changeHandler,onSubmit};
}
