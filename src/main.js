import { first, second, third } from './data.js'

const max = [first.length, second.length, third.length]

const generateCity = () => {
    let firstStr = first[getRandomNum(max[0])]
    let secondStr = second[getRandomNum(max[1])]
    let thirdStr = third[getRandomNum(max[2])]

    return firstStr+secondStr+thirdStr
}

const getRandomNum = (max) => {
    return Math.floor(Math.random()*max)
}

export { generateCity }
