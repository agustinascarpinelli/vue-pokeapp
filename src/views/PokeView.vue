<script setup>
import { useRoute,useRouter } from 'vue-router';
import { useGetData } from '../composables/getData';
import { useFavoriteStore } from '../store/favorites';
const {error,loading,data,getData}=useGetData()
const route=useRoute()
const router=useRouter()
const useFavorite=useFavoriteStore()
const {add,findPokemon}=useFavorite
const back=()=>{
    router.push("/pokemons")
}
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)


</script>

<template >

    <div class="container text-center">
        <p v-if="loading">Loading...</p>
        <div  v-if="data">
<h1 >Pokemon name: {{$route.params.name}}</h1>
<img :src="data.sprites?.front_default" alt="pokemon"/>
<br/>
<button class="btn btn-outline-primary mb-2" @click="add(data)" :disabled="findPokemon(data.species.name)">Add to favorites</button>
</div>
<div v-if="error"><h1> There´s no pokemon with the name : {{$route.params.name}}</h1></div>
<br/>

<button @click="back()" class="btn btn-primary" >Get back</button>
</div>
</template>

<style >
    
</style>