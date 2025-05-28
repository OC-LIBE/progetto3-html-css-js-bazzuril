const website = "https://frapollif.github.io/pet-adoption-data"

async function getPetsData() {
    const data = await fetch(`${website}/pets.json`) 
    const petsdata = await data.json()
    return petsdata

}

async function displayPets() {
    
    const Pets = await getPetsData();
    const template = document.querySelector('#animal-card-template');
    const wrapper = document.querySelector ('main')

    console.log(template)

    Pets.forEach(pet=>{
        const clone = template.content.cloneNode
        (true)

        // qui modifichiamo il template

        //aggiorniamo le foto
        const image = clone.querySelector('.animal-card-photo img')
        image.src = pet.photo
        console.log(pet.photo)
        //aggiorniamo i nomi
        const name = clone.querySelector('h1')
        name.text = pet.name
        console.log(pet.name)
        //aggiorniamo le speci
        const species = clone.querySelector('span')
        name.h1 = pet.name
        console.log(pet.name)
        //aggiorniamo le età
        //aggiorniamo le descrizioni
        // aggiungiamo l'articolo alla pagina
        wrapper.appendChild(clone)

        }
    )

}

displayPets()