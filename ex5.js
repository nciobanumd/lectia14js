class animale {
    constructor (date){
        this.picioare = date.picioare
        this.coada = date.coada
        this.urechi = date.urechi
        this.ochi = date.ochi
    }
}

class Pisica extends animale {
    constructor(options) {
        super(options)
        this.pet = 'animal de companie'
        this.hrana = 'peste'

    }
}

class CaineLup extends animale {
    constructor(options) {
        super(options)
        this.pet = 'animal salbatic'
        this.hrana = "carnivor"
    }
}

const animal1 = new Pisica ({
    picioare: 4,
    coada: 1,
    urechi: 2,
    ochi: 2,
    pet: 'animal de companie',
    hrana: 'peste'
})
const animal2 = new CaineLup ({
    picioare: 4,
    coada: 1,
    urechi: 2,
    ochi: 2,
    pet: 'animal salbatic',
    hrana: 'carnivor'
})

console.log(animal1)
console.log(animal2);