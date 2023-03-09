require('./config/database')
const Pokemon = require('./models/pokemon');
const PokemonType = require('./models/pokemonType');
const data = require('./data');

const p1 = Pokemon.deleteMany({})
const p2 = PokemonType.deleteMany({})

Promise.all([p1, p2])
.then(function(results) {
  console.log(results)
  return PokemonType.create(data.pokemonTypes)
}).then(function(results) {
  console.log(results)
}).then(function() {
  process.exit()
})
