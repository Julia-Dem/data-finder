import React, {useState, useEffect} from "react"
import {withCapitalLetter} from "../utils"
import {searchIcon} from "../icons"

export const FilterControls = ({fieldNames, setFilterConfig}) => {
    const initialConfig = {
        type: 'firstName',
        value: ''
    }
    const [showDropdown, setShowDropdown] = useState(false)
    const [localFilterConfig, setLocalFilterConfig] = useState(initialConfig)
    useEffect(()=>{
        setFilterConfig(initialConfig)
        //eslint-disable-next-line
    },[])

    const onClickSearchType = (e, name) => {
        e.preventDefault()
        setLocalFilterConfig({...localFilterConfig, type: name})
        setShowDropdown(false)
    }

    const changeHandler = (e) => {
        setLocalFilterConfig({...localFilterConfig, value: e.target.value})
    }
    const onSubmit = () => {
        setFilterConfig({...localFilterConfig})
    }


    return (
        <>
            <div className="input-group-prepend position-relative">
                <button type="button"
                        className="btn btn-warning dropdown-toggle dropdown-toggle-split btn__custom mt-0 "
                        data-toggle="Search Type" aria-haspopup="true" aria-expanded="false"
                        onClick={() => setShowDropdown(!showDropdown)}>
                    {withCapitalLetter(localFilterConfig.type) + ' '}
                </button>
                <div className={`dropdown-menu ${showDropdown && 'show'}`}>
                    {fieldNames.map((name, i) => (
                        <a key={i}
                           className="dropdown-item"
                           onClick={(e) => onClickSearchType(e, name)}
                           href="/">{withCapitalLetter(name)}</a>
                    ))}
                </div>
            </div>
            <input value={localFilterConfig.value}
                   onChange={(e) => changeHandler(e)}
                   onKeyPress={(e)=>{
                       if (e.key === 'Enter') {
                           onSubmit()
                       }}}
                   type="text"
                   className="form-control border-warning"
                   placeholder="Table search"/>
            <div className="input-group-append input-group__custom " id="button-addon4">
                <button type="button"
                        className="btn btn-outline-warning btn__custom"
                        onClick={onSubmit}
                >
                    {searchIcon}
                </button>
            </div>
        </>
    )
}
