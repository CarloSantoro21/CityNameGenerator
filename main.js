const { first, second, third } = require('./modules/data.js')

const max = [first.length, second.length, third.length]

const generateCity = () => {
    let firstStr = first[getRandomIndex(max[0])]
    let secondStr = second[getRandomIndex(max[1])]
    let thirdStr = third[getRandomIndex(max[2])]

    return firstStr+secondStr+thirdStr
}

const getRandomNum = (max) => {
    return Math.floor(Math.random()*max)
}
