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

    const today = new Date();
    let year = today.getFullYear()


    Pets.forEach(pet=>{
        const clone = template.content.cloneNode
        (true)

        // qui modifichiamo il template

        //aggiorniamo le foto 
        const image = clone.querySelector('.animal-card-photo img')
        image.src = pet.photo
        //console.log(pet.photo)

        //aggiorniamo i nomi
        const name = clone.querySelector('.animal-name')
        name.textContent= pet.name
        //console.log(pet.name)

        //aggiorniamo le speci
        const species = clone.querySelector('.second-span-species')
        species.textContent = pet.species 
        // console.log(pet.species)

        //aggiorniamo le età
        const birthYear = clone.querySelector('.first-span-age')
        
        // console.log(pet.birthYear)

        let age = year-pet.birthYear
        // console.log(age)
        
        
        if (age < 1){
            age = " is less than one year old";
        } else if (age == 1){
            age ="is one year old";
        } else {
            age =    " anni";
        }
        birthYear.textContent = age 


        //aggiorniamo le descrizioni
        const description = clone.querySelector('.animal-description')
        description.textContent = pet.description 
        // console.log(pet.description)
        
        // bottone di ogni articolo
        const animalsButton = clone.querySelector('.adotta-bottone')
        animalsButton.textContent = pet.animalsButton 
       
        wrapper.appendChild(clone)

        }
    )

}

displayPets()

// questo serve per i bottoni di filtraggio
function displayFilterAnimals(e){
    console.log(e.target.dataset.filterAnimals);

};
const filterButtons = document.querySelectorAll
('nav button');
filterButtons.forEach(button => {
    button.addEventListener('click',(e) => {
        displayFilterAnimals(e)
    }
    )
});
console.log(filterButtons)