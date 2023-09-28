const vara = 'Vara'
const toamna = 'Toamna'
const primavara = 'Primavara'
const iarna = 'Iarna'
const ianuarie ='Ianuarie'

const anotimpuri = vara

//varianta switch

switch (anotimpuri) {
    case toamna:
        console.log('Toamna e anotimp');
        break;
    case vara:
        console.log('Vara este anotimp');
        break
    case primavara:
        console.log('Primavara este anotimp');
        break
    case iarna:
        console.log('Iarna este anotimp');
    default:
        console.log('Nu este denumire de anotimp');
        break
}

//varianta if

if(anotimpuri === vara) console.log('Vara este anotimp');

//varianta obj

const sezon = {
    vara: 'Vara este anotimp',
    primavara: 'Primavara este anotimp',
    toamna: 'Toamna e anotimp',
    iarna: 'Iarna este anotimp'
}

console.log(sezon[anotimpuri] ? sezon[anotimpuri] : 'Nu este denumire de anotimp') // ceva nu iese aici...