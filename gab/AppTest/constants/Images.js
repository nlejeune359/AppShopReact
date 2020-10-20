//les require dynamiques poour les img ne fonctionne pas
//les require avec une variable dynamique ne fonctionnerons jamais.
//il faut passer par un const const img = {poisson : {nom :, bla:}, prout :{}

const images = {
    fish: {
        name: 'poisson',
        uri: require('../assets/poisson.png')
    }
}

export { images };