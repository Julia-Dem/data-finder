import React from "react"

export const FormControls = ({showToggle, editMode, allFieldsValid, onSubmit}) => {
    return (
        <div className="input-group-append input-group__custom " id="button-addon4">
            <button
                type="button"
                className={`btn btn-sm btn__custom font-weight-bold ${editMode ? 'btn-outline-danger' : 'btn-outline-success'}`}
                onClick={showToggle}
            >
                {editMode ? "Cancel" : "Add data"}
            </button>
            {allFieldsValid && (<button
                type="button"
                className="btn btn__custom btn-outline-success btn-sm btn-block font-weight-bold"
                onClick={onSubmit}
            >
                Add to table
            </button>)}
        </div>
    )
}
