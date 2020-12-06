export const getChunkArray = (array, chunkSize, numberChunk) => {
    if (array.length < chunkSize) return array
    const firstIndex = chunkSize * (numberChunk - 1)
    const lastIndex = firstIndex + chunkSize
    return array.slice(firstIndex, lastIndex)
}
export const getWithoutDuplicatesArray = (array, firstField, secondField) => {
    return array.filter((item, index, self) =>
        index === self.findIndex((i) => (i[firstField] === item[firstField] && i[secondField] === item[secondField]))
    )
}
export const getSortingArray = (array, type, asc) => ([...array].sort((a, b) => {
    if (asc) return a[type] > b[type] ? 1 : -1
    if (!asc) return a[type] < b[type] ? 1 : -1
    return 0
}))

export const isFormValid = (field, value) => {

    const regTel = /^((8|\+7)?)?(\(?\d{3}\)?)?[\d\- ]{7,10}$/
    const regMail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
    const regName = /^([\D-]+)$/i

    switch (field) {
        case 'id':
            return !!value && 0 < +value && +value < 100000
        case 'email':
            return !!value && regMail.test(value)
        case 'phone':
            return regTel.test(value)
        default:
            return !!value && regName.test(value) && value.length > 2
    }
}


export const withCapitalLetter = (str) => str[0].toUpperCase() + str.slice(1)

