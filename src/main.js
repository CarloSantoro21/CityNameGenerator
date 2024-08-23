import { first, second } from './data.js'

const max = [first.length, second.length]

const generateCity = () => {
    let firstStr = first[getRandomNum(max[0])]
    let secondStr = second[getRandomNum(max[1])]

    return firstStr+secondStr
}

const getRandomNum = (max) => {
    return Math.floor(Math.random()*max)
}

export { generateCity }
