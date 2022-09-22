<script setup>
import { useFavoriteStore } from '../store/favorites';
import { storeToRefs } from 'pinia';

const useFavorite = useFavoriteStore()
const { favorites } = storeToRefs(useFavorite)
const { remove } = useFavorite

</script>

<template>
    <h1>Favorites</h1>
    <p v-if="favorites.length===0">No favorites </p>
    <ul class="list-group" v-else>
        <li v-for="pokemon in favorites" :key="pokemon.id" class="list-group-item">
            <div>{{pokemon.name}}</div>
            <router-link class="btn btn-sm btn-outline-primary mb-2 mt-2" :to="`/pokemons/${pokemon.name}`">
                More info
            </router-link>
            <br/>
            <button class="btn btn-sm btn-outline-danger" @click="remove(pokemon.id)">
                Remove
            </button>
        </li>
    </ul>

</template>