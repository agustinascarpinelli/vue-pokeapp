<script setup>
    import axios from 'axios'
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import { useGetData } from '../composables/getData';

    const {data,error,loading,getData}=useGetData()

    getData("https://pokeapi.co/api/v2/pokemon")
</script>

<template>
    <h1>Pokemons</h1>
    <p v-if="loading">Loading...</p>
    <div class="alert alert-danger" v-if="error">Error:{{error}}</div>
    <div v-if="data">
<ul class="list-group">
    <li 
    v-for="pokemon in data.results" class="list-group-item">
    >
    <router-link :to="`/pokemons/${pokemon.name}`">{{pokemon.name}}</router-link>
</li>
</ul>
<div class="mt-2">
<button :disabled="!data.previous" class="btn btn-warning me-2"  @click="getData(data.previous)">Previous</button>
<button :disabled="!data.next" class="btn btn-primary" @click="getData(data.next)">Next</button>
</div>

</div>


</template>