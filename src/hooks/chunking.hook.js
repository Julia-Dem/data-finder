import {useMemo, useEffect, useState} from 'react'
import {getChunkArray} from "../utils";


export const useChunkedData = (data, smallVolume, chunkSize = 20) => {
    const [chunkNumber, setChunkNumber] = useState(1)
    const totalChunks = Math.ceil(data.length / chunkSize)

    const chunkData = useMemo(() =>  getChunkArray(data, chunkSize, chunkNumber), [data, chunkSize, chunkNumber])

    useEffect(() => {
        setChunkNumber(1)
    }, [smallVolume])


    return {chunkNumber, setChunkNumber, totalChunks, chunkData};
}
