import { generateCity } from '../src/main.js'

console.log(generateCity())

document.getElementById('generate-bttn').addEventListener('click', () => {
    console.log("a")
    document.getElementById('city-name').innerText = generateCity()
})