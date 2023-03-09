const mongoose = require("mongoose")
const Schema = mongoose.Schema

const movesSchema = new Schema({
    moveName: {
        type: String,
    },
    power: {
        type: Number,
    }, accuracy: {
        type: Number,
    }, moveType: {
        type: String,
    }
})

const pokemonsSchema = new Schema({
    // num: {
    //     type: Number,

    // }
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
        default: Date.now()
    }, gender: {
        type: String,
    }, isShiny: {
        type: Boolean,
        default: false 
    }, moves: [movesSchema],
    specialAbility: {
        type: String,
        default: "N/A"
    }, description: {
        type: String,
        default: "N/A"
    }, moves: [movesSchema],
    pokemonTypes: {type: Schema.Types.ObjectId, ref: "PokemonType"}



}, {timestamps: true})



module.exports = mongoose.model("Pokemon", pokemonsSchema)