import { generateCity } from './src/main.js'

document.getElementById('generate-bttn').addEventListener('click', () => {
    document.getElementById('city-name').innerText = generateCity()
})