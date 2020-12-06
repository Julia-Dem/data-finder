import {useMemo, useState} from 'react'


export const useFilterableData = (data, smallVolume) => {
    const [filterConfig, setFilterConfig] = useState({})
    const [notFound, setNotFound] = useState(false)

    const filteredData = useMemo(() => {
        setNotFound(false)
        const copyData = smallVolume ? [...data].slice(0, smallVolume) : [...data]
        if (!filterConfig.value) return copyData
        const filteredData = copyData.filter((item) => {
            const string = item[filterConfig.type].toString().toLowerCase()
            const substring = filterConfig.value.toLowerCase()
            return string.includes(substring)
        })
        if(!filteredData.length){
            setNotFound(true)
            return copyData
        }
        return filteredData

    }, [data, filterConfig, smallVolume])


    return {filteredData,  setFilterConfig, notFound};
}
