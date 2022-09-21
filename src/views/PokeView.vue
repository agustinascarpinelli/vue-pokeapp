<script setup>
import axios from 'axios';
import {ref} from 'vue'
import { useRoute,useRouter } from 'vue-router';
import { useGetData } from '../composables/getData';
const {error,loading,data,getData}=useGetData()
const route=useRoute()
const router=useRouter()
const pokeSprite=ref({})

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
</div>
<div v-if="error"><h1> There´s no pokemon with the name : {{$route.params.name}}</h1></div>
<br/>

<button @click="back()" class="btn btn-primary">Get back</button>
</div>
</template>

<style >
    
</style>