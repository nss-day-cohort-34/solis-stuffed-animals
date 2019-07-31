const createAnimal = (
    stuffingMaterial, furMaterial,
    eyeballMaterial, color,
    hasClothing, species
) => {
    return {
        toString () {
            return `<animal>The ${this.color} ${this.species} filled with ${this.material.stuffing}</animal>`
        },
        material: {
            stuffing: stuffingMaterial,
            fur: furMaterial,
            eyeball: eyeballMaterial
        },
        color: color,
        hasClothing: hasClothing,
        species: species
    }
}

const animalContainer = document.querySelector("#animals")

const render = (animalString) => {
    animalContainer.innerHTML += animalString
}


const diggy = createAnimal("cotton",
    "wool",
    "felt",
    "goldenrod",
    false,
    "Iguana")

const sonic = createAnimal("beans",
    "tortilla",
    "human",
    "fuschia",
    true,
    "Hedgehog")

render(sonic)
render(diggy)

