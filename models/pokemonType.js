const mongoose = require("mongoose")
const Schema = mongoose.Schema

const typesSchema = new Schema({
    type1: {
        type: String,
        enum: [
            "Normal",
            "Fire",
            "Water",
            "Grass",
            "Electric",
            "Ice",
            "Fighting",
            "Poison",
            "Ground",
            "Flying",
            "Psychic",
            "Bug",
            "Rock",
            "Ghost",
            "Dark",
            "Dragon",
            "Steel",
            "Fairy",
        ]
    }, type2: {
        type: String,
        enum: [
            "Normal",
            "Fire",
            "Water",
            "Grass",
            "Electric",
            "Ice",
            "Fighting",
            "Poison",
            "Ground",
            "Flying",
            "Psychic",
            "Bug",
            "Rock",
            "Ghost",
            "Dark",
            "Dragon",
            "Steel",
            "Fairy",
        ]}
    }, {timestamps: true})

module.exports = mongoose.model("PokemonType", typesSchema)