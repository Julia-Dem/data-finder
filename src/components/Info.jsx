import React, {useContext} from "react"
import {Context} from "../context/context"

export const Info = () => {
    const {info, setInfo} = useContext(Context)
    if (!info) return null
    const {firstName, lastName, description, address} = info

    return (
        <div className="jumbotron jumbotron-fluid" id="info">
            <div className="container">
                <button onClick={() => setInfo(null)} type="button" className="close" data-dismiss="alert"
                        aria-label="Close">
                    <span>&times;</span>
                </button>
                <h4 className="ml-2">Selected person : <b>{firstName + ' ' + lastName}</b></h4>
                <ul className="list-group list-group-flush">
                    {description && (
                        <li className="list-group-item">Description :<p className="mb-0">{description}</p></li>)}
                    {address && (<>
                        <li className="list-group-item">Address : <b>{address.streetAddress}</b></li>
                        <li className="list-group-item">City : <b>{address.city}</b></li>
                        <li className="list-group-item">State : <b>{address.state}</b></li>
                        <li className="list-group-item">Zip : <b>{address.zip}</b></li>
                    </>)}
                </ul>
            </div>
        </div>
    )
}
