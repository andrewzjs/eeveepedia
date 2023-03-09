const Pokemon = require("../models/pokemon")
const PokemonType = require("../models/pokemonType")
const axios = require("axios")


module.exports = {
    index,
    show,
    new: newPokemon,
    create,
    delete: deleteEntry,
    update,
    edit,
}

async function index(req, res) {
    try {
        const pokemons = await Pokemon.find({}).populate("pokemonTypes")
        res.render("pokemons/index", {title: "EeveePedia", pokemons})
    } catch(err) {
        console.log(err)
    }
}

async function newPokemon(req, res) {
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1280&offset=0")
        console.log(Object.values(response.data)[1])
        const pokemonTypes = await PokemonType.find({})
        res.render("pokemons/new", {title: "EeveePedia", pokemonTypes, pokemons: response.data.results})

    } catch(err) {
        console.log(err)
    }
}

async function show(req, res) {
    try {

        const pokemons = await Pokemon.findById(req.params.id).populate("pokemonTypes")
        res.render("pokemons/show", {title: "EeveePedia", pokemons})
    } catch(err) {
        console.log(err)
    }
}

async function create(req, res) {
    // https://git.generalassemb.ly/andrewzjs/sei-59/blob/main/w05/d2/mongoose-referencing/instructor/mongoose-movies/controllers/performers.js
    // from sei-59/w05/d2 lesson: (to fix display date)
    // const d = req.body.dateCaught;
    // req.body.dateCaught = `${d.substr(5, 2)}-${d.substr(8, 2)}-${d.substr(0, 4)}`;
    try {

        for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
        const pokemons = await Pokemon.create(req.body)
        console.log(req.body)
        res.redirect(`/pokemons/${pokemons._id}`)
    } catch(err) {
        console.log(err)
    }
}

async function update(req, res) {
    const pokemons = await Pokemon.findById(req.params.id).populate("pokemonTypes")
    try {
        for (let key in req.body) {
            if (req.body[key] === '') delete req.body[key];
    }
    for (let key in req.body) pokemons[key] = req.body[key]
        pokemons.save()
        res.redirect(`/pokemons/${pokemons._id}`)
    } catch(err){
        console.log(err)
        return res.redirect(`/pokemons/${pokemons._id}/edit`)
    }
}

async function deleteEntry(req,res) {
    try {
        await Pokemon.deleteOne({_id: req.params.id})
        res.redirect("/pokemons")
    } catch(err){
        console.log(err)
    }
}


async function edit(req, res) {
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1280&offset=0")
        const pokemonTypes = await PokemonType.find({})
        const pokemons = await Pokemon.findById(req.params.id).populate("pokemonTypes")
        res.render("pokemons/edit", {title: "EeveePedia", pokemonTypes, pokemons, pokemons1: response.data.results})
    } catch(err){
        console.log(err)
    }
}
