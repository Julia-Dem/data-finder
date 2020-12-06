import React, {useContext} from 'react'
import {Loader} from "./Loader"
import {Pagination} from "./Pagination"
import {useSortableData} from '../hooks/sorting.hook'
import {useChunkedData} from "../hooks/chunking.hook"
import {withCapitalLetter} from "../utils"
import {iconAsc, iconDesc, topIcon} from "../icons"
import {TableControls} from "./TableControls"
import {Context} from "../context/context"
import {useFilterableData} from "../hooks/filtration.hook"
import {Error} from "./Error"


export const Table = () => {
    const {smallLoading, bigLoading, data, smallVolume, setInfo, addData, error} = useContext(Context)
    const {sortedData, sortConfig, sortHandler} = useSortableData(data, smallVolume);
    const {filteredData,  setFilterConfig , notFound} = useFilterableData(sortedData)
    const {chunkData, chunkNumber, setChunkNumber, totalChunks} = useChunkedData(filteredData, smallVolume)
    const headerNames = ['id', 'firstName', 'lastName', 'email', 'phone']


    const headersMarkup = headerNames.map((header, index) => (
        <th key={index} scope="col" onClick={() => sortHandler(header)}>
            {withCapitalLetter(header)} {sortConfig.type === header && (sortConfig.asc ? iconAsc : iconDesc)}
        </th>
    ))


    if (smallLoading) return <Loader/>
    if(error) return <Error text={error}/>

    if (chunkData.length) return (
        <>
            <TableControls addData={addData} setFilterConfig={setFilterConfig}/>
            {notFound && <Error text='Not found'/>}
            <table className="table table-hover table-responsive-md mt" id="table">
                <thead>
                <tr>{headersMarkup}</tr>
                </thead>
                <tbody>
                {chunkData.map((p) => {
                    return (
                        <tr onClick={() => setInfo(p)} key={p.id + p.firstName}>
                            <th scope="row">{p.id}</th>
                            <td>{withCapitalLetter(p.firstName)}</td>
                            <td>{withCapitalLetter(p.lastName)}</td>
                            <td>{p.email}</td>
                            <td>{p.phone}</td>
                        </tr>)
                })}
                </tbody>
            </table>
            {bigLoading && <Loader/>}
            {totalChunks > 1 && <Pagination chunkNumber={chunkNumber} setChunkNumber={setChunkNumber} totalChunks={totalChunks}/>}
        </>
    )
    return <p className="text-muted text-center">Determine the amount of data to load {topIcon}</p>
}
