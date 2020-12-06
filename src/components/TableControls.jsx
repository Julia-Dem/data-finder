import React from "react"
import {useFormProgressing} from "../hooks/formProcessing.hook"
import {FilterControls} from "./FilterControls"
import {FormControls} from "./FormControls"
import {Form} from "./Form"


export const TableControls = ({addData,  setFilterConfig}) => {
    const initialFields = {
        id: {value: '', valid: false},
        firstName: {value: '', valid: false},
        lastName: {value: '', valid: false},
        email: {value: '', valid: false},
        phone: {value: '', valid: false}
    }
    const {fields, fieldNames ,showToggle,editMode,allFieldsValid,changeHandler,onSubmit} = useFormProgressing(initialFields, addData)

    return (
        <div>
            <div className="input-group " role="toolbar" aria-label="Toolbar with button groups">
                <div className="input-group input-group__custom mb-2">
                    <FilterControls fieldNames={fieldNames} setFilterConfig={setFilterConfig}/>
                    <FormControls showToggle={showToggle} editMode={editMode} allFieldsValid={allFieldsValid} onSubmit={onSubmit}/>
                </div>
            </div>
            {editMode && (<div className="card mb-3 shadow-sm">
                <div className="card-body">
                    <Form onSubmit={onSubmit} changeHandler={changeHandler} fieldNames={fieldNames} fields={fields}/>
                </div>
            </div>)}
        </div>
    )
}
