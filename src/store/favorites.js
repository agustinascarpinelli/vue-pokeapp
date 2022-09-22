import {defineStore} from 'pinia'
import { ref } from 'vue'

export const useFavoriteStore=defineStore('favorites', ()=>{
    const favorites =ref([])

    if (localStorage.getItem("favorites")){
        favorites.value=JSON.parse(localStorage.getItem("favorites"))
    }

    const add=(pokemon)=>{
        favorites.value.push(pokemon)
        localStorage.setItem("favorites",JSON.stringify(favorites.value))
    }

    const remove=(id)=>{
        favorites.value=favorites.value.filter((pokemon)=>pokemon.id!==id)
        localStorage.setItem('favorites',JSON.stringify(favorites.value))
    }

    const findPokemon=(name)=>
        favorites.value.find((pokemon)=>pokemon.name===name)

    
    return{
        favorites,
        add,
        remove,
        findPokemon
    }
})