const mongoose = require("mongoose")
const Schema = mongoose.Schema

// --icebox--
// const movesSchema = new Schema({
//     moveName: {
//         type: String,
//     },
//     power: {
//         type: Number,
//     }, accuracy: {
//         type: Number,
//     }, moveType: {
//         type: String,
//     }
// })

const pokemonsSchema = new Schema({
    pokemonNum: {
        type: Number,
    },
    pokemonName: {
        type: String,
    }, height: {
        type: String,
        default: "N/A"
    }, weight: {
        type: String,
        default: "N/A"
    }, dateCaught: {
        type: Date,
        default: Date.now
    }, gender: {
        type: String,
    }, isShiny: {
        type: Boolean,
        default: false 
    }, specialAbility: {
        type: String,
        default: "N/A"
    }, description: {
        type: String,
        default: "N/A"
    }, 
    pokemonTypes: {type: Schema.Types.ObjectId, ref: "PokemonType"}



}, {timestamps: true})



module.exports = mongoose.model("Pokemon", pokemonsSchema)