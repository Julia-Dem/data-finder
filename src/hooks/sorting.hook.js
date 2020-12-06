import {useMemo, useState} from 'react'
import {getSortingArray} from "../utils";


export const useSortableData = (data, smallVolume, config = {}) => {
    const [sortConfig, setSortConfig] = useState(config);

    const sortedData = useMemo(() => {
        let sortedData = smallVolume ? [...data].slice(0, smallVolume) : [...data]
        if (!sortConfig.type) return sortedData
        return getSortingArray(sortedData, sortConfig.type, sortConfig.asc)
    }, [data, sortConfig, smallVolume])

    const sortHandler = (type) => {
        if (sortConfig.type === type) {
            setSortConfig({...sortConfig, asc: !sortConfig.asc})
        } else {
            setSortConfig({type, asc: true})
        }
    }

    return {sortedData, sortConfig, sortHandler};
}
