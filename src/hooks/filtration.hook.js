import {useMemo, useState} from 'react'


export const useFilterableData = (data) => {
    const [filterConfig, setFilterConfig] = useState({})
    const [notFound, setNotFound] = useState(false)

    const filteredData = useMemo(() => {
        setNotFound(false)
        if (!filterConfig.value) return data
        const filteredData = data.filter((item) => {
            const string = item[filterConfig.type].toString().toLowerCase()
            const substring = filterConfig.value.toLowerCase()
            return string.includes(substring)
        })
        if(!filteredData.length){
            setNotFound(true)
            return data
        }
        return filteredData

    }, [data, filterConfig])


    return {filteredData,  setFilterConfig, notFound};
}
