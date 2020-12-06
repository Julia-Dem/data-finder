import {useMemo, useState} from 'react'
import {getSortingArray} from "../utils";


export const useSortableData = (data=[], config = {}) => {
    const [sortConfig, setSortConfig] = useState(config);

    const sortedData = useMemo(() => {
        if (!sortConfig.type) return data
        return getSortingArray([...data], sortConfig.type, sortConfig.asc)
    }, [data, sortConfig])

    const sortHandler = (type) => {
        if (sortConfig.type === type) {
            setSortConfig({...sortConfig, asc: !sortConfig.asc})
        } else {
            setSortConfig({type, asc: true})
        }
    }

    return {sortedData, sortConfig, sortHandler};
}
